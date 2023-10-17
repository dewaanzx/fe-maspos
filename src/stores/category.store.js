import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categorys: [],
    category: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/category`;

      const categorys = await axiosWrapper.get(url);

      if (categorys) {
        this.categorys = categorys.data;
      }
    },
    async add(data) {
      const category = await axiosWrapper.post(
        `${baseUrl}/category`,
        data,
        true
      );

      this.category = category.data;

      return category;
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/category/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/category/${id}`, {}, true);
    },
  },
});
