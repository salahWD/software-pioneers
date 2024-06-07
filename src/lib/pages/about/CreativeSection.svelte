<script>
	import { t } from '$lib/../i18n';
</script>

<!-- src/routes/components/CreativeSection.svelte -->
<section class="py-14 lg:py-24 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
			<div class="lg:pr-24 flex items-center">
				<div class="data w-full">
					<img
						src="/team-2.webp"
						alt="About Us tailwind page"
						class="block lg:hidden mb-9 mx-auto rounded-lg"
					/>
					<h2
						class="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-9 max-lg:text-center relative capitalize"
					>
						{$t('we are a true story of success')}
					</h2>
					<p
						class="font-normal md:text-xl leading-6 md:leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto"
					>
						{@html $t(
							`<span class="capitalize text-sky-600">software pioneers</span> isn’t just a regular startup. We began with only three employees in a challenging local market in Gaza City and have grown to become one of the largest companies in the field locally. We provide over 110 jobs and opportunities for software engineers in Palestine and have a strong global client base as well`
						)}
					</p>
				</div>
			</div>
			<div class="img-box">
				<img src="/team-2.webp" alt="About Us tailwind page" class="hidden lg:block rounded-lg" />
			</div>
		</div>
	</div>
</section>
