import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import axios from 'axios';

const compressText = (inputText) => {
	const cleanedText = inputText.replace(/\s+/g, ' ').replace(/\n+/g, ' ').trim();
	return cleanedText;
};

export async function extractTextFromUrl(url) {
	try {
		const response = await axios.get(url);
		const dom = new JSDOM(response.data, { url });
		const reader = new Readability(dom.window.document);
		const article = reader.parse();
		return article ? compressText(article.textContent) : null;
	} catch (error) {
		console.error('Error extracting text:', error);
		return null;
	}
}
