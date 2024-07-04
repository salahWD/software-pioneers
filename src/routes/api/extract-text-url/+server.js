import { extractTextFromUrl } from '$lib/utils/readability';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const { searchParams } = new URL(url);
	const pageUrl = searchParams.get('url');

	console.log(pageUrl);
	if (!pageUrl) {
		return {
			status: 400,
			body: { error: 'URL parameter is required' }
		};
	}

	const text = await extractTextFromUrl(pageUrl);
	console.log(pageUrl);
	console.log(text);
	return json({ text: text });
}
