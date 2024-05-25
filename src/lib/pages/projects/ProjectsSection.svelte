<script>
	export let projects = [
		'project-1.webp',
		'project-2.webp',
		'project-3.webp',
		'project-4.webp',
		'project-5.webp'
	];
</script>

<div class="py-16 sm:py-20">
	<h4 class="text-2xl mt-4 font-bold text-pink-800 text-center">ow work</h4>
	<h2 class="text-5xl capitalize mb-16 font-bold text-black text-center">speaks for itself</h2>
	<div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
		{#each projects as project, i}
			<div
				class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 {i %
					2 ==
					1 && 'rotate-3'} -rotate-3"
			>
				<img
					alt=""
					loading="lazy"
					width="3744"
					height="5616"
					decoding="async"
					data-nimg="1"
					class="absolute inset-0 h-full w-full object-cover"
					style="color:transparent"
					sizes="(min-width: 640px) 18rem, 11rem"
					src={project}
				/>
			</div>
		{/each}
	</div>
</div>
