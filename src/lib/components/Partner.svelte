<script>
	import { t } from '$lib/../i18n';
	export let companies = [
		{ name: 'Airbnb', logo: '/partner-1.png', alt: 'Airbnb Logo' },
		{ name: 'Fiverr', logo: '/partner-2.png', alt: 'Fiverr Logo' },
		{ name: 'Pickwatch', logo: '/partner-3.png', alt: 'Pickwatch Logo' },
		{ name: 'Citrix', logo: '/partner-4.png', alt: 'Citrix Logo' },
		{ name: 'Online Rewards', logo: '/partner-5.png', alt: 'Online Rewards Logo' }
	];
</script>

<div class="container m-auto px-4">
	<div class="text-center mb-8">
		<h2 class="text-sm font-semibold text-gray-500">
			{$t('THESE COMPANIES BENEFITED FROM OUR SOFTWARE SOLUTIONS')}
		</h2>
	</div>

	<div class="flex justify-center items-center gap-3 flex-wrap">
		{#each companies as company}
			<img src={company.logo} alt={company.alt} class="h-8 sm:h-12 md:h-16 object-contain" />
		{/each}
	</div>
</div>
