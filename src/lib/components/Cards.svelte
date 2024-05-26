<script lang="ts">
	import Card from './common/Card.svelte';
	const cards = [
		{
			title: 'Custom Website Design',
			description:
				'Our Custom Website Design and Development service ensures your startup stands out with a unique, user-friendly, and responsive website.',
			url: '/services'
		},
		{
			title: 'SEO and Content Marketing',
			description:
				'Boost your online visibility and attract more organic traffic with our SEO and Content Marketing service.',
			url: '/services'
		},
		{
			title: 'Social Media Management and Advertising',
			description:
				'Engage with your audience and grow your brand presence with our Social Media Management and Advertising service.',
			url: '/services'
		}
	];
</script>

<section class="bg-white border-none py-20">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1 class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
			what we do
		</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-80 opacity-25 my-0 py-0 rounded-t" />
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each cards as card}
				<Card customClass="" {...card} />
			{/each}
		</div>
	</div>
</section>
