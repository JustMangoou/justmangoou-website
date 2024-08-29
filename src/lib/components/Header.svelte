<script lang="ts">
	import { CardAccountIcon, CircleUserIcon, DicesIcon, SunIcon, MoonIcon } from './Icons';

	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		return darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<header class="theme-change-anim dark:text-black">
	<nav class="">
		<ul class="relative flex h-8 items-center justify-center gap-4 text-sm">
			<li class="relative h-full" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="flex h-full items-center" href="/" aria-label="Home">
					<CardAccountIcon />
				</a>
			</li>
			<li
				class="relative h-full"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				<a class="flex h-full items-center" href="/about" aria-label="About">
					<CircleUserIcon />
				</a>
			</li>
			<li
				class="relative h-full"
				aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}
			>
				<a class="flex h-full items-center" href="/games" aria-label="Games">
					<DicesIcon />
				</a>
			</li>
			<li class="relative h-full">
				<button
					class="flex h-full items-center transition-transform"
					on:click={() => handleSwitchDarkMode()}
				>
					<SunIcon class="dark:hidden" />
					<MoonIcon class="fa-fw hidden dark:inline-block dark:text-black" />
					<span class="sr-only">Switch to light / dark version</span>
				</button>
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
