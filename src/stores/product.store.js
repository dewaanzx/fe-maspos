import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    product: null,
  }),
  actions: {
    async fetch(id) {
      let url = `${baseUrl}/product/${id}`;

      const products = await axiosWrapper.get(url);

      if (products) {
        this.products = products.data;
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category_id", data.category_id);
      formData.append("price", data.price);
      formData.append("image", data.image);

      console.log(formData);

      const product = await axiosWrapper.post(
        `${baseUrl}/product`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.product = product.data;

      return product;
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/product/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/product/${id}`, {}, true);
    },
  },
});
