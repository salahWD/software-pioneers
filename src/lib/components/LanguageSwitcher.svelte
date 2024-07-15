<script>
	import { t, locale, locales } from '$lib/../i18n';

	let languages = { ar: 'Arabic', en: 'English' };
	let selectedLanguageIndex = 0;

	let selectedLanguage = locales.at(selectedLanguageIndex);
	let unselectedLanguage = locales.at(++selectedLanguageIndex % Object.keys(languages).length);

	const selectLanguage = (lang) => {
		selectedLanguage = lang;
		selectedLanguageIndex = ++selectedLanguageIndex % Object.keys(languages).length;
		unselectedLanguage = locales.at(selectedLanguageIndex);
		$locale = lang;
	};
</script>

<a
	href="/"
	class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
	role="menuitem"
	tabindex="-1"
	on:click|preventDefault={() => selectLanguage(unselectedLanguage)}
>
	{$t(languages[unselectedLanguage])}
</a>

<style>
</style>
