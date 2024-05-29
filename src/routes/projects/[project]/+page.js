import { error } from '@sveltejs/kit';

async function getData(event) {
	const projectsResponse = await event.fetch('http://localhost:5173/projects.json');
	let data = await projectsResponse.json();
	return data;
}

export async function load({ params, fetch }) {
	const data = await getData({ fetch });

	if (params && params.project) {
		const projects = data.filter((el) => {
			return el.id == params.project;
		});
		if (projects.length > 0) {
			return projects[0];
		}
	}

	// console.error('no error');
	throw error(404, 'Not found');
}

// import { error } from '@sveltejs/kit';

// async function getData() {
// 	let projectsResponse = await fetch('/projects.json');
// 	return await projectsResponse.json();
// }

// const data = [
// 	{
// 		id: 1,
// 		title: 'Project one',
// 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officiis eius totam?'
// 	},
// 	{
// 		id: 2,
// 		title: 'Project two',
// 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officiis eius totam?'
// 	},
// 	{
// 		id: 3,
// 		title: 'Project three',
// 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officiis eius totam?'
// 	},
// 	{
// 		id: 4,
// 		title: 'Project four',
// 		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officiis eius totam?'
// 	}
// ];

// export async function load({ params }) {
// 	let data = getData();

// 	if (params && params.project) {
// 		let projects = data.filter((el) => {
// 			return el.id == params.project;
// 		});
// 		if (projects.length > 0) {
// 			return projects[0];
// 		}
// 	}

// 	error(404, 'Not found');
// }
