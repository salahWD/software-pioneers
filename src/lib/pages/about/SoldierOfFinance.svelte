<script>
	import { t } from '$lib/../i18n';

	let innerWidth = 0;
	let innerHeight = 0;

	$: largeScreen = innerWidth > 768;

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

<svelte:window bind:innerWidth bind:innerHeight />

<section class="py-14 lg:py-24 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-4 md:mb-24">
			<h1
				class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800"
			>
				{$t('Meet The Company Representatives')}
			</h1>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-80 opacity-25 my-0 py-0 rounded-t" />
			</div>
			<p class="text-lg text-gray-500 text-center">
				{$t(
					'We have one of the best teams and all of our members are professionals at their fields'
				)}.
			</p>
		</div>

		{#if members && members.length > 0}
			<swiper-container
				class="teamswiper pb-10 ltr"
				navigation="true"
				pagination="false"
				slides-per-view={largeScreen ? 2 : 1}
				loop="true"
				dir="ltr"
			>
				{#each members as member}
					<swiper-slide>
						<TeamMember {...member} />
					</swiper-slide>
				{/each}
			</swiper-container>
		{:else}
			<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
				<p class="font-bold">{$t('Be Warned')}</p>
				<p>{$t('There is no members to show')}.</p>
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
