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

	function animationEnd(e) {
		if (!e.target.classList.contains('scale-100') && e.target.classList.contains('work-job')) {
			// e.target.classList.add('hidden');
		}
	}

	function workFilter(e) {
		// button active logic and styling
		for (let item of e.target.parentElement.children) {
			item.classList.remove('bg-pink-500', 'text-white');
			item.classList.add('bg-slate-50', 'text-black');
		}
		e.target.classList.add('bg-pink-500', 'text-white');
		e.target.classList.remove('bg-slate-50', 'text-black');
		let works = document.querySelectorAll('.work-job');

		// tag => the value we will search for in elements classes
		let tag = e.target.dataset.filter;
		// setting the animation for filltered jobs
		works.forEach((job) => {
			if (job.classList.contains(tag)) {
				job.classList.remove('scale-0', 'hidden', 'order-2');
				job.classList.add('scale-100', 'order-1');
			} else {
				job.classList.remove('scale-100', 'order-1');
				job.classList.add('scale-0', 'order-2');
			}
		});

		let len = document.querySelectorAll(`.work-job.${tag}`).length;
		let container = document.getElementById('work-jobs-container');
		const r = (number) => Math.round(number);
		const w = (item) => item.getBoundingClientRect().width;
		let colW = window.screen.width >= 1280 ? 3 : window.screen.width >= 1024 ? 2 : 1;
		container.style.height = `${(660 + 16) * Math.ceil(len / colW)}px`;
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

	<div class="mb-6 px-2">
		<div class="bg-white shadow rounded px-8 py-4 flex gap-5 flex-wrap">
			{#each ['all', ...new Set(projects.map((item) => item.client))] as project}
				<button
					on:click={workFilter}
					data-filter={project.replaceAll(' ', '-').replaceAll('&', '')}
					class="capitalize rounded-full px-5 py-1 cursor-pointer shadow bg-slate-50 text-black"
					>{$t(project)}</button
				>
			{/each}
		</div>
	</div>

	<div class="flex flex-wrap justify-center overflow-hidden" id="work-jobs-container">
		{#each projects as project}
			<div
				class="w-full lg:w-1/2 xl:w-1/3 px-2 mb-4 transition-all work-job all duration-1000 order-1 {project.client
					.replaceAll(' ', '-')
					.replaceAll('&', '')}"
				on:transitionend={animationEnd}
			>
				<ProjectComponent {...project} title={$t(project.title)} client={$t(project.client)} />
			</div>
		{/each}
	</div>
</div>
