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

<section bind:this={sectionEl} class="bg-blue-100">
	<div class="container mx-auto">
		<div class="flex flex-col items-center p-8 md:flex-row md:space-x-6">
			<div class="order-2 md:order-1 md:w-1/2 text-center md:text-start">
				<h2 class="text-2xl font-bold text-black mb-4">Agile Project Management</h2>
				<p class="mb-6 text-gray-600">
					Leverage Agile Project Management for efficient, on-time, and on-budget software delivery.
					Our iterative approach and collaborative planning ensure flexibility and alignment with
					your business goals, fostering transparency and productivity.
				</p>
				<button class="bg-blue-600 text-white py-2 px-4 rounded">Start now</button>
			</div>
			<img
				src="image-1.png"
				alt="Service_Chains_Image"
				style="scale: {imageSize}"
				class="order-1 md:order-2 md:w-1/2 px-20 animate-wiggle"
			/>
		</div>
	</div>
</section>
