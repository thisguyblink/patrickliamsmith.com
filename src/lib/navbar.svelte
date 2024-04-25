<script>
</script>

<div class="nav">
	<img class="logo" src="/assets/PS.png" alt="Not found" />
	<h1 id="name">PATRICK SMITH</h1>
	<div class="menu">
		<div class="pages">
			<a href="/compsci">
				<h3>tech(cs)</h3>
			</a>
		</div>
		<div class="pages">
			<a href="/film">
				<h3>film</h3>
			</a>
		</div>
		<div class="pages">
			<a href="/about">
				<h3>about</h3>
			</a>
		</div>
	</div>
</div>

<style>
	.nav {
		display: flex;
		justify-content: center;
		justify-content: space-around;
		font-size: 20px;
		background-color: #9197ae;
		padding: 20px;
		background-color: #1d2a34;
	}
	.logo {
		height: 40px;
		width: auto;
		padding: 25px;
		margin-top: 10px;
	}
	.menu {
		margin-top: 15px;
		display: flex;
		width: auto;
		height: 50%;
		justify-content: space-around;
	}
	#name {
		font-size: 45px;
		color: white;
	}
	.pages {
		width: auto;
		height: 50%;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: -5px;
		padding-bottom: -5px;
		color: white;
	}
	.pages a {
		text-decoration: none;
		color: white;
	}
	.pages:hover {
		text-decoration: bold; /* Add underline on hover */
		color: black;
		background-color: white;
	}
	.pages a:hover {
		color: black;
	}
</style>
