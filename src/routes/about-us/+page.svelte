<script>
	import { t } from '$lib/../i18n';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import AboutUsSection from '$lib/pages/about/AboutUsSection.svelte';
	import CreativeSection from '$lib/pages/about/CreativeSection.svelte';
	import StatsSection from '$lib/pages/about/StatsSection.svelte';
	import SoldierOfFinance from '$lib/pages/about/SoldierOfFinance.svelte';
	import SubscribeForm from '$lib/pages/about/SubscribeForm.svelte';
	import { onMount } from 'svelte';

	let members = [];

	onMount(async () => {
		const response = await fetch('/members.json');
		members = await response.json();
	});
</script>

<HeroSection>
	<p class="mx-auto text-center font-normal text-gray-100 text-base mb-9">
		<a href="/" class="opacity-70">Home</a><span class="mx-2">&gt;</span><a href="/about-us"
			>About Us</a
		>
	</p>
	<h1 class="capitalize mx-auto text-center font-medium text-4xl text-white mb-5 md:text-5xl">
		{$t('about Software Pioneers')}
	</h1>
</HeroSection>

<AboutUsSection />

<CreativeSection />

<StatsSection />

<SoldierOfFinance {members} />
