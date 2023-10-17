<template>
  <div
    class="h-screen w-screen mt-[-20px] bg-[#fafafa] ml-[-20px] flex justify-center items-center"
  >
    <div
      class="w-[500px] h-[350px] bg-[#ffffff] rounded-lg flex justify-center items-center shadow-lg mt-[-150px]"
    >
      <div class="grid justify-items-center">
        <p class="text[20px] font-bold pt-[-30px]">Payment Successful</p>
        <img
          src="../../assets/check.png"
          alt=""
          class="mw-[100px] h-[100px] pt-[30px]"
        />
        <a v-for="(transaction, index) in transactionStore.transactions.data">
          <p
            class="text[20px] font-bold pt-[30px]"
            v-if="index === transactionStore.transactions.data.length - 1"
          >
            {{ formatCurrency(transaction.total) }}
          </p>
        </a>
        <button
          class="w-[153px] h-[44px] border border-blue-600 rounded-md text-[14px] text-blue-600 hover:bg-blue-300 mt-10"
          @click="$router.push('/maspos/1')"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTransactionStore } from "@/stores/transaction.store.js";

export default {
  data() {
    return {
      transactionStore: useTransactionStore(),
    };
  },
  methods: {
    formatCurrency(price) {
      if (price === null || price === undefined) {
        return "0";
      }

      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      });
    },
  },
  mounted() {
    this.transactionStore.fetch();
  },
};
</script>
