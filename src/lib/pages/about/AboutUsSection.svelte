<script>
	import { t } from '$lib/../i18n';
</script>

<!-- src/routes/components/AboutUs.svelte -->
<section class="py-14 lg:py-24 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
			<div class="img-box">
				<img src="team-1.webp" alt="About Us tailwind page" class="max-lg:mx-auto rounded-lg" />
			</div>
			<div class="lg:pl-[100px] flex items-center">
				<div class="data w-full">
					<h2
						class="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-9 max-lg:text-center relative capitalize"
					>
						{$t('about us')}
					</h2>
					<p
						class="font-normal md:text-xl leading-6 md:leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto"
					>
						{@html $t(
							`Driven by a passion for seamless user experiences, we've meticulously curated <span class="capitalize text-sky-600">software pioneers</span> to help business owners to develop and compete strongly in the local and international market through high-performance systems that manage all their businesses in an innovative and smooth manner.`
						)}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
