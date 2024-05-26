<script lang="ts">
	import { t } from '$lib/../i18n.js';
	import Button from './common/Button.svelte';

	export let height = 0;
</script>

<!--Nav-->
<nav class={`w-full text-white bg-slate-700 block height-[${height}px] overflow-hidden`}>
	<div class="w-full container px-4 md:px-0 mx-auto flex items-center justify-between mt-0 py-2">
		<p class="w-full my-0 md:my-2 text-sm md:mb-2 md:w-4/5 text-white">
			{$t('check our new Ai plugin, Elkateb')}
		</p>
		<div class="shrink-0">
			<Button
				url={'https://elkateb.shawerr.com/'}
				cusomClass="!mt-0 !mb-0 !px-3 !py-1 !md:px-4 !md:py-2"
				secondary={true}
				center={false}>{$t('show now')}</Button
			>
		</div>
	</div>
</nav>
