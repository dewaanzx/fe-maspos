<template>
	<div class="split-background min-h-screen flex flex-col items-center justify-center">
		<!-- Navbar -->
		<div class="navbar">
			<div class="navbar-left">
				<span class="navbar-text font-bold">MAS POS</span>
			</div>
			<div class="navbar-right">
				<span class="navbar-text">Call Us +62 817-1902-092</span>
			</div>
		</div>
		<!-- Bagian atas dengan warna #EE9D0F -->
		<div class="h-1/2 flex items-center justify-center bg-primary"></div>

		<div class="absolute inset-0 flex justify-center items-center">
			<div class="w-[35%] rounded overflow-hidden shadow-lg bg-white">
				<div style="display: flex; justify-content: center; align-items: center; margin-top: 10%;">
				</div>
				<h2 class="text-2xl font-bold mb-4 text-center">Login Page</h2>
				<form action="" @submit.prevent="login">
					<!-- Username -->
					<div class="w-60 mx-auto">
						<label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
						<input v-model="formData.username" type="text" id="username"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Enter Username" required />
					</div>

					<!-- Password -->
					<div class="w-60 mx-auto mt-4">
						<label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
						<div class="relative">
							<input v-model="formData.password" :type="showPassword ? 'text' : 'password'" id="password"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								placeholder="Enter Password" required />
							<a @click="showPassword = !showPassword"
								class="absolute right-3 top-1/2 transform -translate-y-1/2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 cursor-pointer"
									viewBox="0 0 20 20" fill="currentColor">
									<path v-if="showPassword" fill-rule="evenodd"
										d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm4 6a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zM4 12a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"
										clip-rule="evenodd" />
									<path v-else fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
									<path v-else fill-rule="evenodd"
										d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
										clip-rule="evenodd" />
								</svg>
							</a>
						</div>
					</div>
					<br />
					<div class="text-center">
						<ButtonPrimary :type="'submit'" class="btn btn-primary">Login</ButtonPrimary>
					</div>
				</form>
				<br />
				<br>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bg-primary {
  background: #0052CC;
}

.split-background {
  background: linear-gradient(to bottom, #0052CC 50%, #f1f3ff 50%);
  background-repeat: repeat, no-repeat;
  background-size: 100% 100%, auto;
  background-position: 0% 0%, center;
}

.background-image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0052CC;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px;
}

.navbar-text {
  font-size: 18px;
  font-weight: medium;
  margin-right: 10px;
}
</style>


<script>
import { useAuthStore } from "@/stores/auth.store.js";

export default {
	data() {
		return {
			showPassword: false,
			authStore: useAuthStore(),
			formData: {
				username: "",
				password: "",
			},
		};
	},
	methods: {
		login() {
			this.authStore.login(this.formData);
		},
	},
};
</script>
