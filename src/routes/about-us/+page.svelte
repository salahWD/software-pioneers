<script>
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import AboutUsSection from '$lib/pages/about/AboutUsSection.svelte';
	import CreativeSection from '$lib/pages/about/CreativeSection.svelte';
	import StatsSection from '$lib/pages/about/StatsSection.svelte';
	import SoldierOfFinance from '$lib/pages/about/SoldierOfFinance.svelte';
	import SubscribeForm from '$lib/pages/about/SubscribeForm.svelte';

	let members = [
		{
			name: 'khalid',
			job: 'CEO',
			desc: 'i am the best ceo',
			x: 'https://x.com/username',
			instagram: 'https://www.instagram.com/salah_backhach/',
			linkedin: 'https://www.linkedin.com/in/kerempekarli/'
		},
		{
			name: 'mohammed',
			job: 'CTO'
		},
		{
			name: 'abdalrhman',
			job: 'Developer'
		}
	];
</script>

<HeroSection>
	<h1
		class="capitalize max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal"
	>
		about our <span class="text-white">company</span>
	</h1>
	<p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-600 mb-9">
		we are one of the best web development startups in the middle-easet reagion.
	</p>
</HeroSection>

<AboutUsSection />

<CreativeSection />

<StatsSection />

<SoldierOfFinance {members} />

<SubscribeForm />
