import { createClient } from '@supabase/supabase-js';

import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const requestData = await request.json();

	console.log(JSON.stringify(requestData));

	const supabase = createClient(
		'https://cpvrtgnouxfkdgvtwimh.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdnJ0Z25vdXhma2RndnR3aW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxOTA1NzIsImV4cCI6MjAxOTc2NjU3Mn0.gIsm-u5-E607peti5Ca_yYq0mRiDG1RbvxxffMkAFb4'
	);

	const { data, error } = await supabase.from('blog_article').insert(requestData).select();
	console.log(JSON.stringify(error), JSON.stringify(data));

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json({ data: data });
}
