<script>

</script>


<div class="main-page">
		<div class="cirle" style="--total: 6;">
			<div class="circleObject" style="--order: 1;">
				<p>Hello World</p>
			</div>
		</div>
</div>


<style>
	.main-page {
			display: flex;
	}

	.circleObject {
      --angle: calc(360deg / var(--total) * var(--i));
      transform: translate(
              calc(cos(var(--angle)) * var(--radius)),
              calc(sin(var(--angle)) * var(--radius))
      );
	}
	
</style>