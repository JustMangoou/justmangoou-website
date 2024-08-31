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
	} from '$lib/icons';
	import { Username, OldUsername, SpotifyID } from '$lib/utils';
</script>

<div class="p-2">
	<p class="text-2xl font-bold underline">Connections</p>
	<p class="font-meidum text-sm italic text-zinc-500">
		I uses those apps personally, any work-related please contact through Email/Discord.
	</p>
	<div class="social-media-container">
		<a
			class="social-media-btn"
			href="https://reddit.com/u/{OldUsername}"
			target="_blank"
			aria-label="Reddit"
		>
			<RedditIcon />
		</a>
		<a class="social-media-btn" href="https://x.com/{Username}" target="_blank" aria-label="X">
			<XTwitterIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://facebook.com/{Username}"
			target="_blank"
			aria-label="Facebook"
		>
			<FacebookIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://instagram.com/{Username}"
			target="_blank"
			aria-label="Instagram"
		>
			<InstagramIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://tiktok.com/@{Username}"
			target="_blank"
			aria-label="TikTok"
		>
			<TikTokIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://pinterest.com/{Username}"
			target="_blank"
			aria-label="Pinterest"
		>
			<PinterestIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://open.spotify.com/user/{SpotifyID}"
			target="_blank"
			aria-label="Spotify"
		>
			<SpotifyIcon />
		</a>
		<a
			class="social-media-btn"
			href="https://soundcloud.com/{Username}"
			target="_blank"
			aria-label="SoundCloud"
		>
			<SoundCloudIcon />
		</a>
	</div>
</div>
