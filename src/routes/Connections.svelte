<script lang="ts">
	import { LinkedinIcon, GithubIcon, LeetCodeIcon, PayPalIcon, DiscordIcon } from '$lib/icons';
	import { Username, copyToClipboard } from '$lib/utils';
</script>

<div class="social-media-container pt-7">
	<a
		class="social-media-btn"
		href="https://linkedin.com/in/{Username}"
		target="_blank"
		aria-label="Linkedin"
	>
		<LinkedinIcon />
	</a>
	<a
		class="social-media-btn"
		href="https://github.com/{Username}"
		target="_blank"
		aria-label="GitHub"
	>
		<GithubIcon />
	</a>
	<a
		class="social-media-btn"
		href="https://leetcode.com/u/{Username}"
		target="_blank"
		aria-label="GitHub"
	>
		<LeetCodeIcon />
	</a>
	<button class="social-media-btn" on:click={() => copyToClipboard(Username)} aria-label="Discord">
		<DiscordIcon />
	</button>
	<a
		class="social-media-btn"
		href="https://paypal.me/{Username}"
		target="_blank"
		aria-label="PayPal"
	>
		<PayPalIcon />
	</a>
</div>
