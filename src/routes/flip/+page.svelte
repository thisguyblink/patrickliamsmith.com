<script>
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	let mouseX, mouseY;
	let cameraX, cameraY;
	let maxX, maxY;
	let flips;

	let flipperWindow;
	let isInside = false;

	function handleMouseMove(event) {
		const rect = flipperWindow.getBoundingClientRect();
		const x = event.clientX - rect.left; // X relative to div
		const y = event.clientY - rect.top;  // Y relative to div
		mouseX = x;
		mouseY = y;
	}

	function mouseEnter() {
		isInside = true;
	}
	function mouseLeave() {
		isInside = false;
	}

	function calculateCubesToFlip() {
		if (!flipperWindow) return;

		let dimensions = flipperWindow.getBoundingClientRect();
		// console.log( dimensions.right, dimensions.bottom, mouseX, mouseY);
		let normalizedX = (mouseX / dimensions.width) * cameraX;
		let normalizedY =  ( 1- mouseY / dimensions.height) * cameraY;
		let cubePositions = []
		cubePositions.push([Math.floor(normalizedX), Math.floor(normalizedY)]);
		cubePositions.push([Math.ceil(normalizedX), Math.floor(normalizedY)]);
		cubePositions.push([Math.floor(normalizedX), Math.ceil(normalizedY)]);
		cubePositions.push([Math.ceil(normalizedX), Math.ceil(normalizedY)]);
		return cubePositions;
	}

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		const rect = flipperWindow.getBoundingClientRect();
		renderer.setSize(rect.width, rect.height);
		flips.appendChild( renderer.domElement );

		const material = new THREE.MeshBasicMaterial( { vertexColors: true } );
		const geometry = new THREE.BoxGeometry( 1, .1, 1 ).toNonIndexed();
		const positionAttribute = geometry.getAttribute( 'position' );
		const colors = [];
		const color = new THREE.Color();
		const colorBlack = new THREE.Color(0x000000);
		const colorWhite = new THREE.Color(0xffffff);

		for ( let i = 0; i < positionAttribute.count; i += 3 ) {

			color.set( Math.random() * 0xffffff );
			console.log("Position Attribute: ", i);
			if (i <= 15) {
				colors.push(colorWhite.r, colorWhite.g, colorWhite.b);
				colors.push(colorWhite.r, colorWhite.g, colorWhite.b);
				colors.push(colorWhite.r, colorWhite.g, colorWhite.b);
			} else {
				console.log("Color Attribute: ", color.r, color.g, color.b  );
				colors.push( colorBlack.r, colorBlack.g, colorBlack.b);
				colors.push(colorBlack.r, colorBlack.g, colorBlack.b );
				colors.push( colorBlack.r, colorBlack.g, colorBlack.b);
			}
		}
		geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

		camera.position.z = 15;
		const distance = camera.position.z;
		const vFOV = THREE.MathUtils.degToRad(camera.fov);
		let height = 2 * Math.tan(vFOV / 2) * distance;
		let width = ( height * camera.aspect);
		cameraX = width;
		cameraY = height;
		const halfW = width / 2;
		const halfH = height / 2;
		let numCubes = 0;
		let cubes = []
		let cubeRow = []
		console.log("Dimensions: ", width, height);
		for (let col = -halfW; col <= halfW; col++) {
			for (let row = -halfH; row <= halfH; row++) {
				let cube = new THREE.Mesh( geometry, material );
				cube.position.x = col;
				cube.position.y = row;
				scene.add( cube );
				cubeRow.push( cube );
				numCubes++;
			}
			cubes.push([...cubeRow]);
			cubeRow.length = 0;
		}
		console.log("Num of Cubes: ", numCubes);

		function animate() {
			// requestAnimationFrame( animate );
			let cubesToFLip = calculateCubesToFlip();
			// console.log( cubesToFLip );
			const targetRotationX = isInside ? Math.PI / 2 :  - Math.PI/2;
			const normalRotationX =  isInside ?  - Math.PI / 2 :   - Math.PI/2;

			for (let row = 0; row < cubes.length; row++) {
				for (let col = 0; col < cubes[row].length; col++) {
					const shouldFlip = cubesToFLip.some(([r, c]) => r === row && c === col);

					if (shouldFlip) {
						cubes[row][col].rotation.x += (targetRotationX - cubes[row][col].rotation.x) * 0.2;
					} else {
						cubes[row][col].rotation.x += (normalRotationX - cubes[row][col].rotation.x) * 0.02;
					}

				}
			}


			renderer.render( scene, camera );
		}
		renderer.setAnimationLoop( animate );

	})
</script>

<div class="main">
	<p>Mouse X: {mouseX}</p>
	<p>Mouse Y: {mouseY}</p>
	{#if isInside}
		<p>You are hovering over me!</p>
	{:else}
		<p>Hover here</p>
	{/if}
	<div bind:this={flipperWindow} on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} on:mousemove={handleMouseMove} class="flipperBox">
		<div class="flipper" bind:this={flips}></div>
	</div>

</div>

<style>
		.main {
				display: flex;
				flex-direction: column;
				align-items: center;
		}
		.flipperBox{
				display: flex;
				justify-content: center;
				position: relative;
				width: 100%;
				max-width: 1400px;
        aspect-ratio: 16 / 9;
				border: 5px solid red;
		}
	.flipper {
			border: 5px solid green;
	}
</style>