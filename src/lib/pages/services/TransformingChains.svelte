<script>
	import { t } from '$lib/../i18n';
	import { onMount } from 'svelte';

	let imageSize = 0.5; // Initial scale
	let sectionEl;

	// Function to handle scroll event
	const handleScroll = () => {
		scrollY = window.scrollY;
		updateImageSize();
	};

	// Function to update image size based on the distance from the bottom of the viewport
	const updateImageSize = () => {
		const distanceFromBottom =
			sectionEl.getBoundingClientRect().top - (window.innerHeight + window.innerHeight / 4);
		// Adjust this formula to control the resizing behavior
		imageSize = 1 + (1 - window.innerHeight / Math.abs(distanceFromBottom));
		if (imageSize < 0.5) imageSize = 0.5; // Minimum scale limit
		if (imageSize > 1) imageSize = 1; // Maximum scale limit
	};

	// Attach the scroll event listener on mount
	onMount(() => {
		updateImageSize(); // Get the initial size
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', updateImageSize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateImageSize);
		};
	});
</script>

<section
	bind:this={sectionEl}
	class="flex flex-col items-center p-8 md:flex-row md:space-x-6 bg-white"
>
	<img
		style="scale: {imageSize}"
		src="image-1.png"
		alt="Service_Chains_Image"
		class="md:w-1/2 px-28 animate-wiggle"
	/>
	<div class="md:w-1/2 text-center md:text-start">
		<h2 class="text-2xl font-bold mb-4 text-black capitalize">{$t('graphic design')}</h2>
		<p class="mb-6 text-gray-600">
			{$t(
				'Get a distinctive design for your brand Including design Posts, logos, visual identities and prints.'
			)}
		</p>
		<a href="/contact" class="bg-blue-600 text-white py-2 px-4 rounded">{$t('Explore')}</a>
	</div>
</section>
