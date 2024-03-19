<script>
	import logo from '$lib/assets/IMG_7054.jpg';
</script>

<div id="nav">
	<img id="logo" src={logo} alt="Not found" />
	<h1 id="name">Patrick Smith</h1>
	<img id="logo" src={logo} alt="Not found" />
</div>

<style>
	#nav {
		display: flex;
		justify-content: center;
		justify-content: space-around;
		font-size: 20px;
		background-color: blue;
		color: white;
		padding: 20px;
	}
	#logo {
		height: 40px;
		width: auto;
		padding: 25px;
	}
</style>
