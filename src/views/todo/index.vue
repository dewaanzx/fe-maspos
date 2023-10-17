<template>
	<div class="flex justify-between items-center">
	  <h1 class="font-semibold text-lg">Add Todo</h1>
	  <ButtonPrimary @click="$router.push('/todo/create')">
		Add Todo
	  </ButtonPrimary>
	</div>
  
	<div class="relative overflow-x-auto mt-5">
	  <table class="w-full text-sm text-left text-gray-500">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50">
		  <tr>
			<th scope="col" class="px-6 py-3">Name</th>
  
			<th scope="col" class="px-6 py-3">Action</th>
		  </tr>
		</thead>
		<tbody>
		  <tr class="bg-white border-b" v-for="todo in todoStore.todos">
			<th
			  scope="row"
			  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
			  {{ todo.task }}
			</th>
			<td class="px-6 py-4">
			  <ButtonDanger class="ml-2" @click="deleteData(todo.id)">
				<i class="ri-delete-bin-line"></i>
			  </ButtonDanger>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  </template>
  
  <script>
  import { useTodoStore } from "@/stores/todo.store.js";
  
  export default {
	data() {
	  return {
		todoStore: useTodoStore(),
	  };
	},
	mounted() {
	  this.todoStore.fetch();
	},
	methods: {
	  async deleteData(id) {
		this.$swal({
		  title: "Are you sure?",
		  text: "You won't be able to revert this!",
		  icon: "warning",
		  showCancelButton: true,
		  confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
		  if (result.isConfirmed) {
			await this.todoStore.delete(id);
  
			this.todoStore.fetch();
		  }
		});
	  },
	},
  };
  </script>
  