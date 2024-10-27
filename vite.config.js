import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		sourcemap: false,
	},
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'inline',
			workbox: {
				cleanupOutdatedCaches: true,
				skipWaiting: true,
				clientsClaim: true,
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
			manifest: {
				name: 'FastChat',
				short_name: 'FastChat',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				orientation: 'portrait',
				display: 'standalone',
				icons: [
					{
						src: './assets/apple-touch-icon.png',
						size: '180x180',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-36x36.png',
						sizes: '36x36',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-48x48.png',
						sizes: '48x48',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-72x72.png',
						sizes: '72x72',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-96x96.png',
						sizes: '96x96',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-144x144.png',
						sizes: '144x144',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-256x256.png',
						sizes: '256x256',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-384x384.png',
						sizes: '384x384',
						type: 'image/png',
					},
					{
						src: './assets/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
				related_applications: [
					{
						platform: 'web',
					},
				],
			},
		}),
	],
});
