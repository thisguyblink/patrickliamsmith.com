<script>
	const words = ['Photography', 'Film', 'Design', 'Hardware', 'Software', 'Random'];
</script>

<div class="main-page">
	<div class="circle" style="--total: {words.length}; --radius: 8em;">
		{#each words as word, index}
			<div class="circleObject" style="--i: {index};">
				<p>{word}</p>
			</div>
		{/each}
	</div>

	<div class="colorCircle"></div>
</div>

<style>
	.main-page {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	.circle {
			z-index: 1;
		position: relative;
		width: 300px;
		height: 300px;
	}

  .circleObject {
      --angle: calc(360deg / var(--total) * var(--i));
      position: absolute;
      top: 50%;
      left: 50%;
      translate:
              calc(-50% + cos(var(--angle)) * var(--radius))
              calc(-50% + sin(var(--angle)) * var(--radius));
      background-color: coral;
      border: solid 2px aqua;
      transition: scale 0.3s ease;
  }

  .circleObject:hover {
      scale: 1.4;
  }

  .colorCircle {
			display: flex;
			align-items: center;
			justify-content: center;
      position: absolute;
			z-index: 0;
      width: 30em;
      height: 30em;
      border-radius: 50%;
      background: conic-gradient(
              #ff595e 0% 16.66%,
              #ffca3a 16.66% 33.32%,
              #8ac926 33.32% 50%,
              #ff595e 50% 66.66%,
              #ffca3a 66.66% 83.32%,
              #1982c4 83.32% 100%
      );
  }

	p {
		margin: 0;
		padding: 0.5rem 0.75rem;
	}
</style>
