<script>
	export let projects = [
		{
			title: 'Successful Migration and System Enhancement for Quantium',
			client: 'Quantium',
			imageUrl: 'project-4.png',
			techs: ['python', 'react'],
			alt: 'Quantium project image'
		},
		{
			title: 'CRM System Development and Data Migration for Health Tech Company',
			client: 'Under NDA',
			imageUrl: 'project-5.png',
			techs: ['python', 'react'],
			alt: 'Health Tech project image'
		}
	];
</script>

<div class="container mx-auto px-4 py-8">
	<h1
		class="w-full my-4 md:my-12 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800"
	>
		Our Projects
	</h1>
	<div class="w-full mb-4">
		<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<p class="md:text-lg text-gray-500 text-center max-w-3xl m-auto mb-8">
		For more than 7 years we've been helping companies build successful software products, 5-stars
		mobile applications, big data solutions that allow allocating hundreds of dollars, and AI
		products that drive innovations.
	</p>
	<div class="flex flex-wrap justify-center">
		{#each projects as project}
			<div class="w-full md:w-1/2 p-4">
				<div class="bg-slate-50 rounded-lg shadow-lg overflow-hidden group">
					<img
						src={project.imageUrl}
						alt={project.alt}
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div class="p-8 pb-20">
						<h3 class="text-xl text-center text-black font-semibold mb-2">{project.title}</h3>
						<p class="mt-2 text-sm font-bold text-center text-slate-500">{project.client}</p>
						<div class="flex gap-2 m-auto w-fit mt-8">
							{#each project.techs as tech}
								<img class="w-8 h-8" src={`${tech}.png`} alt={tech} />
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
