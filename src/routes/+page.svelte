<script>
	const words = ['A', 'B', 'C', 'D', 'E', 'F'];
</script>

<div class="main-page">
	<div class="circle" style="--total: {words.length}; --radius: 120px;">
		{#each words as word, index}
			<div class="circleObject" style="--i: {index};">
				<p>{word}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.main-page {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	.circle {
		position: relative;
		width: 300px;
		height: 300px;
	}

	.circleObject {
		--angle: calc(360deg / var(--total) * var(--i));
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)
			translate(calc(cos(var(--angle)) * var(--radius)), calc(sin(var(--angle)) * var(--radius)));
		background-color: coral;
		border: solid 2px aqua;
	}

	p {
		margin: 0;
		padding: 0.5rem 0.75rem;
	}
</style>
