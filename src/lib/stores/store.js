import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const mousePosition = writable({ x: 0, y: 0 });

if (browser) {
	const handler = (e) => {
		mousePosition.set({
			x: e.clientX,
			y: e.clientY
		});
	};

	window.addEventListener('mousemove', handler);
}
