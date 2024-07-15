<script>
	import { onMount } from 'svelte';
	import { t } from '$lib/../i18n';
	let topArticle = {};
	let articles = [];

	onMount(async () => {
		const response = await fetch('/articles.json');
		const data = await response.json();
		topArticle = data.topArticle;
		articles = data.articles;
	});

	function workFilter(e) {
		// button active logic and styling
		for (let item of e.target.parentElement.children) {
			item.classList.remove('after:bg-blue-600', 'after:!left-0');
			item.classList.add('text-black', 'text-black');
		}
		e.target.classList.add('after:bg-blue-600', 'after:!left-0');
		e.target.classList.remove('text-black', 'text-black');
		let works = document.querySelectorAll('.work-job');

		// tag => the value we will search for in elements classes
		let tag = e.target.dataset.filter;
		// setting the animation for filltered jobs
		works.forEach((job) => {
			if (job.classList.contains(tag)) {
				job.classList.remove('scale-0', 'hidden', 'order-2');
				job.classList.add('scale-100', 'order-1');
			} else {
				job.classList.remove('scale-100', 'order-1');
				job.classList.add('scale-0', 'order-2');
			}
		});
	}
</script>

<section class="container mt-20 m-auto">
	<div class="mb-6 px-2">
		<div class="bg-white shadow rounded px-8 py-4 flex gap-5 flex-wrap">
			{#each ['all', 'Technical Translation', 'Digital Drawing', 'Graphic Design', 'UX UI Design', 'Mobile Development', 'Web Development'] as project}
				<button
					on:click={workFilter}
					data-filter={project.replaceAll(' ', '-').replaceAll('&', '')}
					class="capitalize cursor-pointer text-customDark py-2 px-2 relative after:h-1 after:rounded-lg after:w-full after:absolute after:bottom-0 after:left-5 after:transition-all hover:after:bg-blue-600 hover:after:left-0 {project ==
					'all'
						? 'after:bg-blue-600 after:!left-0'
						: ''}">{$t(project)}</button
				>
			{/each}
		</div>
	</div>
	<div class="max-w-6xl m-auto">
		<div class="top-article">
			<div class="flex items-center">
				<img src={topArticle.image} alt="Top Article" class="w-1/2 h-auto rounded-lg me-12" />
				<div class="w-1/2">
					<div class="top-article-tags flex gap-4 mb-4">
						<span class="text-customBlue-950">{topArticle.category}</span>
						<span class="text-customBlue-950">{topArticle.readTime}</span>
					</div>
					<h2 class="font-semibold mb-2 text-3xl text-customDark">{topArticle.title}</h2>
					<p class="top-article-excerpt mb-4 text-customDark">{topArticle.excerpt}</p>
					<div class="text-sm text-gray-500 mb-4 flex gap-3 items-center">
						<img
							src={topArticle.author?.image}
							class="w-12 h-w-12 rounded-full aspect-square object-cover"
							alt=""
						/>
						<span class="me-3">{topArticle.author?.name}</span>
						<span>{topArticle.date}</span>
					</div>
				</div>
			</div>
		</div>

		<h1 class="text-3xl font-bold mb-6 text-customDark">The Latest Articles</h1>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each articles as article}
				<article class="border rounded-lg shadow-lg">
					<div class="relative">
						<img src={article.image} alt="Article Thumb" class="h-auto rounded-lg" />
						<div
							class="absolute top-7 start-7 px-10 py-12 bg-customBlue-950 text-white text-lg font-bold rounded-md"
						>
							{article.date}
						</div>
					</div>
					<div class="p-4 pb-6">
						<div class="top-article-tags flex gap-4 mb-2">
							<span class="text-sm text-customBlue-950">{article.category}</span>
							<span class="text-sm text-customBlue-950">{article.readTime}</span>
						</div>
						<h2 class="font-semibold mb-2 text-xl text-customDark">{article.title}</h2>
						<p class="text-sm text-gray-700 mb-4">{article.excerpt}</p>
						<div class="text-sm text-gray-500 mb-6 flex gap-3 items-center">
							<img
								src={article.author?.image}
								class="w-9 h-9 rounded-full aspect-square object-cover"
								alt=""
							/>
							<span class="me-3">{article.author?.name}</span>
							<span>{article.date}</span>
						</div>
						<a
							class="transition-colors duration-300 p-2 px-6 text-customBlue-950 hover:text-white hover:bg-customBlue-950 rounded-md capitalize"
							href={`/articles/${article.id}`}>{$t('read more')}</a
						>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.top-article {
		@apply mb-12;
	}

	.article-title {
		@apply text-lg font-semibold mb-2;
	}

	.article-meta {
		@apply text-sm text-gray-500 mb-4;
	}

	.article-excerpt {
		@apply text-base text-gray-700;
	}
</style>
