import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    carts: [],
    cart: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/cart`;

      const carts = await axiosWrapper.get(url);

      if (carts) {
        this.carts = carts;
      }
    },
    async add(data) {
      const cart = await axiosWrapper.post(`${baseUrl}/cart`, data, true);

      this.cart = cart.data;

      return cart;
    },
    async update(data) {
      const cart = await axiosWrapper.put(`${baseUrl}/cart`, data, true);

      this.cart = cart.data;

      return cart;
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/cart/${id}`, {}, true);
    },
  },
});
