<script>
	import { t } from '$lib/../i18n';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import WorkSection from '$lib/pages/works/WorkSection.svelte';
	import Map from '$lib/components/Map.svelte';
</script>

<HeroSection>
	<h1
		class="capitalize max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal"
	>
		{@html $t('our work and <span class="text-white">experience</span>')}
	</h1>
	<p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-600 mb-9">
		{$t('We have completed numerous projects and have many satisfied clients.')}
	</p>
</HeroSection>

<WorkSection />

<div class="container mx-auto pt-16 mt-16">
	<h1
		class="w-full text-3xl md:text-5xl mt-12 mb-4 font-bold leading-tight text-center text-gray-800 capitalize"
	>
		{$t('where are we at')}
	</h1>
	<div class="w-full mb-12">
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<Map />
</div>
