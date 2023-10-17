<template>
  <div class="flex justify-center content-center mt-[-20px]">
    <table class="table w-10/12 text-center font-bold text-[20px]">
      <thead class="border-b-2 h-[70px] text-center">
        <tr class="my-8">
          <th></th>
          <th class="text-left pl-[80px]">Product</th>
          <th></th>
          <th>Qty</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="h-[280px] text-center items-center justify-center">
        <tr class="border-b-2" v-for="(cart, index) in cartStore.carts.data">
          <td>{{ index + 1 }}</td>
          <td class="flex justify-center items-center">
            <img
              :src="'http://localhost:8080/uploads/' + cart.image"
              class="h-[200px] w-[200px] my-[20px] rounded"
              style="object-fit: cover;"
              alt=""
            />
          </td>
          <td class="text-left">
            <p>{{ cart.name }}</p>
            <p>{{ formatCurrency(cart.price) }}</p>
          </td>
          <td>
            <div class="flex justify-center items-center space-x-4">
              <button
                v-if="cart.quantity <= 1"
                class="h-[30px] w-[30px] bg-blue-600 rounded-full text-xl text-white hover:bg-blue-700"
                @click.prevent="deleteData(cart.id)"
              >-</button>
              <button
                v-if="cart.quantity >= 2"
                class="h-[30px] w-[30px] bg-blue-600 rounded-full text-xl text-white hover:bg-blue-700"
                @click.prevent="increment(cart.product_id, 'dec')"
              >
                -
              </button>
              <p>{{ cart.quantity }}</p>
              <button
                class="h-[30px] w-[30px] bg-blue-600 rounded-full text-xl text-white hover:bg-blue-700"
                @click.prevent="increment(cart.product_id, 'inc')"
              >
                +
              </button>
            </div>
          </td>
          <td>
            <p class="text-[20px]">{{ formatCurrency(cart.price) }}</p>
          </td>
          <td>
            <button
              class="w-[129px] h-[40px] bg-red-500 font-light text-[14px] text-white rounded-md hover:bg-red-600"
              @click.prevent="deleteData(cart.id)"
            >
              Remove item
            </button>
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p class="text-[20px] mt-[40px]">TOTAL</p>
          </td>
          <td>
            <p class="text-center mt-[40px]">{{ formatCurrency(cartStore.carts.total) }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- bagian button -->
  <div class="flex space-x-4 mt-28 justify-end">
    <button
      class="w-[187px] h-[60px] border border-[#1963D2] rounded-md text-[16px] text-[#1963D2] hover:bg-blue-100"
      @click="$router.push('/maspos/1')"
    >
      Back to Home
    </button>
    <button
      class="w-[136px] h-[60px] border rounded-md text-[16px] text-white bg-[#1963D2] hover:bg-blue-700"
      @click="create()"
    >
      Pay Bill
    </button>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart.store.js";
import { useCounterStore } from "@/stores/counter.store.js";
import { useTransactionStore } from "@/stores/transaction.store.js";

export default {
  data() {
    return {
      cartStore: useCartStore(),
      counterStore: useCounterStore(),
      transactionStore: useTransactionStore(),
      formData: {
        product_id: null,
        counter: null,
      },
    };
  },
  methods: {
    async create() {
      let transaction = await this.transactionStore.add();

      if (transaction) {
        this.$router.push("/maspos/transaction-process/");
      }
    },
    async deleteData(id) {
      this.$swal({
        title: "Are you sure?",
        text: "Delete Product from Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.cartStore.delete(id);

          this.cartStore.fetch();
        }
      });
    },
    async increment(product_id, counter) {
      this.formData.product_id = product_id;
      this.formData.counter = counter;

      let cart = await this.cartStore.update(this.formData);

      if (cart) {
        await this.cartStore.fetch();
      }
    },
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
    this.cartStore.fetch();
  },
};
</script>
