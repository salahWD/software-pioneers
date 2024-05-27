<script>
	export let title =
		'Client-Server Architecture: Advantages and Disadvantages of the Network Computing Model';
	export let image = '/project-3.jpg';
	export let link = '/projects/1';
</script>

<a
	href={link}
	class="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
>
	<img
		src={image}
		alt={title}
		class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
	/>
	<div
		class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-0 flex flex-col justify-end p-4"
	>
		<h3 class="text-white text-lg font-semibold mb-2">{title}</h3>
	</div>
</a>
