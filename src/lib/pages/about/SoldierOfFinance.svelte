<script>
	import Swiper from 'swiper/bundle';
	import TeamMember from '$lib/components/TeamMember.svelte';

	// Import necessary Svelte modules
	import { onMount } from 'svelte';

	// Function to initialize the Swiper slider
	function initSwiper() {
		const swiper = new Swiper('.teamswiper', {
			// Configure Swiper options here
			// For example:
			slidesPerView: 2,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '#slider-button-right',
				prevEl: '#slider-button-left'
			}
		});
	}

	// Initialize Swiper when the component mounts
	onMount(() => {
		initSwiper();
	});
</script>

<section class="py-14 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-24">
			<h2 class="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
				Meet our soldier of finance
			</h2>
			<p class="text-lg text-gray-500 text-center">
				We provide all the advantage that can simplify all your financial and banking support
				without any further issues
			</p>
		</div>
		<div class="swiper teamswiper pb-10">
			<div class="swiper-wrapper">
				<!-- Swiper slides will be added dynamically here -->
				<div class="swiper-slide">
					<TeamMember />
				</div>
				<div class="swiper-slide">
					<TeamMember />
				</div>
				<div class="swiper-slide">
					<TeamMember />
				</div>
			</div>
			<!-- Navigation buttons -->
			<button
				id="slider-button-left"
				class="swiper-button-prev p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
				data-carousel-prev
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M8.38413 15.1022L3.33301 10.0511M3.33301 10.0511L8.38413 5M3.33301 10.0511L18.3329 10.0511"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</svg>
			</button>
			<button
				id="slider-button-right"
				class="swiper-button-next p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
				data-carousel-next
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M11.6158 5L16.6669 10.0511M16.6669 10.0511L11.6158 15.1022M16.6669 10.0511L1.66699 10.0511"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
					></path>
				</svg>
			</button>
			<!-- Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Scrollbar -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</section>

<style>
	/* Custom styles can be added here */
</style>
