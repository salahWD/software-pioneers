<script>
	import Swiper from 'swiper/bundle';
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

	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize Swiper instances
		const swiper1 = new Swiper('.mySwiper', {
			loop: true,
			spaceBetween: -10,
			slidesPerView: 3,
			watchSlidesProgress: true
		});

		new Swiper('.mySwiper2', {
			loop: true,
			spaceBetween: 32,
			thumbs: {
				swiper: swiper1
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<HeroSection />

<AboutUsSection />

<CreativeSection />

<StatsSection />

<SoldierOfFinance {members} />

<SubscribeForm />
