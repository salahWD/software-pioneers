<script>
	import { t } from '$lib/../i18n.js';
	export let title = '';
	export let description = '';
	export let imageUrl = '';
	export let alt = '';
	export let link = '';
	export let techs = [];
</script>

<div class="h-full p-2 overflow-hidden">
	<a href={link}>
		<div class="overflow-hidden group flex flex-col h-full relative">
			<div class="overflow-hidden shadow-md">
				<img
					src={imageUrl}
					{alt}
					class="max-w-full max-h-96 min-h-80 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grow-0"
				/>
			</div>
			<div class="py-6 pb-4 grow-1">
				<h3 class="text-xl text-black font-semibold mb-2">{title}</h3>
				<p class="mt-2 text-sm font-bold text-slate-500">
					{description}
				</p>
				<div class="flex justify-between items-center mt-8">
					<div class="flex gap-2">
						{#each techs as tech}
							<img class="max-w-16 h-8 object-cover w-fit" src={`techs/${tech}.png`} alt={tech} />
						{/each}
					</div>
					<a
						class="transition-colors duration-300 p-2 text-customBlue-950 hover:text-white hover:bg-customBlue-950 rounded-md"
						href={link}>{$t('show project')}</a
					>
				</div>
			</div>
		</div>
	</a>
</div>
