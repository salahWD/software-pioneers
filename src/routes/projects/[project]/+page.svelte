<script>
	import { t } from '$lib/../i18n.js';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	export let data = {
		title: 'Project Name Here',
		aboutTheClientTitle: 'About The Client',
		aboutTheClientDescription:
			'this client had a platform to convert users (mostly article writers) from normal wysiwyg to his new article writing platform which he sels as a saas.',
		aboutTheClientImg: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137',
		theProplemTitle: '',
		theProplemDescription: '',
		theProplemImg: '',
		solutionTitle: '',
		solutionDescription: '',
		solutionImg: ''
	};
</script>

<HeroSection>
	<h1 class="text-4xl font-bold text-white">{$t(data.title)}</h1>
</HeroSection>

<div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 body">
	<div class="relative">
		<div
			class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
		>
			<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
				<div>
					<div>
						<span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 448 512"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								class="h-8 w-8 text-white"
							>
								<path
									d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
								/>
							</svg>
						</span>
					</div>

					<div class="mt-6">
						<h2 class="text-3xl font-bold tracking-tight text-white">
							{$t(data.aboutTheClientTitle)}
						</h2>
						<p class="mt-4 text-lg text-gray-300">
							{$t(data.aboutTheClientDescription)}
						</p>
						<div class="mt-6">
							<a
								class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
								href="/contact"
							>
								{$t('Contact Us')}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 sm:mt-16 lg:mt-0">
				<div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
					<img
						loading="lazy"
						alt=""
						width="647"
						height="486"
						class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none max-w-full object-cover object-[center_center]"
						style="color:transparent"
						src={data.aboutTheClientImg}
					/>
				</div>
			</div>
		</div>
	</div>

	{#if data.theProplemTitle != undefined && data.theProplemDescription != undefined && data.theProplemImg != undefined}
		<div class="relative">
			<div
				class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
			>
				<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
					<div>
						<div>
							<span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									class="h-8 w-8 text-white"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
									>
									</path>
								</svg>
							</span>
						</div>
						<div class="mt-6">
							<h2 class="text-3xl font-bold tracking-tight text-white">
								{$t(data.theProplemTitle)}
							</h2>
							<p class="mt-4 text-lg text-gray-300">
								{$t(data.theProplemDescription)}
							</p>
							<div class="mt-6">
								<a
									class="capitalize inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
									href="/login"
								>
									{$t('Contact Us')}
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
							class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
							style="color:transparent"
							src={data.theProplemImg}
						/>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if data.solutionTitle != undefined && data.solutionDescription != undefined && data.solutionImg != undefined}
		<div class="relative">
			<div
				class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
			>
				<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
					<div>
						<div>
							<span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									class="h-8 w-8 text-white"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
									>
									</path>
								</svg>
							</span>
						</div>
						<div class="mt-6">
							<h2 class="text-3xl font-bold tracking-tight text-white">
								{$t(data.solutionTitle)}
							</h2>
							<p class="mt-4 text-lg text-gray-300">
								{$t(data.solutionDescription)}
							</p>
							<div class="mt-6">
								<a
									class="capitalize inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
									href="/login"
								>
									{$t('Contact Us')}
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0">
					<div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
						<img
							loading="lazy"
							width="646"
							height="485"
							class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							style="color:transparent"
							src={data.solutionImg}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	{/if}
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
