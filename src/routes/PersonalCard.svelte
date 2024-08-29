<script lang="ts">
	import {
		EmailIcon,
		SchoolIcon,
		LinkedinIcon,
		GithubIcon,
		LeetCodeIcon,
		PayPalIcon,
		DiscordIcon
	} from '$lib/components/Icons';

	let username = 'justmangoou';
	let workEmail = 'nguyenhoangtuan.work@gmail.com';
	//	let avatarUrl = 'https://avatars.githubusercontent.com/u/38831897';
	let avatarUrl = 'images/fake_avatar.png';

	function copyToClipboard(content: string) {
		navigator.clipboard.writeText(content);
	}
</script>

<div class="card-background theme-change-anim">
	<div class="items-center gap-4 lg:flex">
		<img class="m-auto block h-36 w-36 rounded-full" src={avatarUrl} alt="Avatar" />
		<div class="theme-change-anim pl-5 pt-2 text-black dark:text-white lg:pt-0">
			<p class="text-center text-4xl font-bold lg:text-left">Tuan Nguyen</p>
			<p class="text-center text-xl text-zinc-400 lg:text-left">@justmangoou (JustMango)</p>
			<div class="text-xm pt-3 text-center font-semibold lg:text-left">
				<button class="py-1" on:click={() => copyToClipboard(workEmail)}>
					<EmailIcon class="mr-2 inline" />{workEmail}
				</button>
				<div class="py-1">
					<SchoolIcon class="mr-2 inline" />Robotic Engineering at UET-VNU
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-5 gap-2 pt-10">
		<a
			class="social-media-btn"
			href="https://linkedin.com/in/{username}"
			target="_blank"
			aria-label="Linkedin"
		>
			<LinkedinIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://github.com/{username}"
			target="_blank"
			aria-label="GitHub"
		>
			<GithubIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://leetcode.com/u/{username}"
			target="_blank"
			aria-label="GitHub"
		>
			<LeetCodeIcon class="theme-change-anim" />
		</a>
		<button
			class="social-media-btn"
			on:click={() => copyToClipboard(username)}
			aria-label="Discord"
		>
			<DiscordIcon class="theme-change-anim" />
		</button>
		<a
			class="social-media-btn"
			href="https://paypal.me/{username}"
			target="_blank"
			aria-label="PayPal"
		>
			<PayPalIcon class="theme-change-anim" />
		</a>
	</div>
</div>

<style>
</style>
