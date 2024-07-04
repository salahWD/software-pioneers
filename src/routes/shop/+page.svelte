<script>
	import { t } from '$lib/../i18n';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import { onMount } from 'svelte';
	import { generateArticle } from '$lib/utils/generateArticle';

	let elkatibProjects = [];

	async function fetchText(url) {
		const response = await fetch(`api/extract-text-url?url=${encodeURIComponent(url)}`);
		const data = await response.json();
		console.log(data);
		const text = data.text || 'Failed to extract text';
		return text;
	}

	async function addArticle(order) {
		const response = await fetch('/api/add-article', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(order)
		});

		if (!response.ok) {
			console.error('Failed to add article');
			return;
		}

		const data = await response.json();
		console.log(data.data);
		return data.data;
	}

	onMount(async () => {
		const response = await fetch('/elkatib-projects.json');
		elkatibProjects = await response.json();
	});

	$: loadingArticle = false;
	$: errorArticle = null;

	$: titleArticle = null;
	$: promptArticle = null;
	$: linkOrTextArticle = null;

	$: dataArticles = null;
	const createArticle = async () => {
		loadingArticle = true;
		let resourceText;
		if (linkOrTextArticle.startsWith('https://') || linkOrTextArticle.startsWith('http://')) {
			resourceText = await fetchText(linkOrTextArticle);
		} else {
			resourceText = linkOrTextArticle;
		}
		try {
			const { data, error } = await generateArticle(resourceText, titleArticle, promptArticle);
			if (error) {
				errorArticle = error;
				loadingArticle = false;
				return;
			}
			const order = {
				date: parseInt(Date.now() / 1000),
				article: data.trim(),
				title: titleArticle.trim(),
				uid: 'e50916b4-d1b2-4b3a-ba0d-31d8e4280faa',
				img: null,
				tags: ['مجتمع'],
				menu: 'ابداع المجتمع',
				sub_menu: 'مجتمع'
			};

			console.log(order);

			const responseData = await addArticle(order);

			if (!responseData) {
				loadingArticle = false;
				errorArticle = 'Failed to add article';
				return;
			}

			loadingArticle = false;
			dataArticles = responseData;
			console.log(dataArticles);
		} catch (error) {
			errorArticle = error;
		} finally {
			loadingArticle = false;
		}
	};
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
			<div
				class="max-w-xl h-96 mx-auto mt-12 lg:mx-0 lg:mt-0 rounded-xl overflow-hidden bg-cover"
				style="background-image: url('/featured_pictures.jpeg')"
			>
				<div class="max-w-xl h-96 bg-black/50 bg-cover backdrop-blur-md flex flex-col">
					<p class="text-gray-200/75 text-2xl w-full text-center font-bold mt-3">
						{#if loadingArticle}
							{$t('Article is being created...')}
						{:else if !loadingArticle && dataArticles?.length > 0}
							{$t('article created successfully')}
						{:else}
							{$t('Create your first article now. Try now')}
						{/if}
					</p>
					{#if loadingArticle}
						<div role="status" class="space-y-2.5 animate-pulse max-w-lg p-2">
							<div class="flex items-center w-full">
								<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div class="flex items-center w-full max-w-[480px]">
								<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div class="flex items-center w-full max-w-[400px]">
								<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
							<div class="flex items-center w-full max-w-[480px]">
								<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
							</div>
							<div class="flex items-center w-full max-w-[440px]">
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
							</div>
							<div class="flex items-center w-full max-w-[360px]">
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
								<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
								<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
						</div>
					{:else if !loadingArticle && dataArticles?.length > 0}
						<a
							class="text-white/75 text-2xl w-full text-center font-bold mt-3 underline decoration-pink-500"
							target="_blank"
							href="https://kateb.vercel.app/blog/article/{dataArticles[0]
								.title}?id={dataArticles[0].id}"
						>
							{dataArticles[0].title}
							<span class="text-gray-600 text-base">{$t('go to article...')}</span>
						</a>
					{:else}
						<div class="w-full h-full grid grid-cols-8">
							<div class="col-start-1 col-end-5">
								<div class="grow w-full h-full flex flex-col p-2 gap-1">
									<input
										bind:value={titleArticle}
										type="text"
										id="default-input"
										placeholder={$t('Enter title article')}
										class="w-full p-2 bg-transparent border border-white rounded-lg focus:ring-transparent focus:border-transparent"
									/>
									<textarea
										id="message"
										bind:value={promptArticle}
										rows="4"
										class="grow w-full p-2 bg-transparent border border-white rounded-lg focus:ring-transparent focus:border-transparent"
										placeholder={$t(
											'prompt AI the things you want it to apply or formulate in the article'
										)}
									></textarea>
									<button
										disabled={loadingArticle}
										class="basis-1/12 capitalize text-center rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
										on:click={() => {
											if (!titleArticle || !promptArticle || !linkOrTextArticle) {
												return;
											}
											createArticle();
										}}
									>
										{$t('Create article')}
									</button>
								</div>
							</div>
							<div class="col-start-5 col-end-9">
								<div class="w-full h-full flex flex-col p-2 gap-1">
									<textarea
										bind:value={linkOrTextArticle}
										id="message"
										rows="4"
										class="grow w-full p-2 bg-transparent border border-white rounded-lg focus:ring-transparent focus:border-transparent"
										placeholder={$t('Enter text or a link to quote the article from')}
									></textarea>
								</div>
							</div>
						</div>
					{/if}
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
