<template>
    	<form class="flex items-center w-1/2">
				<div class="w-full">
					<input
						type="text"
						id="simple-search"
						class="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full pl-10 p-2.5"
						placeholder="Search Todo by title ..."
						required
					/>
				</div>
				<button
					type="submit"
					class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-gradient-to-b from-[#74B9FF] to-[#0984E3]"
				>
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</button>
			</form> 
</template>