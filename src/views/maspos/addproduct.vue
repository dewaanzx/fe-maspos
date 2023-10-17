<template>
  <div class="bg-[#fafafa]">
    <form @submit.prevent="create" enctype="multipart/form-data">
      <label for="">Product</label>
      <div>
        kategori
        <select v-model="formData.category_id">
          <option
            v-for="category in categoryStore.categorys"
            :value="category.id"
            :key="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <input
          v-model="formData.name"
          type="text"
          placeholder="tulis product"
        />
      </div>
      <div>
        <input v-model="formData.price" type="text" placeholder="tulis harga" />
      </div>
      <div>
        <input
          type="file"
          @change="handleFileChange"
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <button class="w-[100px] h-100px bg-blue-400">Tambah</button>
    </form>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/product.store.js";
import { useCategoryStore } from "@/stores/category.store.js";

export default {
  data() {
    return {
      categoryStore: useCategoryStore(),
      productStore: useProductStore(),
      formData: {
        name: null,
        category_id: null,
        price: null,
        image: null,
      },
    };
  },
  mounted() {
    this.categoryStore.fetch();
  },
  methods: {
    handleFileChange(e) {
      const image = e.target.files[0];
      this.formData.image = image;
    },
    async create() {
      let product = await this.productStore.add(this.formData);

      if (product) {
        this.$router.push("/maspos/" + this.formData.category_id);
      }
    },
  },
};
</script>
