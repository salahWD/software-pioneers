<script>
	import { t } from '$lib/../i18n';
	import ProjectComponent from '$lib/components/ProjectComponent.svelte';
	import { onMount } from 'svelte';

	let projects = [];

	onMount(async () => {
		const projectsResponse = await fetch('/projects.json');
		projects = await projectsResponse.json();
	});

	// Function to get the current date
	function now() {
		return new Date();
	}

	// Function to get the date exactly 5 years before the current date
	function fiveYearsBeforeNow() {
		const date = new Date();
		date.setFullYear(date.getFullYear() - 5);
		return date;
	}

	// Function to calculate the difference in years between two dates
	function getYearsDifference(date1, date2) {
		const diffTime = Math.abs(date2 - date1);
		const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
		return diffYears;
	}

	// Calculate the years of experience
	const yearsOfExperience = getYearsDifference(fiveYearsBeforeNow(), now());
</script>

<div class="container mx-auto px-4 py-8" id="projects-section">
	<h1
		class="w-full my-4 md:my-12 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
	>
		{$t('our projects')}
	</h1>
	<div class="w-full mb-4">
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<p class="md:text-lg text-gray-500 text-center max-w-3xl m-auto mb-8">
		{$t(
			"For more than ::years:: we've been helping companies build successful software products, 5-stars mobile applications, big data solutions that allow allocating hundreds of dollars, and AI products that drive innovations",
			[yearsOfExperience]
		)}.
	</p>
	<div class="flex flex-wrap justify-center">
		{#each projects as project}
			<div class="w-full md:w-1/2 px-2 mb-4">
				<ProjectComponent {...project} />
			</div>
		{/each}
	</div>
</div>
