<script>
	import { t, locale } from '$lib/../i18n';
	import Button from './common/Button.svelte';
	import FloatingCards from '$lib/components/FloatingCards.svelte';
	const questions = [
		{
			text: 'Highly efficient integrated systems',
			icon: `
				<svg fill="currentColor" stroke="currentColor" viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g id="Layer_1"/>
					<g id="Layer_2">
						<g>
							<path d="M59.3,58.9v-40h-1h-11v40h-1.9v-30h-1h-11v30h-1.9v-34h-1h-11v34h-1.9v-26h-1h-11v26H4v2h1.6h12h1.9h12h1.9h12h1.9h12H60    v-2H59.3z M7.6,58.9v-24h8v24H7.6z M21.5,26.9h8v32l-8,0V26.9z M35.4,58.9v-28h8v28H35.4z M49.3,20.9h8v38l-8,0V20.9z"/>
							<polygon points="26.2,12.5 36.7,22.8 54.9,4.6 53.5,3.1 36.7,19.9 26.1,9.6 8.5,27.5 10,28.9   "/>
						</g>
					</g>
				</svg>
			`,
			padding: 'p-2'
		},
		{
			text: 'A team of professional software engineers',
			icon: `<svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2994 10.4527L19.2267 10.7677C19.3846 10.7935 19.5003 10.9298 19.5 11.0896V12.883C19.5 13.0412 19.3865 13.1768 19.2303 13.2042L17.3004 13.543C17.1885 13.9298 17.0349 14.3022 16.8415 14.6543L17.9823 16.2382C18.0759 16.3679 18.0612 16.5463 17.9483 16.6595L16.6804 17.9283C16.5682 18.0401 16.3921 18.0561 16.2623 17.9645L14.6627 16.8424C14.3099 17.0387 13.9352 17.1952 13.5442 17.3103L13.2034 19.231C13.176 19.3865 13.0406 19.5 12.8825 19.5H11.0888C10.9294 19.5 10.7934 19.3849 10.7676 19.228L10.4493 17.3168C10.059 17.204 9.6823 17.0485 9.32585 16.8525L7.73767 17.9648C7.60821 18.0558 7.43178 18.0401 7.31992 17.9283L6.05198 16.6595C5.93947 16.5463 5.9248 16.3686 6.01741 16.2391L7.13958 14.6697C6.94163 14.3116 6.78444 13.9337 6.67062 13.5414L4.76905 13.2042C4.61349 13.1765 4.5 13.0412 4.5 12.883V11.0896C4.5 10.9304 4.61544 10.7941 4.77263 10.768L6.67421 10.4514C6.78868 10.0582 6.94586 9.68022 7.14316 9.32315L6.0347 7.73739C5.94371 7.60793 5.95937 7.43185 6.07122 7.32L7.33883 6.0525C7.452 5.94 7.62908 5.925 7.7592 6.01793L9.33433 7.14293C9.68817 6.94924 10.0639 6.795 10.4552 6.6825L10.767 4.77359C10.7927 4.61576 10.929 4.5 11.0888 4.5H12.8825C13.041 4.5 13.1763 4.61413 13.2037 4.77L13.5399 6.68935C13.929 6.8025 14.304 6.95837 14.6591 7.15467L16.2385 6.01957C16.3683 5.92598 16.5464 5.94065 16.6595 6.05348L17.9278 7.32098C18.0397 7.43315 18.0553 7.60957 17.9643 7.73902L16.8392 9.34239C17.0323 9.69424 17.1865 10.066 17.2994 10.4527ZM9.71725 12C9.71725 13.2607 10.7393 14.2826 12.0001 14.2826C13.2608 14.2826 14.2829 13.2607 14.2829 12C14.2829 10.7394 13.2608 9.71742 12.0001 9.71742C10.7393 9.71742 9.71725 10.7394 9.71725 12Z" stroke="currentColor"/>
				</svg>`,
			padding: 'p-1'
		},
		{
			text: 'Distinctive technical solutions that serve the growth and development of your business',
			icon: `<svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14" stroke="#currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`,
			padding: 'p-2'
		}
	];
</script>

<!--Hero-->
<div class="pt-20 md:pt-16">
	<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row">
		<!--Left Col-->
		<div
			class="flex flex-col w-full md:w-2/5 justify-start xl:justify-start 2xl:justify-center xl:pb-0 xl:mt-24 2xl:mt-0 2xl:pb-32 mt-16 text-center md:text-start order-2 md:order-1 font-dm"
		>
			<h1
				class="my-2 md:my-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-customBlue-950"
			>
				{$t('Software pioneers')}
			</h1>
			<p class="text-base leading-6 mb-2 md:mb-8 w-full text-customDark">
				{$t(
					'where excellence and creativity create integrated systems that support the development and spread of your business. What are you waiting for ?'
				)}
			</p>
			<Button
				secondary={true}
				cusomClass="font-dm font-medium py-4 !px-16"
				centered={false}
				url="/contact">{$t('Start Now')} !</Button
			>
		</div>

		<div class="w-full md:w-3/5 py-0 mb-4 md:mb-0 md:py-6 lg:py-12 text-center order-1 md:order-2">
			<!-- <img
				class="mx-auto md:mx-0 md:ms-auto lg:me-20 p-0 w-1/2 md:w-4/5 lg:w-3/5 z-50 aspect-square rounded-full object-cover"
				src="meeting-1.jpg"
				alt="hero"
			/> -->
			<FloatingCards />
		</div>
	</div>
</div>
<div class="relative -mb-px">
	<svg
		viewBox="0 0 1428 174"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
				<path
					d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
					opacity="0.35"
				/>
				<path
					d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
					opacity="0.35"
				/>
				<path
					d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
					id="Path-4"
					opacity="0.5"
				/>
			</g>
			<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
				<path
					d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
				/>
			</g>
		</g>
	</svg>
</div>

<div class="pt-6 md:pt-28 pb-20 w-full bg-white">
	<div class="container m-auto">
		<h3 class="text-customBlue-950 text-3xl text-center mb-6 overflow-hidden mx-4">
			<span
				class="before:h-0.5 before:w-1/2 max-[400px]:before:w-0 before:absolute before:right-full before:bg-customBlue-950 before:top-1/2 after:h-0.5 after:w-1/2 max-[400px]:after:w-0 after:absolute after:left-full after:bg-customBlue-950 after:top-1/2 relative px-4 font-dm font-bold"
				>{$t('Why Software Pioneers ?')}</span
			>
		</h3>
		<div class="flex flex-col md:flex-row justify-between gap-y-3 flex-wrap">
			{#each questions as question}
				<div class="px-4 md:basis-1/2 xl:basis-1/3 md:h-auto md:block md:m-0">
					<div class="p-4 bg-white shadow rounded h-full">
						<!-- class="w-6 max-h-6 text-blue-600 rounded-full border border-black border-1 flex-shrink-0"
						fill="none"
						stroke="currentColor" -->
						<div
							class="rounded-full bg-customSky-200 mb-3 text-customSky-950 w-9 aspect-square {question.padding}"
						>
							{@html question.icon}
						</div>
						<p class="text-gray-800 text-sm font-dm font-medium">{$t(question.text)}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
