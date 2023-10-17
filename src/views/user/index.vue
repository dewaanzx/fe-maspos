<template>
  <div class="flex justify-between items-center">
    <h1 class="font-semibold text-lg">Add User Page</h1>
    <ButtonPrimary @click="$router.push('/user/create')">
      Add User
    </ButtonPrimary>
  </div>

  <div class="relative overflow-x-auto mt-5">
    <table class="w-full text-sm text-left text-gray-700 bg-white border rounded-lg shadow-md">
		<thead class="text-xs text-white uppercase bg-gray-800">
		  <tr>
			<th scope="col" class="px-6 py-3 text-center">Name</th>
			<th scope="col" class="px-6 py-3 text-center">Email</th>
			<th scope="col" class="px-6 py-3 text-center">Action</th>
		  </tr>
		</thead>
      <tbody>
        <tr class="bg-white border-b" v-for="user in userStore.users">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
            {{user.name}}
          </th>
          <td class="px-6 py-4 text-center">
            {{user.email}}
          </td>
          <td class="px-6 py-4 text-center">
            <ButtonPrimary @click="updateData(user)">
              <i class="ri-edit-box-line"></i>
            </ButtonPrimary>
            <ButtonDanger class="ml-2" @click="deleteData(user.id)">
              <i class="ri-delete-bin-line"></i>
            </ButtonDanger>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import {
    useUserStore
  } from "@/stores/user.store.js"

  export default {
    data() {
      return {
        userStore: useUserStore()
      }
    },
    mounted() {
      this.userStore.fetch()
    },
    methods: {
      async deleteData(id){
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.userStore.delete(id);

            this.userStore.fetch()
          }
        });
      },
      updateData(user){
        this.userStore.user = user

        this.$router.push('/user/update')
      },
    }
  }

</script>
