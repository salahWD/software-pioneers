<script>
	let email = '';

	function handleSubmit(event) {
		event.preventDefault();
		// Handle subscription logic here
		console.log('Subscribing with email:', email);
		// Reset the email input
		email = '';
	}
</script>

<section class="py-20 pt-0 mt-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<form on:submit={handleSubmit}>
			<div class="bg-pink-500 rounded-2xl p-8 xl:p-11">
				<h2 class="font-manrope text-4xl text-white text-center font-bold mb-4">
					Subscribe to the latest offer
				</h2>
				<p class="text-pink-100 text-center mb-4 md:mb-11 max-lg:max-w-2xl mx-auto">
					Join our community of subscribers and receive regular updates delivered straight to your
					inbox. It's quick, easy, and free
				</p>
				<div
					class="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between"
				>
					<input
						type="email"
						bind:value={email}
						required
						class="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-200 text-gray-100 max-lg:text-center placeholder:text-gray-200 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
						placeholder="Enter your email.."
					/>
					<button
						type="submit"
						class="py-2 px-5 text-sm bg-pink-300 shadow-md rounded-full text-white font-semibold hover:bg-pink-700"
					>
						Subscribe
					</button>
				</div>
			</div>
		</form>
	</div>
</section>
