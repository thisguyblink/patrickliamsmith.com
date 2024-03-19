<script>
	import PageColor from '$lib/backround.svelte';
	import Navbar from '$lib/navbar.svelte';
	import filmImage from '$lib/assets/IMG_7054.jpg';
</script>

<PageColor />
<Navbar />
<div id="pages">
	<a href="/film">
		<img class="buttonimg" src={filmImage} alt="Film" />
		<div class="overlay1">Film</div>
	</a>
	<a href="/about">
		<img id="portrait" src={filmImage} alt="Girl Dad or Hawaii" />
	</a>
	<a href="/compsci">
		<img class="buttonimg" src={filmImage} alt="Film" />
		<div class="overlay2">Computer Science</div>
	</a>
</div>

<style>
	#pages {
		position: relative;
		display: flex;
		justify-content: center;
		justify-content: space-around;
		margin-top: 50px;
	}
	.buttonimg {
		height: 300px;
		width: auto;
	}
	#portrait {
		height: 250px;
	}
	.overlay1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
