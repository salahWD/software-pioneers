<script>
	export let title = '';
	export let imageUrl = '';
	export let alt = '';
	export let link = '';
	export let client = '';
	export let techs = [];
</script>

<div class="">
	<a href={link}>
		<div class="bg-slate-50 rounded-lg shadow-lg overflow-hidden group flex flex-col h-full">
			<img
				src={imageUrl}
				{alt}
				class="max-w-full w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grow-0 p-4"
			/>
			<div class="p-8 pb-20 grow-1">
				<h3 class="text-xl text-center text-black font-semibold mb-2">{title}</h3>
				<p class="mt-2 text-sm font-bold text-center text-slate-500">{client}</p>
				<div class="flex gap-2 m-auto w-fit mt-8">
					{#each techs as tech}
						<img class="w-8 h-8" src={`${tech}.png`} alt={tech} />
					{/each}
				</div>
			</div>
		</div>
	</a>
</div>
