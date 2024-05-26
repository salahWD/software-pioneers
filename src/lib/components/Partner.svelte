<script>
	export let companies = [
		{ name: 'Airbnb', logo: '/partner-1.png', alt: 'Airbnb Logo' },
		{ name: 'Fiverr', logo: '/partner-2.png', alt: 'Fiverr Logo' },
		{ name: 'Pickwatch', logo: '/partner-3.png', alt: 'Pickwatch Logo' },
		{ name: 'Citrix', logo: '/partner-4.png', alt: 'Citrix Logo' },
		{ name: 'Online Rewards', logo: '/partner-5.png', alt: 'Online Rewards Logo' }
	];
</script>

<div class="text-center mb-8">
	<h2 class="text-sm font-semibold text-gray-500">
		THESE COMPANIES BENEFITED FROM OUR SOFTWARE SOLUTIONS
	</h2>
</div>

<div class="flex justify-center items-center space-x-8">
	{#each companies as company}
		<img src={company.logo} alt={company.alt} class="h-16 object-contain" />
	{/each}
</div>
