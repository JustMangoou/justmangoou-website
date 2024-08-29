<script>
	import {
		CPUIcon,
		RAMIcon,
		GPUIcon,
		HDDIcon,
		PSUIcon,
		PCCaseIcon,
		MonitorIcon,
		KeyboardIcon,
		PCMouseIcon,
		GameControllerIcon,
		DigitalTabletIcon,
		HeadphonesIcon,
		MicrophoneIcon
	} from '$lib/components/Icons';
</script>

<svelte:head>
	<title>Games | Tuan Nguyen</title>
	<meta name="description" content="My Game Settings and Statistics" />
</svelte:head>

<div class="rounded-3xl bg-white/30 p-10 transition delay-200 ease-linear dark:bg-black/50">
	<p class="text-3xl font-bold underline decoration-zinc-600">PC</p>
	<div class="inline flex flex-col flex-wrap">
		<span><CPUIcon class="inline pr-1" />Intel I5-11400 (MSI H510m PRO) </span>
		<span>
			<RAMIcon class="inline pr-1" />Corsair Vengeance LPX 16GB 3200MHz DDR4 (Used to be 32gb)
		</span>
		<span><GPUIcon class="inline pr-1" />Gigabyte GeForce RTX 3080 GAMING OC 10G</span>
		<span><HDDIcon class="inline pr-1" />Samsung Gen 4 980 Pro 500GB NVMe</span>
		<span><PSUIcon class="inline pr-1" />Corsair RM850x Shift 850W</span>
		<span><PCCaseIcon class="inline pr-1" />NZXT H5 Flow</span>
		<p class="text-3xl font-bold underline decoration-zinc-600">Gears</p>
		<span><MonitorIcon class="inline pr-1" />AOC Q27G2S 27" IPS 2K 165Hz</span>
		<span><MonitorIcon class="inline pr-1" />AOC CQ27G2 27" VA 2K 144Hz</span>
		<span><KeyboardIcon class="inline pr-1" />Keychrone K2 Pro</span>
		<span>
			<PCMouseIcon class="inline pr-1" />Logitech G Pro X Superlight Black
		</span>
		<span>
			<GameControllerIcon class="inline pr-1" />Xbox One X Carbon Black
		</span>
		<span><DigitalTabletIcon class="inline pr-1" />Wacom CTL-472</span>
		<span><HeadphonesIcon class="inline pr-1" />Sony WH-XB700</span>
		<span><MicrophoneIcon class="inline pr-1" />HyperX SoloCast</span>
	</div>
</div>

<!--<div class="items-center justify-center">-->
<!--	<div class="grid grid-cols-4 items-center gap-4">-->
<!--		<div-->
<!--			class="mb-2 me-2 w-24 rounded-lg px-1 hover:bg-gray-100-->
<!--			hover:text-blue-700 focus:z-10 focus:outline-none dark:bg-zinc-800-->
<!--			dark:text-gray-200 dark:hover:bg-zinc-900 dark:hover:text-white-->
<!--			"-->
<!--		>-->
<!--			<img src="https://osu.ppy.sh/assets/images/osu-lazer-logo-white.62cae952.svg" alt="osu!" />-->
<!--		</div>-->
<!--		<div-->
<!--			class="mb-2 me-2 w-24 rounded-lg px-1 hover:bg-gray-100-->
<!--			hover:text-blue-700 focus:z-10 focus:outline-none dark:bg-zinc-800-->
<!--			dark:text-gray-200 dark:hover:bg-zinc-900 dark:hover:text-white-->
<!--			"-->
<!--		>-->
<!--			<img src={cs2Logo} alt="osu!" />-->
<!--		</div>-->
<!--		<div-->
<!--			class="mb-2 me-2 w-24 rounded-lg px-1 hover:bg-gray-100-->
<!--			hover:text-blue-700 focus:z-10 focus:outline-none dark:bg-zinc-800-->
<!--			dark:text-gray-200 dark:hover:bg-zinc-900 dark:hover:text-white-->
<!--			"-->
<!--		>-->
<!--			<img src={valorantLogo} alt="osu!" />-->
<!--		</div>-->
<!--		<div>4</div>-->
<!--	</div>-->
<!--</div>-->
