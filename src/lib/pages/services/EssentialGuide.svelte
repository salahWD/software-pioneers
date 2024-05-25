<script>
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

<div class="container mx-auto">
	<section
		bind:this={sectionEl}
		class="flex flex-col p-8 md:flex-row items-center md:space-x-6 bg-white"
	>
		<img
			src="image-2.png"
			alt="Guide_Image"
			class="md:w-1/2 px-20 animate-wiggle dynamic-image"
			style="scale: {imageSize}"
		/>
		<div class="md:w-1/2 text-center md:text-start">
			<h2 class="text-2xl text-black font-bold mb-4">Essential guide for users</h2>
			<p class="mb-6 text-gray-600">
				ServiceHub offers a user-friendly experience, making it easy to access services without
				technical knowledge. Your personalized dashboard simplifies service management.
			</p>
			<button class="bg-blue-600 text-white py-2 px-4 rounded">Explore</button>
		</div>
	</section>
</div>

<style>
	.dynamic-image {
		transition: transform 0.1s ease-in-out;
	}
</style>
