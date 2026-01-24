<script>
	let width = 40;
	let height = 20;
	let values = [];

	for (let row = 0; row < height; row++) {
		let rowArr = [];
		for (let col = 0; col < width; col++) {
			rowArr.push(0);
		}
		values.push(rowArr);
	}

	function toggleSquare(row, col) {
		values[row][col] = values[row][col] === 0 ? 1 : 0;
	}

	async function exportToClipboard() {
		const data = JSON.stringify(values);
		await navigator.clipboard.writeText(data);
		alert("Copied to clipboard!");
	}
</script>

<div class="main">
	{#each values as row, rowIndex}
		<div class="row">
			{#each row as value, colIndex}
				<div
					class="square"
					class:value-white={value === 1}
					on:click={() => toggleSquare(rowIndex, colIndex)}
				></div>
			{/each}
		</div>
	{/each}
	<button on:click={exportToClipboard}>Copy to Clipboard</button>
</div>

<style>
    .main {
        display: inline-block;
    }

    .row {
        display: flex;
    }

    .square {
        width: 20px;
        height: 20px;
        border: 1px solid #444;
        background: black;
    }

    .square.value-white {
        background: white;
    }
</style>
