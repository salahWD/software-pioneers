<script>
	import { t } from '$lib/../i18n';
</script>

<!-- src/routes/components/AboutUs.svelte -->
<section class="py-14 lg:py-24 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
			<div class="img-box">
				<img
					src="multilingual_articles.jpeg"
					alt="About Us tailwind page"
					class="max-lg:mx-auto rounded-lg max-h-80 mx-auto"
				/>
			</div>
			<div class="flex items-center">
				<div class="data w-full">
					<h2
						class="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-9 max-lg:text-center relative capitalize"
					>
						{$t('make it easy for yourself')}
					</h2>
					<p
						class="font-normal md:text-xl leading-6 md:leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto"
					>
						{$t(
							`use The Writer plugin and service for free, it helps you write articles and speed up the process by using Ai technology, more about that on the plugins page`
						)}
					</p>
					<a href="https://elkateb.shawerr.com/" class="max-lg:block max-lg:text-center"
						><button
							class="
						text-white gradient font-bold rounded-full
						mx-auto lg:mx-0 my-5 py-2 px-4 shadow-lg
						focus:outline-none focus:shadow-outline hover:underline
						transform transition hover:scale-105 duration-300 ease-in-out">{$t('learn more')}</button
						></a
					>
				</div>
			</div>
		</div>
	</div>
</section>
