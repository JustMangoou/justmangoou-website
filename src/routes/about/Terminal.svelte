<script lang="ts">
	import { CircleIcon } from '$lib/icons';
	import { onMount } from 'svelte';

	class Instruction {
		command: string;
		output: string | undefined;

		index: number;
		typed: string;

		constructor(command: string, output: string | undefined) {
			this.command = command;
			this.output = output;

			this.index = 0;
			this.typed = '';
		}
	}

	const instructions: Instruction[] = [
		new Instruction('cd ./earth', undefined),
		new Instruction('git pull', 'Already up to date.'),
		new Instruction(
			'cat tuan_nguyen.json',
			'{\n"full_name": "Nguyen Hoang Tuan",\n"birth": "March 2006 (Hanoi, Vietnam)",\n"fav_color": "#00FFAE"\n"fav_env": "🌧Rainy | ❄Winter"\n}'
		)
	];

	let index = 0;
	let current: Instruction;
	let lines: Instruction[] = [];

	onMount(() => next());

	function next() {
		if (index >= instructions.length) return;

		current = { ...instructions[index] };
		current.typed = '';
		current.index = 0;

		type();
	}

	function type() {
		const char = current.command[current.index];

		current = { ...current, typed: current.typed + char };
		current.index += 1;

		if (current.index < current.command.length) {
			setTimeout(type, 69);
		} else {
			setTimeout(transition, 690);
		}
	}

	function transition() {
		index += 1;
		lines = [...lines, current];
		current.typed = '';

		setTimeout(next, 690);
	}
</script>

<div
	class="relative m-2 h-[25em] rounded-xl bg-black/50 p-4 font-mono text-lg text-white sm:h-[18em] sm:w-[25em] sm:text-xl"
>
	<div class="mb-4">
		<div class="flex gap-1 text-sm">
			<CircleIcon class="text-red-500" />
			<CircleIcon class="text-yellow-500" />
			<CircleIcon class="text-green-500" />
		</div>
	</div>

	{#each lines as line}
		<p class="m-[2]">
			<span class="font-bold text-[#27c93f]">&gt;</span>
			{line.command}
		</p>

		{#if line.output}
			<p class="font-normal">
				{#each line.output.split('\n') as outputLine}
					{outputLine}<br />
				{/each}
			</p>
		{/if}
	{/each}

	{#if current}
		<p class="m-[2]">
			<span class="font-bold text-[#27c93f]">&gt;</span>
			{current.typed}
		</p>
	{/if}
</div>
