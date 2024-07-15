<script>
	import { t } from '$lib/../i18n';
	import Button from '$lib/components/common/Button.svelte';
	import HeroSection from '$lib/pages/about/HeroSection.svelte';
	import { onMount } from 'svelte';

	let elkatibProjects = [];

	onMount(async () => {
		const response = await fetch('/elkatib-projects.json');
		elkatibProjects = await response.json();
	});

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
		class="fixed inset-0 bg-gray-200 bg-opacity-80 transition-opacity ease-in duration-200
		{isShown ? 'opacity-100' : 'opacity-0 '}"
	></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div class="container m-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-5xl h-[calc(100vh-4rem)] {isShown
						? 'opacity-100 translate-y-0 sm:scale-100'
						: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
					"
				>
					<div class="bg-gray-100 px-6 pb-4 pt-6 h-full flex flex-col overflow-scroll">
						<div class="flex gap-4 mb-4">
							<h2
								class="mx-auto text-2xl font-bold font-dm leading-tight text-center text-customBlue-950 capitalize"
							>
								{$t('Create Your First Article, Try Now !')}
							</h2>
							<button class="inline-block text-gray-500" on:click={closeMenu}>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
										fill="currentColor"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</div>
						<div
							class="mt-3 text-start bg-white rounded-md px-6 py-8 flex flex-col md:flex-row justify-between flex-grow"
						>
							<form
								class="w-full md:w-1/2 flex flex-col gap-5"
								id="create-article-form"
								enctype="multipart/form-data"
							>
								<div>
									<input
										type="text"
										id="title"
										class="focus:outline-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										placeholder="Article Title"
										required
									/>
								</div>
								<div class="flex-grow">
									<textarea
										placeholder="Promot Ai With The Thing You Want It To Apply For Formulate In The Article"
										id="promot"
										class="h-full focus:outline-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										required
									></textarea>
								</div>
								<div class="flex-grow">
									<textarea
										placeholder="Enter A Text Or A Link To Qoute The Article From"
										id="textorurl"
										class="h-full focus:outline-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										required
									></textarea>
								</div>

								<button
									form="create-article-form"
									class="capitalize text-white opacity-90 bg-customBlue-950 hover:opacity-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
									type="submit">{$t('submit')}</button
								>
							</form>
							<div class="m-0 md:ms-4 rounded-md bg-gray-100 mt-5 w-full md:mt-0 md:w-2/5 p-4">
								<h1 class="text-lg text-customDark font-bold mb-2">Recent Articles</h1>
								<ul class="list-none p-0 font-dm">
									<li class="mb-3 flex gap-2 items-center">
										<div class="rounded-full aspect-square bg-customBlue-950 w-2 h-2 ms-3"></div>
										<div>
											<h3 class="font-medium text-sm mb-0 text-customDark">UI Design</h3>
											<p class="text-xs text-gray-400">2 Days Ago</p>
										</div>
									</li>
									<li class="mb-3 flex gap-2 items-center">
										<div class="rounded-full aspect-square bg-customBlue-950 w-2 h-2 ms-3"></div>
										<div>
											<h3 class="font-medium text-sm mb-0 text-customDark">UI Design</h3>
											<p class="text-xs text-gray-400">2 Days Ago</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<HeroSection>
	<p class="max-w-md mx-auto text-center font-normal text-gray-100 text-base mb-9">
		<a href="/" class="opacity-70">Home</a><span class="mx-2">&gt;</span><a href="/shop">Shop</a>
	</p>
	<h1 class="capitalize mx-auto text-center font-medium text-4xl text-white mb-5 md:text-5xl">
		{$t('Shop')}
	</h1>
</HeroSection>

<section class="text-customDark font-dm">
	<div class="container m-auto text-center py-12">
		<h1 class="font-bold text-3xl m-auto mb-4 max-w-md">
			{$t('Our solutions in digital innovation')}
		</h1>
		<p class="max-w-2xl m-auto font-normal leading-7 text-xl">
			{$t(
				'Distinguish yourself by choosing one of our innovative digital solutions to help you grow and develop your business'
			)}
		</p>
	</div>
</section>

<div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 body">
	<div class="relative">
		<div
			class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
		>
			<div class="mt-12 sm:mt-16 lg:mt-0">
				<div
					class="min-w-52 w-1/2 m-auto mb-10 lg:mb-0 lg:w-full lg:pr-6 lg:relative lg:m-0 lg:h-full lg:px-0"
				>
					<img
						alt="Inbox user interface"
						loading="lazy"
						width="647"
						height="486"
						class="max-h-full object-cover w-full rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute shadow-xl lg:right-0 bg-gray-50"
						style="color:transparent"
						src="/featured_pictures.png"
					/>
				</div>
			</div>
			<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-20 lg:px-0 font-dm">
				<div>
					<div class="mt-6">
						<h2 class="text-3xl font-bold tracking-tight text-customBlue-950">
							{$t('ELKATEB Platform')}
						</h2>
						<p class="mt-4 text-lg text-gray-300">
							{$t(
								'use The Writer plugin and service for free, it helps you write articles and speed up the process by using Ai technology, more about that on the plugins page'
							)}.
						</p>
						<div class="mt-6">
							<a href="https://elkateb.shawerr.com/" target="_blank" class="me-5">
								<button
									class="px-8 rounded-md text-white bg-customBlue-950 font-dm font-bold my-5 py-2 shadow-lg focus:outline-none focus:shadow-outline transform duration-300 hover:scale-105 ease-in-out"
								>
									{$t('Explore')}
								</button>
							</a>
							<button
								on:click={toggleMenu}
								class="px-8 rounded-md text-white bg-customSky-950 font-dm font-bold my-5 py-2 shadow-lg focus:outline-none focus:shadow-outline transform duration-300 hover:scale-105 ease-in-out"
							>
								{$t('Try Now')}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-gray-900 {
		background-color: white;
	}
	.body .text-gray-300 {
		color: rgb(107 114 128 / 1);
	}
</style>
