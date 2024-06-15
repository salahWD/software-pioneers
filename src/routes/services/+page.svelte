<script>
	import { t } from '$lib/../i18n';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import ServicesSection from '$lib/pages/services/ServicesSection.svelte';
	import EssentialGuide from '$lib/pages/services/EssentialGuide.svelte';
	import ServiceHubAdvanced from '$lib/pages/services/ServiceHubAdvanced.svelte';
	import TransformingChains from '$lib/pages/services/TransformingChains.svelte';
</script>

<HeroSection>
	<h1
		class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal"
	>
		{@html $t('We offer a wide array of <span class="text-white">services</span>')}
	</h1>
	<p class="max-w-md mx-auto text-center font-normal leading-7 text-gray-100 text-xl mb-9">
		{$t('Discover the range of expert services we offer to help your business thrive online.')}
	</p>
</HeroSection>

<EssentialGuide />

<ServiceHubAdvanced />

<TransformingChains />

<ServicesSection />
