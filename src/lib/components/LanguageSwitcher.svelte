<script>
	import { t, locale, locales } from '$lib/../i18n';
	import { clickOutside } from '$lib/actions/clickOutside.d.ts';

	let languages = { ar: 'Arabic', en: 'English' };
	let selectedLanguage = locales.at(0);

	let menuState = false;
	const toggleMenu = () => (menuState = !menuState);

	const onClickOutside = () => {
		menuState = false;
	};

	const selectLanguage = (lang) => {
		selectedLanguage = lang;
		$locale = lang;
		menuState = false;
		// Add your language switching logic here
	};
</script>

<div class="relative inline-block text-start ms-4">
	<div>
		<button
			on:click={toggleMenu}
			type="button"
			class="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-2"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
		>
			{selectedLanguage}
			<svg
				class="-me-1 ms-2 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	<div
		use:clickOutside
		on:clickOutside={onClickOutside}
		class="transform transition-all origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
		class:opacity-100={menuState}
		class:scale-100={menuState}
		class:opacity-0={!menuState}
		class:scale-95={!menuState}
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="menu-button"
		tabindex="-1"
	>
		<div class="py-1" role="none">
			{#each locales as language}
				<a
					href="/"
					class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
					role="menuitem"
					tabindex="-1"
					on:click|preventDefault={() => selectLanguage(language)}
				>
					{languages[language]}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.dropdown-enter-active,
	.dropdown-leave-active {
		transition: opacity 0.2s ease;
	}
	.dropdown-enter, .dropdown-leave-to /* .dropdown-leave-active in <2.1.8 */ {
		opacity: 0;
	}
</style>
