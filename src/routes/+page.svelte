<script>
	import PageColor from '$lib/backround.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Bottombar from '../lib/bottombar.svelte';
	import filmImage from '$lib/assets/IMG_7054.jpg';
</script>

<PageColor />
<Navbar />
<Bottombar />
<div class="pages">
	<a href="/film">
		<img class="buttonimg" src="/assets/IMG_7054.jpg" alt="Film" />
		<p class="overlay">Film</p>
	</a>
	<a href="/about">
		<img id="portrait" src="/assets/IMG_7054.jpg" alt="Girl Dad or Hawaii" />
		<p class="overlay1">About</p>
	</a>
	<a href="/compsci">
		<img class="buttonimg" src="/assets/IMG_7054.jpg" alt="Film" />
		<p class="overlay2">Computer <br /> Science</p>
	</a>
</div>

<style>
	.pages {
		position: relative;
		display: flex;
		justify-content: center;
		justify-content: space-around;
		margin-top: 50px;
	}
	.buttonimg {
		border-radius: 10px;
		border: 10px white;
		height: 300px;
		width: auto;
	}
	#portrait {
		border-radius: 20px;
		height: 250px;
		border-width: 30px;
	}
	.overlay {
		font-size: 25px;
		position: relative;
		left: 40%;
		bottom: 50%;
	}
	.overlay1 {
		font-size: 25px;
		position: relative;
		left: 30%;
		bottom: 40%;
	}
	.overlay2 {
		font-size: 25px;
		position: relative;
		left: 5%;
		bottom: 55%;
		text-align: center;
	}
</style>
