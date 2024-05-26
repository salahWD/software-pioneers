<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'Services', href: 'services' },
		{ title: 'Our Work', href: 'our-work' },
		{ title: 'Companies Projects', href: 'https://Elkateb.shawerr.com' },
		// { title: 'projects', href: 'projects' },
		{ title: 'About Us', href: 'about-us' }
	];
</script>

<div
	class="leading-normal tracking-normal text-white {$page.url.pathname === '/' ? 'gradient' : ''}"
	style="font-family: 'Source Sans Pro', sans-serif;"
>
	<Nav {links} />

	<slot />

	<div class="bg-white">
		<Footer />
	</div>
</div>
