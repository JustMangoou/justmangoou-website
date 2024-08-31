<script lang="ts">
	import { CardAccountIcon, CircleUserIcon, DicesIcon } from '$lib/icons';
	import { page } from '$app/stores';
</script>

<header class="theme-change-anim text-sm text-black">
	<nav>
		<ul class="relative flex h-8 items-center justify-center gap-4">
			<li>
				<a href="/" aria-label="Home">
					<CardAccountIcon />
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" aria-label="About">
					<CircleUserIcon />
				</a>
			</li>
			<!--<li aria-current={$page.url.pathname.startsWith('/games') ? 'page' : undefined}>-->
			<!--	<a href="/games" aria-label="Games">-->
			<!--		<DicesIcon />-->
			<!--	</a>-->
			<!--</li>-->
		</ul>
	</nav>
</header>
