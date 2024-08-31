import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import postcss from './postcss.config.js';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			autoInstall: true,
			compiler: 'svelte'
		})
	]
});
