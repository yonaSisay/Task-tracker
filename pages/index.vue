<template>
	<div
		class="min-h-screen bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-[#333333]"
	>
		<div class="fixed w-full top-0 flex justify-between bg-white h-[12vh]">
			<h1 class="text-5xl text-blue-400 font-bold p-6 my-auto">Pro todo</h1>

			<Search/>

			<button
				class="bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-white w-[7vw] h-[7vh] my-auto rounded-lg outline-none mr-4"
			>
				Login
			</button>
			
		</div>

		<div class="flex pt-[12vh] m-6">
			<AddTodo />

			<div class="w-full flex flex-wrap justify-center gap-4">
				<div v-for="todo in todos">
					<Todo
						:name="todo.name"
						:description="todo.description"
						:start_date="todo.start_date"
						:end_date="todo.end_date"
					/>
				</div>
			</div>
		</div>
		<div
			class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
		></div>
	</div>
</template>

<script setup>
head: {
	link: [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/icon?family=Material+Icons",
		},
	];
}
const des =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas eos consectetur! Laboriosam officia ea sequi temporibus corrupti nobis ";
const todos = ref([
	{
		name: "eat food",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "Read",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "code",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "pray",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "read bible",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "go to church",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
	{
		name: "done",
		description: des,
		start_date: "20/11/15",
		end_date: "05/04/15",
	},
]);
</script>

<style scoped></style>
