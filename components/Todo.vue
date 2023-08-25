<template>
	<div class="w-[25vw] h-auto bg-[#FFFFFF] rounded-2xl p-4 m-4 shadow-xl">
		<h1 class="text-2xl font-bold">{{ name }}</h1>
		<p class="text-lg-250">
			{{ description }}
		</p>
		<div class="flex gap-4 mt-16">
			<button
				@click="openEditModal"
				class="bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-white w-1/3 py-[8px] rounded-lg mx-auto outline-none shadow-xl"
			>
				Edit
			</button>
			<button
				class="bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-white w-1/3 py-[8px] rounded-lg mx-auto outline-none shadow-xl"
			>
				Delete
			</button>
		</div>
		<EditTodoModal
			v-if="isEditModalOpen"
			@close="closeEditModal"
			:name="name"
			:description="description"
			:start_date="start_date"
			:end_date="end_date"
		/>
	</div>
</template>

<script setup>
const props = defineProps({
	name: String,
	description: String,
	start_date: String,
	end_date: String,
});
const isEditModalOpen = ref(false);

function openEditModal() {
	isEditModalOpen.value = true;
}

function closeEditModal() {
	isEditModalOpen.value = false;
}
</script>

<style lang="scss" scoped></style>
