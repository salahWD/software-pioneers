<script>
	import { t } from '$lib/../i18n';
	import ProjectComponent from '$lib/components/ProjectComponent.svelte';
	import ThankMessageComponent from '$lib/components/ThankMessageComponent.svelte';
	import { onMount } from 'svelte';

	let thanksMessages = [];

	onMount(async () => {
		const thanksMessagesResponse = await fetch('/thanks-messages.json');
		thanksMessages = await thanksMessagesResponse.json();
	});

	let isShown = false;

	const closeMenu = () => {
		return (isShown = false);
	};
	const toggleMenu = (e) => {
		if (!isShown) {
			popupHolder.classList.remove('invisible');
			popupHolder.querySelector('embed').src = e.detail;
		}
		return (isShown = !isShown);
	};
	const handleTransitionEnd = (e) => {
		if (!isShown) {
			popupHolder.classList.add('invisible');
		}
	};

	// let projects = [];

	// onMount(async () => {
	// 	const projectsResponse = await fetch('/projects.json');
	// 	projects = await projectsResponse.json();
	// });

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

	<div class="grid grid-cols-1 sm:grid-cols-2 auto-rows-[1fr] md:grid-cols-3 gap-6 px-6">
		{#each thanksMessages as message, i}
			<ThankMessageComponent id={i} {...message} on:clicked={toggleMenu} />
		{/each}
	</div>
	<!-- <div class="flex flex-wrap justify-center">
		{#each projects as project}
			<div class="w-full md:w-1/2 px-2 mb-4">
				<ProjectComponent {...project} />
			</div>
		{/each}
	</div> -->
</div>

<!-- pop up modal -->
<div
	class="relative z-30 invisible"
	id="popupHolder"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		on:transitionend={handleTransitionEnd}
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200
		{isShown ? 'opacity-100' : 'opacity-0 '}"
	></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div
			class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			on:click={closeMenu}
		>
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl
				{isShown
					? 'opacity-100 translate-y-0 sm:scale-100'
					: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
				"
			>
				<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" on:click|stopPropagation>
					<embed src="" class="w-full" width="500" height="375" type="application/pdf" />
				</div>
			</div>
		</div>
	</div>
</div>
