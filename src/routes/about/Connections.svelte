<script>
	import {
		RedditIcon,
		XTwitterIcon,
		FacebookIcon,
		InstagramIcon,
		TikTokIcon,
		PinterestIcon,
		SpotifyIcon,
		SoundCloudIcon
	} from '$lib/components/Icons';

	let username = 'justmangoou';
	let oldUsername = 'justmangot'; // Use for reddit only
	let spotifyId = 'pdjj0m8thgqufmstx2qohc5sx';
</script>

<div class="p-2">
	<p class="text-2xl font-bold underline">Connections</p>
	<p class="font-meidum text-sm text-gray-600 dark:text-gray-400 italic">
		I uses those apps personally, any work-related please contact through Email/Discord.
	</p>
	<div class="grid auto-rows-auto grid-cols-5 gap-2">
		<a
			class="social-media-btn"
			href="https://reddit.com/u/{oldUsername}"
			target="_blank"
			aria-label="Reddit"
		>
			<RedditIcon class="theme-change-anim" />
		</a>
		<a class="social-media-btn" href="https://x.com/{username}" target="_blank" aria-label="X">
			<XTwitterIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://facebook.com/{username}"
			target="_blank"
			aria-label="Facebook"
		>
			<FacebookIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://instagram.com/{username}"
			target="_blank"
			aria-label="Instagram"
		>
			<InstagramIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://tiktok.com/@{username}"
			target="_blank"
			aria-label="TikTok"
		>
			<TikTokIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://pinterest.com/{username}"
			target="_blank"
			aria-label="Pinterest"
		>
			<PinterestIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://open.spotify.com/user/{spotifyId}"
			target="_blank"
			aria-label="Spotify"
		>
			<SpotifyIcon class="theme-change-anim" />
		</a>
		<a
			class="social-media-btn"
			href="https://soundcloud.com/{username}"
			target="_blank"
			aria-label="Soundcloud"
		>
			<SoundCloudIcon class="theme-change-anim" />
		</a>
	</div>
</div>
