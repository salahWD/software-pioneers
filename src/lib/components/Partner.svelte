<script>
	import { t } from '$lib/../i18n';
	import { onMount } from 'svelte';

	export let companies = [
		{ name: 'item 1', logo: '/partner-1.png', alt: 'our partner 1 image' },
		{ name: 'item 2', logo: '/partner-2.png', alt: 'our partner 2 image' },
		{ name: 'item 3', logo: '/partner-3.png', alt: 'our partner 3 image' },
		{ name: 'item 4', logo: '/partner-4.png', alt: 'our partner 4 image' },
		{ name: 'item 5', logo: '/partner-5.png', alt: 'our partner 5 image' },
		{ name: 'item 6', logo: '/partner-6.png', alt: 'our partner 6 image' },
		{ name: 'item 7', logo: '/partner-7.png', alt: 'our partner 7 image' }
	];

	let slider;

	onMount(() => {
		const sliderContainer = slider;
		let scrollAmount = 0;

		const scrollLogos = () => {
			scrollAmount += 1; // Adjust this value to change the speed
			if (scrollAmount >= sliderContainer.scrollWidth / 3) {
				scrollAmount = 0;
			}
			sliderContainer.scrollLeft = scrollAmount;
			requestAnimationFrame(scrollLogos);
		};

		scrollLogos();
	});
</script>

{#if companies.length <= 5}
	<div class="container m-auto px-4">
		<div class="text-center mb-8">
			<h2 class="text-sm font-semibold text-gray-500">
				{$t('THESE COMPANIES BENEFITED FROM OUR SOFTWARE SOLUTIONS')}
			</h2>
		</div>

		<div class="flex justify-center items-center gap-5 flex-wrap">
			{#each companies as company}
				<img src={company.logo} alt={company.alt} class="h-6 sm:h-10 md:h-14 object-contain" />
			{/each}
		</div>
	</div>
{:else}
	<div class="relative mx-auto max-w-7xl">
		<div class="slider-container">
			<div class="slider" bind:this={slider}>
				{#each companies as company}
					<img src={company.logo} alt={company.alt} class="h-20 mx-4 logo" />
				{/each}
				<!-- Repeat the logos for a seamless loop -->
				{#each companies as company}
					<img src={company.logo} alt={company.alt} class="h-20 mx-4 logo" />
				{/each}
				<!-- Repeat the logos for a seamless loop -->
				{#each companies as company}
					<img src={company.logo} alt={company.alt} class="h-20 mx-4 logo" />
				{/each}
			</div>
			<div class="fade"></div>
			<div class="fade fade-right"></div>
		</div>
	</div>

	<style>
		.slider-container {
			display: flex;
			overflow-x: hidden;
			position: relative;
		}

		.slider {
			display: flex;
			white-space: nowrap;
			overflow-x: scroll;
			-ms-overflow-style: none; /* Internet Explorer 10+ */
			scrollbar-width: none; /* Firefox */
		}

		slider::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}

		.fade {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 50px;
			pointer-events: none;
			background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
		}

		.fade-right {
			right: 0;
			transform: rotate(180deg);
		}

		.logo {
			transition: transform 0.5s ease-in-out;
		}

		.logo:hover {
			transform: scale(1.1);
		}
	</style>
{/if}
