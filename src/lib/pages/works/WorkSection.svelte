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
			item.classList.remove('after:bg-blue-600', 'after:!left-0');
			item.classList.add('text-black', 'text-black');
		}
		e.target.classList.add('after:bg-blue-600', 'after:!left-0');
		e.target.classList.remove('text-black', 'text-black');
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

<div class="container mx-auto px-4 py-8 font-dm" id="projects-section">
	<div class="px-4 mb-8 lg:mb-10 max-w-[510px]">
		<h1
			class="w-full my-2 text-3xl md:text-3xl font-extrabold leading-tight text-customDark capitalize"
		>
			{$t(`Let's look at our Awesome Projects`)}
		</h1>
	</div>

	<div class="mb-6 px-2">
		<div class="bg-white shadow rounded px-8 py-4 flex gap-5 flex-wrap">
			{#each ['all', ...new Set(projects.map((item) => item.category))] as project}
				<button
					on:click={workFilter}
					data-filter={project.replaceAll(' ', '-').replaceAll('&', '')}
					class="capitalize cursor-pointer text-customDark py-2 px-2 relative after:h-1 after:rounded-lg after:w-full after:absolute after:bottom-0 after:left-5 after:transition-all hover:after:bg-blue-600 hover:after:left-0 {project ==
					'all'
						? 'after:bg-blue-600 after:!left-0'
						: ''}">{$t(project)}</button
				>
			{/each}
		</div>
	</div>

	<div class="flex flex-wrap justify-center overflow-hidden gap-y-8" id="work-jobs-container">
		{#each projects as project}
			<div
				class="w-full lg:w-1/2 xl:w-1/3 px-2 mb-4 transition-all work-job all duration-1000 order-1 {project.category
					.replaceAll(' ', '-')
					.replaceAll('&', '')}"
				on:transitionend={animationEnd}
			>
				<ProjectComponent {...project} title={$t(project.title)} client={$t(project.category)} />
			</div>
		{/each}
	</div>
</div>
