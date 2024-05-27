<script lang="ts">
	import { t } from '$lib/../i18n';
	import HomeHero from '$lib/components/HomeHero.svelte';
	// import Project from '$lib/components/Project.svelte';
	import ProjectComponent from '$lib/components/ProjectComponent.svelte';
	import SoldierOfFinance from '$lib/pages/about/SoldierOfFinance.svelte';
	import ServicesSection from '$lib/pages/services/ServicesSection.svelte';
	import Cards from '$lib/components/Cards.svelte';
	import Partner from '$lib/components/Partner.svelte';
	import Map from '$lib/components/Map.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import { onMount } from 'svelte';

	let members = [];
	let projects = [];

	onMount(async () => {
		const membersResponse = await fetch('/members.json');
		members = await membersResponse.json();
		const projectsResponse = await fetch('/projects.json');
		projects = await projectsResponse.json();
	});

	// const companies = [
	// 	{ name: 'Airbnb', logo: '/partner-1.png', alt: 'Airbnb Logo' },
	// 	{ name: 'Fiverr', logo: '/partner-2.png', alt: 'Fiverr Logo' },
	// 	{ name: 'Pickwatch', logo: '/partner-3.png', alt: 'Pickwatch Logo' },
	// 	{ name: 'Citrix', logo: '/partner-4.png', alt: 'Citrix Logo' },
	// 	{ name: 'Online Rewards', logo: '/partner-5.png', alt: 'Online Rewards Logo' }
	// ];
</script>

<HomeHero />

<Cards />

<SoldierOfFinance {members} />

<ServicesSection />

<div class="bg-white py-10">
	<div class="container m-auto">
		<h1
			class="w-full my-12 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('our projects')}
		</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<div class="grid grid-cols-1 auto-rows-[1fr] md:grid-cols-3 gap-6 px-6">
			{#each projects as project}
				<ProjectComponent {...project} />
			{/each}
		</div>
	</div>
	<div class="container m-auto pt-32">
		<Partner />
	</div>
	<div class="container mx-auto pt-8">
		<h1
			class="w-full mt-12 mb-4 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('where are we at')}
		</h1>
		<div class="w-full mb-12">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<Map />
	</div>
</div>

<CallToAction />
