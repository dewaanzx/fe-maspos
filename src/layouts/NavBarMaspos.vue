<template>
	<div class="w-screen h-[100px] bg-[#1963D2] flex items-center">
	  <router-link
		to="/maspos/1"
		class="link font-bold text-sm text-white ml-[150px]"
		>MASPOS</router-link
	  >
	  <div class="ml-[1050px] flex items-center">
		<p class="text-white text-lg font-thin mr-2">
		  {{ userStore.users.name }}
		</p>
		<img
		  src="../assets/profile.png"
		  alt=""
		  class="block h-10 w-10 ml-[10px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
		/>
	  </div>
	</div>
	<div class="p-5">
	  <slot />
	</div>
  </template>
  
  <script>
  import { useAuthStore } from "@/stores/auth.store.js";
  import { useUserStore } from "@/stores/user.store.js";
  
  export default {
	name: "NavbarMaspos",
	data() {
	  return {
		authStore: useAuthStore(),
		userStore: useUserStore(),
	  };
	},
	mounted() {
	  this.userStore.fetch();
	},
  };
  </script>
  
  <!-- <style>
  .link {
	@apply px-2 cursor-pointer hover:text-red-400;
  }
  </style> -->
  