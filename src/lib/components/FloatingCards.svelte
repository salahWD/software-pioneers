<script>
	import { onMount } from 'svelte';
	import { t } from '$lib/../i18n.js';

	let card1, card2;

	function animateCard(card) {
		card.animate(
			[
				{ transform: 'translate(0, 0)' },
				{ transform: 'translate(5px, -5px)' },
				{ transform: 'translate(-5px, 5px)' },
				{ transform: 'translate(5px, 5px)' },
				{ transform: 'translate(-5px, -5px)' },
				{ transform: 'translate(0, 0)' }
			],
			{
				duration: 5500,
				delay: Math.random() * 3000,
				iterations: Infinity
			}
		);
	}

	onMount(() => {
		animateCard(card1);
		animateCard(card2);
	});
</script>

<div class="relative w-full max-w-lg mx-auto mt-10">
	<img
		src="meeting-1.jpg"
		alt="Meeting Image"
		class="mx-auto md:mx-0 md:ms-auto p-0 w-1/2 md:w-4/5 lg:w-4/5 z-50 aspect-square rounded-full object-cover shadow-lg"
	/>
	<div bind:this={card1} class="floating-card shadow-lg w-1/2" style="top: 10%; left: 75%;">
		<div class="flex items-center space-x-2">
			<div class="bg-blue-400 text-white rounded-full p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m0 4v4m4-4v4m4-4v4m4-4v4M4 13h16M4 17h16m-7-4v4"
					/>
				</svg>
			</div>
			<span class="text-lg font-semibold text-customDark">7+ {$t('Projects Completed')}</span>
		</div>
	</div>
	<div bind:this={card2} class="floating-card shadow-lg" style="bottom: 10%; left: 5%;">
		<div class="flex items-center space-x-2">
			<div class="bg-customSky-950 text-white rounded-full p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<span class="text-lg font-semibold text-customDark">5+ {$t('Customers')}</span>
		</div>
	</div>
</div>

<style>
	.floating-card {
		position: absolute;
		padding: 1rem;
		background-color: white;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
