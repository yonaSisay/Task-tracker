<template>
	<div class="w-1/4 h-[70vh] rounded-2xl bg-[#FFFFFF] shadow-xl">
		<div class="flex flex-col gap-6 p-4">
			<input
				class="outline-none border border-blue-200 focus:border-blue-400 py-[14px] px-[14px] rounded-lg"
				type="text"
				placeholder="Title"
			/>
			<textarea
				class="outline-none border border-blue-200 focus:border-blue-500 rounded-lg px-[14px] py-[20px]"
				placeholder="Description"
			></textarea>
			<div class="flex flex-col gap-3">
				<label for="">Start date</label>
				<input class="outline-none" type="date" placeholder="start date" />
			</div>
			
            <div class="flex flex-col gap-3">
				<label for="">End date</label>
				<input class="outline-none" type="date" placeholder="start date" />
			</div>
			<button
				class="bg-gradient-to-b from-[#74B9FF] to-[#0984E3] text-white w-1/2 py-[8px] mt-5 rounded-lg mx-auto outline-none shadow-xl"
			>
				Create todo
			</button>
		</div>
	</div>
</template>
