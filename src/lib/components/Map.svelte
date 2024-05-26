<script>
	export let cities = [
		{
			name: 'Florida',
			time: '15:13',
			point: 'top: 50%; left: -20px',
			style: 'top: 15%;left: 35%;'
		},
		{
			name: 'Warsaw',
			time: '20:13',
			point: 'top: 50%; left: -20px',
			style: 'top: 17%; left: 59%;'
		}
	];
</script>

<div class="relative w-full h-screen bg-white py-8">
	<div class="mt-2">
		<img src="/map.png" alt="World Map" class="w-full h-full object-cover" />
		{#each cities as city}
			<div class="absolute transform -translate-x-1/2 -translate-y-1/2" style={city.style}>
				<div class="p-2 rounded-md relative">
					<div class="absolute bg-sky-700 rounded-full h-2 w-2" style={city.point}></div>
					<div class="font-semibold text-black">{city.name}</div>
					<div class="text-gray-400">{city.time}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- <div class="absolute text-xs md:text-sm lg:text-base text-teal-500" style={city.style}> -->
<style>
	/* div {
    transform: translate(-50%, -50%);
	} */
</style>
