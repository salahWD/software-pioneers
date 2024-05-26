<script lang="ts">
	import Button from './Button.svelte';
	export let customClass = '';
	export let subTitle = 'service';
	export let url = '';
	export let description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.';
	export let title = 'card title here';
	export let cta = 'See More';
</script>

<div class="w-full p-6 bg-white rounded flex flex-col flex-grow flex-shrink shadow {customClass}">
	<div class="flex-1 overflow-hidden">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="flex flex-wrap no-underline hover:no-underline">
			<p class="w-full text-gray-600 text-xs md:text-sm mb-1">{subTitle}</p>
			<div class="w-full font-bold text-xl text-gray-800 mb-2">{title}</div>
			<p class="text-gray-800 text-base mb-3">
				{description}
			</p>
		</a>
	</div>
	<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
		<Button {url} cusomClass="my-1 mx-2" secondary>{cta}</Button>
	</div>
</div>
