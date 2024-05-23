<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'services', href: 'services' },
		{ title: 'our work', href: 'our-work' },
		{ title: 'projects', href: 'projects' },
		{ title: 'about us', href: 'about-us' }
	];
</script>

<div
	class="leading-normal tracking-normal text-white {$page.url.pathname === '/' ? 'gradient' : ''}"
	style="font-family: 'Source Sans Pro', sans-serif;"
>
	<Nav {links} noAd={$page.url.pathname === '/'} />

	<div class={$page.url.pathname === '/' ? 'pt-32' : ''}>
		<slot />
	</div>

	<Footer />
</div>
