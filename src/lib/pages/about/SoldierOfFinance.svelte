<script>
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements

	import TeamMember from '$lib/components/TeamMember.svelte';

	// Import necessary Svelte modules
	import { onMount } from 'svelte';

	export let members = [];

	// Initialize Swiper when the component mounts
	onMount(() => {
		// initSwiper();
		register();
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

		{#if members && members.length > 0}
			<swiper-container
				class="teamswiper pb-10"
				navigation="true"
				pagination="true"
				slides-per-view="2"
				loop="true"
			>
				{#each members as member}
					<swiper-slide>
						<TeamMember {...member} />
					</swiper-slide>
				{/each}
			</swiper-container>
		{:else}
			<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
				<p class="font-bold">Be Warned</p>
				<p>There is no members to show.</p>
			</div>
		{/if}
	</div>
</section>

<style>
	swiper-container::part(button-prev) {
		left: var(--swiper-navigation-sides-offset, 0);
		right: auto;
		@apply text-pink-200;
	}
	swiper-container::part(button-next) {
		right: var(--swiper-navigation-sides-offset, 0);
		left: auto;
		@apply text-pink-200;
	}
</style>
