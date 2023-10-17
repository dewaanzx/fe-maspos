<template>
	<div class="flex justify-between items-center">
	  <h1 class="font-semibold text-lg">Add Todo Page</h1>
	</div>
  
	<form action="" @submit.prevent="create">
	  <div class="mb-6">
		<label for="task" class="block mb-2 text-sm font-medium text-gray-900"
		  >Name <span class="text-red-600">*</span></label
		>
		<input
		  v-model="formData.task"
		  type="text"
		  id="task"
		  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
		  placeholder="Belajar Vue"
		  required
		/>
	  </div>
  
	  <ButtonPrimary :type="'submit'"> Submit </ButtonPrimary>
	  <ButtonDanger @click="$router.push('/todo')" class="ml-3">
		Cancel
	  </ButtonDanger>
	</form>
  </template>
  
  <script>
  import { useTodoStore } from "@/stores/todo.store.js";
  
  export default {
	data() {
	  return {
		todoStore: useTodoStore(),
		formData: {
		  task: null,
		},
	  };
	},
	methods: {
	  async create() {
		let todo = await this.todoStore.add(this.formData);
  
		if (todo) {
		  this.$router.push("/todo");
		}
	  },
	},
  };
  </script>
  