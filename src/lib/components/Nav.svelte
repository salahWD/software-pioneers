<script>
	import { page } from '$app/stores';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// you can just turn this flag of (dynamicly or staticly) to remove the ad bar
	export let noAd = true;
	export let links = [];

	import AdBar from './AdBar.svelte';

	import { clickOutside, clickOutsideAction } from '$lib/actions/clickOutside.d.ts';
	import Button from './common/Button.svelte';

	let y;
	let navFloat = false;
	$: navFloat = y > 10;

	let showMenu = false;
	const toggleMenu = () => (showMenu = !showMenu);
	let hambugerEl;

	// const onClickOutsideAction = ({ target }) => {
	// 	if (!hambugerEl.contains(target)) showMenu = false;
	// };
	const onClickOutside = ({
		detail: {
			event: { target }
		}
	}) => {
		if (!hambugerEl.contains(target)) showMenu = false;
	};

	afterNavigate(() => {
		navFloat = false;
		showMenu = false;
	});
</script>

<svelte:window bind:scrollY={y} />

<!--Nav-->
<nav
	id="header"
	class={`
  fixed w-full z-30 top-0 text-white
  ${navFloat && 'bg-white'}
  `}
>
	{#if noAd}
		<AdBar />
	{/if}

	<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
		<div class="pl-4 flex items-center">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				class:text-gray-800={navFloat}
				class:text-white={!navFloat}
				class="no-underline hover:no-underline font-bold text-1xl sm:text-2xl lg:text-3xl capitalize"
				href="#"
			>
				<img class="max-w-[80px] inline-block" src="logo-2.png" alt="logo" />
				software pioneers
			</a>
		</div>
		<div bind:this={hambugerEl} class="block lg:hidden pr-4">
			<button
				on:click={toggleMenu}
				id="nav-toggle"
				class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
			>
				<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>
		<!-- use:clickOutsideAction={onClickOutsideAction} -->
		<!-- use:clickOutside on:clickOutside={onClickOutside} -->
		<div
			use:clickOutside
			on:clickOutside={onClickOutside}
			class:hidden={!showMenu}
			class="hidden rounded-lg w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				{#each links as link}
					<li class="mr-3">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							class="inline-block text-black no-underline py-2 px-2 {$page.url.pathname ===
								link.href || $page.url.pathname === '/' + link.href
								? 'font-bold'
								: 'hover:text-gray-800 hover:text-underline'}"
							href={link.href}>{link.title}</a
						>
					</li>
				{/each}
			</ul>
			<Button cusomClass="!my-1" url="/contact" secondary={navFloat} center={false}
				>contact us</Button
			>
		</div>
	</div>
	<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
