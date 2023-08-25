<template>
	<div class="flex h-screen items-center justify-center">
		<div
			class="flex flex-col bg-gradient-to-b from-[#74B9FF] to-[#0984E3] w-[350px] h-[370px] rounded-2xl text-white shadow-2xl"
		>
			<h2 class="mx-auto mt-6 text-3xl font-medium">Sign up</h2>

			<input
				class="mt-4 mx-auto px-[35px] py-[10px] text-gray-800 rounded-lg  outline-none shadow-xl"
				type="email"
				placeholder="Enter your email ..."
			/>

			<input
				class="mt-3 mx-auto px-[35px] py-[10px] rounded-lg text-gray-800  outline-none shadow-xl"
				type="password"
				placeholder="Enter password ..."
			/>
			<input
				class="mt-3 mx-auto px-[35px] py-[10px] rounded-lg text-gray-800  outline-none shadow-xl"
				type="password"
				placeholder="Confirm password ..."
			/>
			<button
				class="mx-auto mt-8 bg-white text-gray-800 text-lg font-medium py-2 px-12  rounded-lg shadow-md"
			>
				Sign up
			</button>
			<span class="mx-auto mt-2">
				have an account?
				<NuxtLink class="underline" to="login">Login</NuxtLink>
			</span>
		</div>
	</div>
</template>

<script setup></script>

<style></style>
