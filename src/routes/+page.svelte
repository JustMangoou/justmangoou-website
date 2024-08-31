<script lang="ts">
	import { EmailIcon, SchoolIcon } from '$lib/icons';
	import { copyToClipboard } from '$lib/utils';
	import Connections from './Connections.svelte';

	let workEmail = 'nguyenhoangtuan.work@gmail.com';
	//	let avatarUrl = 'https://avatars.githubusercontent.com/u/38831897';
	let avatarUrl = 'images/fake_avatar.png';
</script>

<svelte:head>
	<title>Home | Tuan Nguyen</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<div class="card-background lg:animate-slide-in-from-bottom">
	<div class="items-center gap-4 lg:flex">
		<img class="m-auto block h-36 w-36 rounded-full" src={avatarUrl} alt="Avatar" />
		<div class="pl-5 pt-2 text-center text-neutral-200 lg:pt-0">
			<p class="text-4xl font-bold lg:text-left">Tuan Nguyen</p>
			<p class="text-xl text-zinc-400 lg:text-left">@justmangoou (JustMango)</p>
			<div class="text-xm pt-3 font-semibold lg:text-left">
				<button class="py-1" on:click={() => copyToClipboard(workEmail)}>
					<EmailIcon class="mr-2 inline" />{workEmail}
				</button>
				<div class="py-1">
					<SchoolIcon class="mr-2 inline" />Robotic Engineering at UET-VNU
				</div>
			</div>
		</div>
	</div>
	<Connections />
</div>
