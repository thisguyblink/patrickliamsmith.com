<script>
	const words = ['About Me', 'Photography', 'Film', 'Design', 'Hardware', 'Software', 'Random'];
	function showPage(input) {
		console.log(input);
	}
</script>

<div class="main">
	<div class="sidebar">
		<div class="nav">
			{#each words as word}
				<button onclick={() => showPage(word)}>{word}</button>
			{/each}
		</div>
		<div class="dancingAnimation">

		</div>
	</div>
	<div class="content">

	</div>
</div>

<style lang="css">

	.main {
		display: flex;
		flex-direction: row;
		width: 95vw;
		height: 95vh;
	}
	.sidebar {
		display: flex;
		flex-direction: column;
		width: 20vw;
		height: 100vh;
		border: 2px solid cyan;
	}
	.dancingAnimation {
    width: 20vw;
    height: 30vh;
    border: 2px solid green;
	}
	.content {
		width: 80vw;
		height: 100vh;
    border: 2px solid red;
  }
	.nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20vw;
    height: 70vh;
	}

</style>