<script>
	import { onMount } from "svelte";
	let scrollY = 0;
	let frameIndex = 0;


	let frames2 = [];
	for (let i = 1; i <= 90; i++) {
		const num = String(i).padStart(4, "0");
		frames2.push(`/assets/moonAnimation/${num}.jpg`);
	}
	$: frameIndex = Math.floor(scrollY / ( pixelHeight / frames2.length));
	let pixelHeight = 0;
	onMount(() => {
		pixelHeight = window.innerHeight;
	});

</script>

<svelte:window bind:scrollY={scrollY} />

<div class="main">
	<p class="text">Frame Index: {frameIndex}</p>
	<img class="moon" src={frames2[frameIndex]} alt="moon" />
</div>

<style>
	.main {
			height: 200vh;
      scroll-behavior: smooth;
	}
	.text {
			position: fixed;
			z-index: 1;
	}
	.moon {
			position: fixed;
	}

</style>
