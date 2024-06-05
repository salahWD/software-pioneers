<script>
	import { t } from '$lib/../i18n';
	const questions = [
		{
			text: 'Highly efficient integrated systems'
		},
		{
			text: 'A team of professional software engineers'
		},
		{
			text: 'Distinctive technical solutions that serve the growth and development of your business'
		}
	];
</script>

<!--Hero-->
<div class="pt-20 md:pt-20">
	<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row">
		<!--Left Col-->
		<div
			class="flex flex-col w-full md:w-2/5 justify-center text-center md:text-start pb-4 md:pb-0 order-2 md:order-1"
		>
			<h1 class="my-2 md:my-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
				<!-- {$t('Transform Your Vision into Reality with Our Innovative Solutions')} -->
				{$t('Software pioneers')}
			</h1>
			<p class="leading-normal text-1xl md:text-2xl mb-2 md:mb-8 w-full">
				{$t(
					// 'At Software Pioneers, we specialize in turning your ideas into cutting-edge software products.'
					' where excellence and creativity create integrated systems that support the development and spread of your business. What are you waiting for ?'
				)}
			</p>
			<a
				href="/contact"
				class="text-center mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-2 md:my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
			>
				{$t('Start now')} !
			</a>
		</div>
		<!--Image Col-->
		<div class="w-full md:w-3/5 py-0 mb-4 md:mb-0 md:py-6 lg:py-12 text-center order-1 md:order-2">
			<img
				class="mx-auto md:mx-0 py-0 w-1/2 md:w-4/5 md:ms-auto z-50 px-6 md:p-0"
				src="hero.png"
				alt="hero"
			/>
		</div>
		<div class="order-3 pt-6 md:pt-12 pb-20">
			<h3 class="text-white text-2xl text-center mb-6 overflow-hidden mx-4">
				<span
					class="before:h-0.5 before:w-1/2 max-[400px]:before:w-0 before:absolute before:right-full before:bg-white before:top-1/2 after:h-0.5 after:w-1/2 max-[400px]:after:w-0 after:absolute after:left-full after:bg-white after:top-1/2 relative px-4"
					>{$t('Why Software Pioneers ?')}</span
				>
			</h3>
			<div class="flex flex-col md:flex-row justify-between gap-y-3 flex-wrap">
				{#each questions as question}
					<div class="px-4 md:basis-1/2 xl:basis-1/3 md:h-auto md:block md:m-0">
						<div class="flex items-center gap-4 p-4 bg-white shadow rounded h-full">
							<svg
								class="w-6 max-h-6 text-blue-600 rounded-full border border-black border-1 flex-shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
							<p class="text-gray-800">{$t(question.text)}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
<div class="relative -mt-12 lg:-mt-24">
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
					opacity="0.100000001"
				/>
				<path
					d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
					opacity="0.100000001"
				/>
				<path
					d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
					id="Path-4"
					opacity="0.200000003"
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
