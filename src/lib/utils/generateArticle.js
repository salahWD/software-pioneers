import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

export async function generateArticle(resourceArticle, title, prompt) {
	try {
		const safetySettings = [
			{
				category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
				threshold: HarmBlockThreshold.BLOCK_NONE
			},
			{
				category: HarmCategory.HARM_CATEGORY_HARASSMENT,
				threshold: HarmBlockThreshold.BLOCK_NONE
			},
			{
				category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
				threshold: HarmBlockThreshold.BLOCK_NONE
			}
		];
		const genAI = new GoogleGenerativeAI('AIzaSyC1snVw3NwNgkYDIW6d-Eg0I0cPtBIFfdE');
		const model = genAI.getGenerativeModel({ model: 'gemini-pro', safetySettings });
		const prompts = `
I want you to help me write an article in the Arabic language.
    Conditions:
        1- The article must be consistent with the title it is written about.
        2- The article must be tow or more pages long.
        3- The article must follow the principles of Arabic grammar and rules.
        4- The article should be comprehensive in content and clear in concept in a way that suits readers.
        5- I also want to apply this ${prompt} to write the article.

    Input:
        1- Title for article: ${title}.
        2- Information for article:${JSON.stringify(resourceArticle).substring(0, 29_000)}.
`;
		console.log(`\n\n====GoogleGenerativeAI/prompts\n${JSON.stringify(prompts)}\n=====\n\n`);
		const result = await model.generateContent(prompts);
		console.log(`\n\n====GoogleGenerativeAI/generateContent\n${JSON.stringify(result)}\n=====\n\n`);
		const response = await result.response;
		const text = await response.text();

		return {
			data: text,
			error: null
		};
	} catch (error) {
		return {
			data: null,
			error: error
		};
	}
}
