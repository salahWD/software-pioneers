<script>
	import { createEventDispatcher } from 'svelte';

	export let fileUrl = '';
	export let mokupImage = '';

	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	tabindex="0"
	on:click={(e) => {
		dispatch('clicked', fileUrl);
	}}
	role="button"
>
	<div
		class="bg-sky-50 rounded-lg shadow-md overflow-hidden group flex flex-col h-full p-3 hover:shadow-xl transition-shadow duration-500"
	>
		<div class="w-fill h-full overflow-hidden rounded">
			<img
				src={mokupImage}
				alt="thanks_message_image"
				class="max-w-full w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grow-0"
			/>
		</div>
	</div>
</div>
