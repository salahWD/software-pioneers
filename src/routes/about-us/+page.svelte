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
	<h1
		class="capitalize max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal"
	>
		{@html $t('about <span class="text-white">Software Pioneers</span>')}
	</h1>
	<p
		class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-600 text-xl mb-9"
	>
		{$t('Leading technology company in software development and integrated systems.')}
	</p>
</HeroSection>

<AboutUsSection />

<CreativeSection />

<StatsSection />

<SoldierOfFinance {members} />

<SubscribeForm />
