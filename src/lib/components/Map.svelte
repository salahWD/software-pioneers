<script>
	import { t } from '$lib/../i18n';
	export let cities = [
		{
			name: 'Palestine',
			point: 'top: 50%; right: -20px',
			style: 'top: 32.5%;left: 52.8%;'
		},
		{
			name: 'UAE',
			point: 'top: 50%; left: -20px',
			style: 'top: 37.7%;left: 65.5%;'
		}
	];
</script>

<div
	class="relative w-full max-sm:h-fit md:h-[31rem] bg-white py-8 box-content mt-2 overflow-hidden"
>
	<div class="relative map-container" style="aspect-ratio: 1 / 0.4843;">
		<img src="/map.png" alt="World Map" class="w-full h-full object-contain map-image" />
		{#each cities as city, i}
			<div
				id="city-{i + 1}"
				class="absolute transform -translate-x-1/2 -translate-y-1/2"
				style={city.style}
			>
				<div class="p-2 rounded-md relative">
					<div class="absolute bg-sky-700 rounded-full h-2 w-2" style={city.point}></div>
					<div class="font-semibold text-black">{$t(city.name)}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@media not all and (min-width: 1280px) {
		#city-1 {
			top: 32% !important;
			left: 52% !important;
		}
		#city-2 {
			top: 37.7% !important;
			left: 66.2% !important;
		}
	}
	@media not all and (min-width: 1024px) {
		#city-1 {
			top: 32% !important;
			left: 50.1% !important;
		}
		#city-2 {
			top: 37.6% !important;
			left: 67.7% !important;
		}
	}
	@media not all and (min-width: 768px) {
		#city-1 {
			top: 32% !important;
			left: 48.8% !important;
		}
		#city-2 {
			top: 37.6% !important;
			left: 68.7% !important;
		}
	}
	@media not all and (min-width: 640px) {
		#city-1 {
			top: 28% !important;
			left: 48.6% !important;
		}
		#city-2 {
			top: 34% !important;
			left: 68.9% !important;
		}
		.map-image {
			object-fit: unset !important;
			/* display: block; */
		}
		.map-container {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			aspect-ratio: unset !important;
			width: 640px !important;
			max-width: 640px !important;
			min-width: 640px !important;
		}
	}
</style>
