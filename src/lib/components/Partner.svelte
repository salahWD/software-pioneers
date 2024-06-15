<script>
	import { t } from '$lib/../i18n';
	export let companies = [
		{ name: 'item 1', logo: '/partner-1.png', alt: 'our partner 1 image' },
		{ name: 'item 2', logo: '/partner-2.png', alt: 'our partner 2 image' },
		{ name: 'item 3', logo: '/partner-3.png', alt: 'our partner 3 image' },
		{ name: 'item 4', logo: '/partner-4.png', alt: 'our partner 4 image' },
		{ name: 'item 5', logo: '/partner-5.png', alt: 'our partner 5 image' },
		{ name: 'item 6', logo: '/partner-6.png', alt: 'our partner 6 image' }
	];
</script>

<div class="container m-auto px-4">
	<div class="text-center mb-8">
		<h2 class="text-sm font-semibold text-gray-500">
			{$t('THESE COMPANIES BENEFITED FROM OUR SOFTWARE SOLUTIONS')}
		</h2>
	</div>

	<div class="flex justify-center items-center gap-5 flex-wrap">
		{#each companies as company}
			<img
				src={company.logo}
				alt={company.alt}
				class="h-6 sm:h-10 md:h-14 object-contain grayscale"
			/>
		{/each}
	</div>
</div>
