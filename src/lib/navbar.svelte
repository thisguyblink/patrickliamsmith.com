<script>
</script>

<div class="nav">
	<img class="logo" src="/assets/IMG_7054.jpg" alt="Not found" />
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
		border: 2px solid orange;
		background-color: black;
	}
	.logo {
		height: 40px;
		width: auto;
		padding: 25px;
		border: 2px solid orange;
	}
	.menu {
		margin-top: 15px;
		display: flex;
		width: auto;
		height: 50%;
		justify-content: space-around;
		border: 2px solid orange;
	}
	#name {
		font-size: 45px;
		color: white;
		border: 2px solid orange;
	}
	.pages {
		width: auto;
		height: 50%;
		border: 2px solid pink;
		padding-left: 10px;
		padding-right: 10px;
	}
	.pages a {
		color: white;
		text-decoration: none;
	}
	.pages a:hover {
		text-decoration: bold; /* Add underline on hover */
		color: blue;
		font-size: 22px;
	}
</style>
