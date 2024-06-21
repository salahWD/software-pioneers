<script>
	import { t } from '$lib/../i18n';
	import Partner from '$lib/components/Partner.svelte';
	import Map from '$lib/components/Map.svelte';

	let name = '';
	let email = '';
	let message = '';

	const submitForm = async () => {
		const token = '6670867026:AAE7OkxeCq7v4SHrtB442qBfsJfZ-uHLquM';
		const chatId = '5343859364';

		const msg = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

		try {
			const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: msg,
					parse_mode: 'html'
				})
			});

			const res = await response.json();
			if (response.ok) {
				name = '';
				email = '';
				message = '';
				toggleMenu();
			} else {
				alert('Something went wrong!');
			}
		} catch (error) {
			console.error(error);
			alert('Something went wrong!');
		}
	};

	let isShown = false;

	const closeMenu = () => {
		return (isShown = false);
	};
	const toggleMenu = (e) => {
		if (!isShown) {
			contactusOverlay.classList.remove('invisible');
		}
		return (isShown = !isShown);
	};
	const handleTransitionEnd = (e) => {
		if (!isShown) {
			contactusOverlay.classList.add('invisible');
		}
	};
</script>

<div
	class="relative flex justify-center items-center min-h-screen gradient overflow-hidden px-8 sm:px-0 py-36 pb-24"
>
	<div class="track-1">
		<!-- Background Bubbles -->
		<div class="bubble w-24 h-24"></div>
		<div class="bubble w-16 h-16"></div>
		<div class="bubble w-32 h-32"></div>
		<div class="bubble w-28 h-28"></div>
	</div>
	<div class="track-2">
		<!-- Background Bubbles -->
		<div class="bubble w-24 h-24"></div>
		<div class="bubble w-16 h-16"></div>
		<div class="bubble w-32 h-32"></div>
		<div class="bubble w-28 h-28"></div>
	</div>

	<!-- Contact Form -->
	<form
		class="relative w-full max-w-lg p-4 py-8 sm:p-8 bg-white shadow-lg rounded-lg fade-in z-10"
		on:submit|preventDefault={submitForm}
	>
		<h2 class="text-2xl font-semibold text-center text-customBlu-700 mb-6">{$t('Contact Us')}</h2>

		<div class="mb-4">
			<label class="block text-customBlu-700 text-sm font-bold mb-0 sm:mb-2" for="name"
				>{$t('Full Name')}</label
			>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-customBlu-700 leading-tight focus:outline-none focus:shadow-outline"
				id="name"
				type="text"
				bind:value={name}
				required
			/>
		</div>

		<div class="mb-4">
			<label class="block text-customBlu-700 text-sm font-bold mb-0 sm:mb-2" for="email"
				>{$t('Email')}</label
			>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-customBlu-700 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				bind:value={email}
				required
			/>
		</div>

		<div class="mb-6">
			<label class="block text-customBlu-700 text-sm font-bold mb-0 sm:mb-2" for="message"
				>{$t('Message')}</label
			>
			<textarea
				class="shadow appearance-none border rounded w-full py-2 px-3 text-customBlu-700 leading-tight focus:outline-none focus:shadow-outline h-32"
				id="message"
				bind:value={message}
				required
			></textarea>
		</div>

		<div class="flex justify-center">
			<button
				class="bg-customBlu-500 hover:bg-customBlu-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bounce"
				type="submit"
			>
				{$t('Send Message')}
			</button>
		</div>
	</form>
</div>

<div class="container m-auto mt-32">
	<Partner />
</div>

<div class="bg-white py-10">
	<div class="container mx-auto">
		<h1
			class="w-full mt-12 mb-4 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800 capitalize"
		>
			{$t('where are we at')}
		</h1>
		<div class="w-full mb-12">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<Map />
	</div>
</div>

<!-- pop up modal -->
<div
	class="relative z-30 invisible"
	id="contactusOverlay"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		on:transitionend={handleTransitionEnd}
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200
		{isShown ? 'opacity-100' : 'opacity-0 '}"
	></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div
			class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			on:click={closeMenu}
		>
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl
				{isShown
					? 'opacity-100 translate-y-0 sm:scale-100'
					: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
				"
			>
				<!-- Alert Success -->
				<div
					on:click|stopPropagation
					class="bg-green-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg"
				>
					<svg viewBox="0 0 24 24" class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
						<path
							fill="currentColor"
							d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
						>
						</path>
					</svg>
					<span class="text-green-800">{$t('Success! Your Message have been Sent')}.</span>
				</div>
				<!-- End Alert Success -->
			</div>
		</div>
	</div>
</div>

<style>
	/* .bg-customSky {
		background-color: #cddef2;
	} */
	.text-customBlu-700 {
		color: #006c93;
	}
	.bg-customBlu-500 {
		background-color: #0286b7;
	}
	.hover\:bg-customBlu-600:hover {
		background-color: #0178a4;
	}
	.fade-in {
		animation: fadeIn 1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.bounce {
		animation: bounce 0.3s ease-in-out;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	.bubble {
		position: absolute;
		border-radius: 50%;
		background: rgba(4, 90, 121, 0.4);
		animation: rise 8s infinite cubic-bezier(0.36, 0.45, 0.63, 0.53);
		opacity: 0;
	}
	.track-1 .bubble {
		left: 10%;
	}
	.track-1 .bubble:nth-last-of-type(1) {
		animation-delay: 0.7s;
	}
	.track-1 .bubble:nth-last-of-type(2) {
		animation-delay: 1.4s;
	}
	.track-1 .bubble:nth-last-of-type(3) {
		animation-delay: 2s;
	}
	.track-1 .bubble:nth-last-of-type(4) {
		animation-delay: 2.6s;
	}
	.track-1 .bubble:nth-last-of-type(5) {
		animation-delay: 3s;
	}
	.track-2 .bubble {
		left: 70%;
	}
	.track-2 .bubble:nth-last-of-type(1) {
		animation-duration: 7s;
		animation-delay: 2.7s;
	}
	.track-2 .bubble:nth-last-of-type(2) {
		animation-delay: 3.4s;
	}
	.track-2 .bubble:nth-last-of-type(3) {
		animation-delay: 4s;
		animation-duration: 7s;
	}
	.track-2 .bubble:nth-last-of-type(4) {
		animation-delay: 4.6s;
	}
	.track-2 .bubble:nth-last-of-type(5) {
		animation-delay: 5s;
		animation-duration: 7s;
	}

	.bubble:nth-child(2n) {
		background: rgba(135, 206, 235, 0.4);
		animation-duration: 6s;
	}

	@keyframes rise {
		0% {
			opacity: 1;
			bottom: -15%;
			transform: translateX(0);
		}
		50% {
			transform: translateX(10vw);
		}
		100% {
			bottom: 110%;
			transform: translateX(-10vw);
		}
	}
</style>
