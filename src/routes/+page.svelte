<script lang="ts">
	import { t } from '$lib/../i18n';

	import HomeHero from '$lib/components/HomeHero.svelte';
	import ThankMessageComponent from '$lib/components/ThankMessageComponent.svelte';
	import SoldierOfFinance from '$lib/pages/about/SoldierOfFinance.svelte';
	import ServicesSection from '$lib/pages/services/ServicesSection.svelte';
	import TheWriterAd from '$lib/components/TheWriterAd.svelte';
	import Cards from '$lib/components/Cards.svelte';
	import Partner from '$lib/components/Partner.svelte';
	import Map from '$lib/components/Map.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	// import SubscribeForm from '$lib/pages/about/SubscribeForm.svelte';
	import JoinUsForm from '$lib/components/JoinUsForm.svelte';

	import { onMount } from 'svelte';

	let members = [];
	let thanksMessages = [];

	onMount(async () => {
		const membersResponse = await fetch('/members.json');
		members = await membersResponse.json();
		const thanksMessagesResponse = await fetch('/thanks-messages.json');
		thanksMessages = await thanksMessagesResponse.json();
	});

	// const companies = [
	// 	{ name: 'Airbnb', logo: '/partner-1.png', alt: 'Airbnb Logo' },
	// 	{ name: 'Fiverr', logo: '/partner-2.png', alt: 'Fiverr Logo' },
	// 	{ name: 'Pickwatch', logo: '/partner-3.png', alt: 'Pickwatch Logo' },
	// 	{ name: 'Citrix', logo: '/partner-4.png', alt: 'Citrix Logo' },
	// 	{ name: 'Online Rewards', logo: '/partner-5.png', alt: 'Online Rewards Logo' }
	// ];
	let isShown = false;

	const closeMenu = () => {
		return (isShown = false);
	};
	const toggleMenu = (e) => {
		if (!isShown) {
			popupHolder.classList.remove('invisible');
			popupHolder.querySelector('embed').src = e.detail;
		}
		return (isShown = !isShown);
	};
	const handleTransitionEnd = (e) => {
		if (!isShown) {
			popupHolder.classList.add('invisible');
		}
	};
</script>

<HomeHero />

<!-- <JoinUsForm /> -->

<Cards />

<SoldierOfFinance {members} />

<ServicesSection />

<div class="bg-white py-2">
	<TheWriterAd />
</div>

<div class="bg-white py-10">
	<div class="container m-auto">
		<h1
			class="w-full my-12 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('What did they say about us ?')}
		</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 auto-rows-[1fr] md:grid-cols-3 gap-6 px-6">
			{#each thanksMessages as message, i}
				<ThankMessageComponent id={i} {...message} on:clicked={toggleMenu} />
			{/each}
		</div>
	</div>
	<div class="container m-auto pt-32">
		<Partner />
	</div>
	<div class="container mx-auto pt-20">
		<h1
			class="w-full mt-12 mb-4 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('where are we at')}
		</h1>
		<div class="w-full mb-12">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<div class="md:-mb-10">
			<Map />
		</div>
	</div>
</div>

<CallToAction />

<div class="py-10 bg-white text-center">
	<h3
		class="w-full my-2 text-2xl md:text-3xl font-bold leading-tight text-center text-gray-800 capitalize"
	>
		{$t('Work With Us')}
	</h3>
	<div class="w-full mb-4">
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<p class="text-base text-gray-500">
		{$t('you can apply to join us and work with us')}.
	</p>
	<JoinUsForm />
</div>

<!-- <div class="bg-white py-10 pb-5">
	<SubscribeForm />
</div> -->

<!-- pop up modal -->
<div
	class="relative z-30 invisible"
	id="popupHolder"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		on:transitionend={handleTransitionEnd}
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200
		{isShown ? 'opacity-100' : 'opacity-0 '}"
	></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div
			class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			on:click={closeMenu}
		>
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl
				{isShown
					? 'opacity-100 translate-y-0 sm:scale-100'
					: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
				"
			>
				<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" on:click|stopPropagation>
					<embed src="" class="w-full" width="500" height="375" type="application/pdf" />
				</div>
			</div>
		</div>
	</div>
</div>
