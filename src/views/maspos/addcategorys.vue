<template>
  <div class="bg-[#fafafa]">
    <form action="" @submit.prevent="create">
      <label for="">Category</label>
      <input v-model="formData.name" type="text" placeholder="tulis kategori" />
      <button class="w-[100px] h-100px bg-blue-400">Tambah</button>
    </form>
  </div>
</template>

<script>
import { useCategoryStore } from "@/stores/category.store.js";

export default {
  data() {
    return {
      categoryStore: useCategoryStore(),
      formData: {
        name: null,
      },
    };
  },
  methods: {
    async create() {
      let category = await this.categoryStore.add(this.formData);

      if (category) {
        this.$router.push("/maspos");
      }
    },
  },
};
</script>
