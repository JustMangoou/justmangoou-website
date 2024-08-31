<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<section class="flex min-h-screen flex-col">
	<Header></Header>

	<main class="m-auto">
		<slot></slot>
	</main>

	<footer class="flex flex-col items-center justify-center p-2 text-zinc-800">
		<p class="font-bold">© 2024 JustMango</p>
	</footer>
</section>

<style>
	:global(body) {
		background-image: url('/images/background.avif');
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		backdrop-filter: blur(8px) contrast(1.1);
	}
</style>
