<script>
	import { t } from '$lib/../i18n';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import { onMount } from 'svelte';

	let elkatibProjects = [];

	onMount(async () => {
		const response = await fetch('/elkatib-projects.json');
		elkatibProjects = await response.json();
	});
</script>

<HeroSection>
	<h1
		class="capitalize max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal"
	>
		{@html $t('Our <span class="text-white">solutions</span> in digital innovation')}
	</h1>
	<p class="max-w-md mx-auto text-center font-normal leading-7 text-gray-100 text-xl mb-9">
		{$t(
			'Distinguish yourself by choosing one of our innovative digital solutions to help you grow and develop your business'
		)}
	</p>
</HeroSection>

<div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 body">
	<div class="relative">
		<div
			class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
		>
			<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-20 lg:px-0 lg:col-start-2">
				<div>
					<div class="mt-6">
						<h2 class="text-3xl font-bold tracking-tight text-white">{$t('ELKATEB Platform')}</h2>
						<p class="mt-4 text-lg text-gray-300">
							{$t(
								'use The Writer plugin and service for free, it helps you write articles and speed up the process by using Ai technology, more about that on the plugins page'
							)}.
						</p>
						<div class="mt-6">
							<a
								class="capitalize inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
								href="https://elkateb.shawerr.com/"
							>
								{$t('Explore')}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 sm:mt-16 lg:mt-0">
				<div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
					<img
						alt="Inbox user interface"
						loading="lazy"
						width="647"
						height="486"
						class="max-h-full object-cover w-full rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute shadow-xl lg:right-0"
						style="color:transparent"
						src="/featured_pictures.jpeg"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-gray-900 {
		background-color: white;
	}
	.body .text-white {
		color: rgb(17 24 39 / 1);
	}
	.body svg.text-white {
		color: white;
	}
	.body a.text-white {
		color: white;
	}
	.body .text-gray-300 {
		color: rgb(107 114 128 / 1);
	}
</style>
