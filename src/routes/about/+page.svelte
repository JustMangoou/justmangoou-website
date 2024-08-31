<script>
	import Connections from './Connections.svelte';
	import Terminal from './Terminal.svelte';
</script>

<svelte:head>
	<title>About | Tuan Nguyen</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="card-background lg:animate-slide-in-from-bottom">
	<Terminal />
	<div class="p-2">
		<p class="text-2xl font-bold underline">Educations</p>
		<div>
			<p class="font-medium py-0.5">VNU UNIVERSITY OF ENGINEERING AND TECHNOLOGY</p>
			<p>AB in Robotic Engineering.</p>
		</div>
	</div>
	<div class="p-2">
		<p class="text-2xl font-bold underline">Certifications</p>
		<ul>
			<li><span class="italic">None :(</span></li>
		</ul>
	</div>
	<div class="p-2">
		<p class="text-2xl font-bold underline">Skills & Projects</p>
		<ul>
			<li class="py-0.5"><span class="font-bold">Programming: </span>Java, Rust, Go</li>
			<li class="py-0.5">
				<span class="font-bold">Language: </span>Vietnamese (Native), English (Fluent), Japanese
				(Beginner)
			</li>
		</ul>
	</div>
	<Connections />
</div>
