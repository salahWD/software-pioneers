<script lang="ts">
	import HomeHero from '$lib/components/HomeHero.svelte';
	import Project from '$lib/components/Project.svelte';
	import SoldierOfFinance from '$lib/pages/about/SoldierOfFinance.svelte';
	import ServicesSection from '$lib/pages/services/ServicesSection.svelte';
	import Cards from '$lib/components/Cards.svelte';
	import Partner from '$lib/components/Partner.svelte';
	import Map from '$lib/components/Map.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	let members = [
		{
			name: 'Ahmed',
			job: 'CTO',
			desc: 'Leading the tech vision',
			image: '/member-1.webp',
			x: 'https://x.com/ahmed_tech',
			instagram: 'https://www.instagram.com/ahmed_tech/',
			linkedin: 'https://www.linkedin.com/in/ahmed-tech/'
		},
		{
			name: 'Ihsan',
			job: 'COO',
			desc: 'Ensuring operational excellence',
			image: '/member-2.webp',
			x: 'https://x.com/fatima_ops',
			instagram: 'https://www.instagram.com/fatima_ops/',
			linkedin: 'https://www.linkedin.com/in/fatima-ops/'
		},
		{
			name: 'Hassan',
			job: 'Lead Developer',
			desc: 'Building cutting-edge solutions',
			image: '/member-3.webp',
			x: 'https://x.com/hassan_dev',
			instagram: 'https://www.instagram.com/hassan_dev/',
			linkedin: 'https://www.linkedin.com/in/hassan-dev/'
		},
		{
			name: 'Jamal',
			job: 'UX Designer',
			desc: 'Crafting user-centered designs',
			image: '/member-4.webp',
			x: 'https://x.com/layla_design',
			instagram: 'https://www.instagram.com/layla_design/',
			linkedin: 'https://www.linkedin.com/in/layla-design/'
		},
		{
			name: 'Omar',
			job: 'Project Manager',
			desc: 'Driving project success',
			image: '/member-5.webp',
			x: 'https://x.com/omar_pm',
			instagram: 'https://www.instagram.com/omar_pm/',
			linkedin: 'https://www.linkedin.com/in/omar-pm/'
		},
		{
			name: 'Khalid',
			job: 'Marketing Specialist',
			desc: 'Elevating our brand presence',
			image: '/member-6.webp',
			x: 'https://x.com/noura_marketing',
			instagram: 'https://www.instagram.com/noura_marketing/',
			linkedin: 'https://www.linkedin.com/in/noura-marketing/'
		},
		{
			name: 'Abdalrhman',
			job: 'Marketing Specialist',
			desc: 'Elevating our brand presence',
			image: '/member-7.webp',
			x: 'https://x.com/noura_marketing',
			instagram: 'https://www.instagram.com/noura_marketing/',
			linkedin: 'https://www.linkedin.com/in/noura-marketing/'
		}
	];

	const projects = [
		{
			title: 'Is the Future Here? How Spatial Computing is Revolutionizing Business Operations',
			date: '5 months ago',
			image: '/project-1.png',
			link: '/projects/1'
		},
		{
			title: 'AWS vs GCP 2024: Comparative Guide: CDN, Pricing, Biggest Drawbacks',
			date: '3 months ago',
			image: '/project-2.jpg',
			link: '/projects/2'
		},
		{
			title:
				'Client-Server Architecture: Advantages and Disadvantages of the Network Computing Model',
			date: '1 year ago',
			image: '/project-3.jpg',
			link: '/projects/3'
		}
	];

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
		<h1 class="w-full my-12 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
			Our Projects
		</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
			{#each projects as project}
				<Project {...project} />
			{/each}
		</div>
	</div>
	<div class="container m-auto py-32">
		<Partner />
	</div>
	<div class="container mx-auto pt-32">
		<h1
			class="w-full mt-12 mb-4 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800"
		>
			Where Are We At
		</h1>
		<div class="w-full mb-12">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<Map />
	</div>
</div>

<CallToAction />
