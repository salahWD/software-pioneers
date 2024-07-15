<script>
	import { onMount } from 'svelte';
	let articles = [];

	onMount(async () => {
		const response = await fetch('/articles.json');
		articles = await response.json();
	});
</script>

<section class="p-8">
	<h1 class="text-3xl font-bold mb-6">The Latest Articles</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each articles as article}
			<article class="border rounded-lg p-4 shadow-lg">
				<div class="mb-2">
					<div class="text-blue-500">{article.date}</div>
				</div>
				<h2 class="article-title mb-2">{article.title}</h2>
				<div class="article-meta mb-4">
					By {article.author} &bull; {article.readTime}
				</div>
				<p class="article-excerpt">{article.excerpt}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.article-title {
		@apply text-lg font-semibold;
	}

	.article-meta {
		@apply text-sm text-gray-500;
	}

	.article-excerpt {
		@apply text-base text-gray-700;
	}
</style>
