<template>
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<!-- outlayer -->
		<div
			@click="closeModal"
			class="fixed inset-0 bg-gray-600 bg-opacity-50"
		></div>
		<!-- Modal -->

		<div class="bg-white w-1/2 flex flex-col gap-4 p-4 z-10 rounded-2xl">
			<input
				class="outline-blue-200 py-[10px] px-[14px] rounded-lg"
				type="text"
				:placeholder="name"
			/>
			<textarea
				class="outline-blue-200  focus:border-blue-200 rounded-lg px-[14px] py-[10px]"
				:placeholder="description"
			></textarea>
			<div class="w-full flex justify-center gap-[15vw]">
				<div class="flex flex-col gap-4">
					<label for="">Start date: {{start_date}}</label>
					<input class="outline-none" type="date" placeholder="start date" />
				</div>
				<div class="flex flex-col gap-4">
					<label for="">End date: {{end_date}}</label>
					<input class="outline-none" type="date" placeholder="end  date" />
				</div>
			</div>
			<button
				@click="closeModal"
				class="bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-lg text-white w-1/4 py-[8px] rounded-lg mx-auto outline-none"
			>
				Save
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		description: String,
		start_date: String,
		end_date: String,
	},
	methods: {
		closeModal() {
			this.$emit("close");
		},
	},
};
</script>
