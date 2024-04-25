<script>
	import PageColor from '$lib/backround.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Bottombar from '../lib/bottombar.svelte';
</script>

<PageColor />
<Navbar />
<Bottombar />
<div class="pages">
	<div id="cs"></div>
	<div id="film"></div>
</div>

<style>
	.pages {
		display: flex;
		width: 100%;
		height: 600px;
		max-height: 1000px;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	#cs {
		width: 40%;
		background-color: red;
	}

	#film {
		width: 40%;
		background-color: blue;
	}
</style>
