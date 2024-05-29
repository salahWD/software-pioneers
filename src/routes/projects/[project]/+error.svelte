<script>
	import { page } from '$app/stores';
</script>

<!-- <h1>{$page.status}: {$page.error.message}</h1> -->

<section class="bg-white h-screen flex items-center justify-center">
	<div class="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<p class="title mb-4 tracking-tight font-bold text-gray-900">
				{$page.status}
			</p>
			<p class="error font-light text-gray-500">
				{$page.error.message}
			</p>
			<a
				href="/"
				class="btn inline-flex text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-pink-900 my-4"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 180px;
		height: calc(100dvh - 180px);
	}
	.title {
		font-size: 9rem;
		line-height: 1;
	}
	.error {
		font-size: 2rem;
		margin: 0;
		line-height: 1;
	}
	.btn {
		font-size: 1rem;
		line-height: 1;
	}
</style>
