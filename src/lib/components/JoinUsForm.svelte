<script>
	import { t } from '$lib/../i18n';
	import Button from './common/Button.svelte';
	let isShown = false;

	const closeMenu = () => {
		return (isShown = false);
	};
	const toggleMenu = () => {
		if (!isShown) {
			popupHolderJoinUs.classList.remove('invisible');
		}
		return (isShown = !isShown);
	};
	const handleTransitionEnd = (e) => {
		if (!isShown) {
			popupHolderJoinUs.classList.add('invisible');
		}
	};
</script>

<div
	class="relative z-30 invisible"
	id="popupHolderJoinUs"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		on:transitionend={handleTransitionEnd}
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200
		{isShown ? 'opacity-100' : 'opacity-0 '}"
	></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg
				{isShown
					? 'opacity-100 translate-y-0 sm:scale-100'
					: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
				"
			>
				<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
					<div class="">
						<h3
							class="w-full my-2 text-2xl md:text-3xl font-bold leading-tight text-center text-gray-800 capitalize"
						>
							{$t('Work With Us')}
						</h3>
						<div class="w-full mb-4">
							<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
						</div>
					</div>
					<div class="mt-3 sm:ml-4 sm:mt-0 text-start">
						<form class="max-w-md mx-auto" id="join-us-form" enctype="multipart/form-data">
							<div class="relative z-0 w-full mb-3 group">
								<input
									type="email"
									name="email"
									id="email"
									class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="email"
									class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>{$t('Email address')}</label
								>
							</div>
							<div class="relative z-0 w-full mb-3 group">
								<input
									type="text"
									name="full_name"
									id="full_name"
									class="focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="full_name"
									class="capitalize peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>{$t('full name')}</label
								>
							</div>
							<div class="grid md:grid-cols-2 md:gap-6">
								<div class="relative z-0 w-full mb-3 group">
									<input
										type="text"
										name="job_title"
										id="job_title"
										class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
									/>
									<label
										for="job_title"
										class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
										>{$t('Job Title (field of work)')}</label
									>
								</div>
								<div class="relative z-0 w-full mb-3 group">
									<input
										type="text"
										name="job_exp"
										id="job_exp"
										class="focus:outline-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
									/>
									<label
										for="job_exp"
										class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
										>{$t('Level Of Experience')}</label
									>
								</div>
							</div>
							<div class="relative z-0 w-full mb-3 group">
								<input
									type="tel"
									pattern={'[0-9+]{4,16}'}
									name="whatsapp_number"
									id="whatsapp_number"
									class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="whatsapp_number"
									class="capitalize peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>{$t('whatsapp number')}</label
								>
							</div>
							<div class="relative z-0 w-full mb-3 group">
								<label class="block mb-2 font-medium text-sm text-gray-500" for="user_cv"
									>{$t('Attach CV')}</label
								>
								<input
									type="file"
									class="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
									id="user_cv"
								/>
								<div class="mt-1 text-sm text-gray-500">{$t('Make Sure That The CV Is PDF')}</div>
							</div>
						</form>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sm:gap-4">
					<button
						form="join-us-form"
						type="submit"
						class="capitalize text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
						>{$t('submit')}</button
					>
					<button
						type="button"
						class="capitalize mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
						on:click={closeMenu}>{$t('cancel')}</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<Button cusomClass="z-10 capitalize hover:no-underline" on:clicked={toggleMenu}
	>{$t('Join the Software Pioneers')}</Button
>
