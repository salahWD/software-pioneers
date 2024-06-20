import { error } from '@sveltejs/kit';

async function getData(event) {
	const projectsResponse = await event.fetch(event.href + '/projects.json');
	let data = await projectsResponse.json();
	return data;
}

export async function load({ url, params, fetch }) {
	const baseUrl = `${url.protocol}//${url.host}`;
	const data = await getData({ fetch, href: baseUrl });

	if (params && params.project) {
		const projects = data.filter((el) => {
			return el.id == params.project;
		});
		console.log(projects);
		if (projects.length > 0) {
			return projects[0];
		}
	}

	// console.error('no error');
	throw error(404, 'Not found');
}
