<script>
	export let title = '';
	export let imageUrl = '';
	export let alt = '';
	export let link = '';
	export let client = '';
	export let techs = [];
</script>

<div class="h-full">
	<a href={link}>
		<div class="bg-slate-50 rounded-lg shadow-lg group flex flex-col h-full p-4 relative">
			<div class="overflow-hidden shadow-md">
				<img
					src={imageUrl}
					{alt}
					class="max-w-full max-h-96 min-h-80 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grow-0"
				/>
			</div>
			<div class="p-8 pb-20 grow-1">
				<h3 class="text-xl text-center text-black font-semibold mb-2">{title}</h3>
				<p class="mt-2 text-sm font-bold text-center text-slate-500">{client}</p>
				<div class="flex gap-2 m-auto w-fit mt-8">
					{#each techs as tech}
						<img class="max-w-16 h-8 object-cover grayscale w-fit" src={`${tech}.png`} alt={tech} />
					{/each}
				</div>
			</div>
		</div>
	</a>
</div>
