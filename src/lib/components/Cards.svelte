<script lang="ts">
	import { t } from '$lib/../i18n';
	import Card from './common/Card.svelte';
	const cards = [
		{
			title: $t('Custom Software Development'),
			description: $t(
				'Tailored software solutions designed to meet your unique business needs. From concept to deployment, we ensure your vision is realized.'
			),
			url: '/services',
			cta: $t('Learn More')
		},
		{
			title: $t('UI/UX Design'),
			description: $t(
				'Creating intuitive and engaging user experiences. Our design team crafts interfaces that are both beautiful and functional.'
			),
			url: '/our-work',
			cta: $t('See Our Work')
		},
		{
			title: $t('Technical Support & Maintenance'),
			description: $t(
				'Ensuring your software runs smoothly and efficiently with our comprehensive support and maintenance services.'
			),
			url: '/contact',
			cta: $t('Get Support')
		}
	];
</script>

<section class="bg-white border-none py-20">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1
			class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('what we do')}
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
