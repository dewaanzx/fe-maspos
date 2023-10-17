import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useTransactionStore = defineStore({
  id: "transaction",
  state: () => ({
    transactions: [],
    transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/transaction`;

      const transactions = await axiosWrapper.get(url);

      if (transactions) {
        this.transactions = transactions;
      }
    },
    async add(data) {
      const transaction = await axiosWrapper.post(
        `${baseUrl}/transaction`,
        data,
        true
      );

      this.transaction = transaction.data;

      return transaction;
    },
  },
});
