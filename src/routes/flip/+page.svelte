<script>
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	let mouseX, mouseY;
	let cameraX, cameraY;
	let flips;

	let flipperWindow;
	let isInside = false;
	let initialsMap = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

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
		if (!flipperWindow) return [];

		let dimensions = flipperWindow.getBoundingClientRect();
		let normalizedX = (mouseX / dimensions.width) * cameraX;
		let normalizedY =  ( mouseY / dimensions.height) * cameraY;
		let cubePositions = []
		cubePositions.push([Math.floor(normalizedY), Math.floor(normalizedX)]);
		cubePositions.push([Math.ceil(normalizedY), Math.floor(normalizedX)]);
		cubePositions.push([Math.floor(normalizedY), Math.ceil(normalizedX)]);
		cubePositions.push([Math.ceil(normalizedY), Math.ceil(normalizedX)]);
		// console.log(cubePositions);
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
		const colorsAlt = [];
		const colorAlt = new THREE.Color(0x7C9EB2);
		const colorBlack = new THREE.Color(0x000000);
		const colorWhite = new THREE.Color(0xffffff);
		for ( let i = 0; i < positionAttribute.count; i += 3 ) {
			if (i <= 15) {
				for ( let i = 0; i < 3; i++) {
					colors.push(colorWhite.r, colorWhite.g, colorWhite.b);
					colorsAlt.push(colorAlt.r, colorAlt.g, colorAlt.b);
				}
			} else {
				for ( let i = 0; i < 3; i++) {
					colors.push( colorBlack.r, colorBlack.g, colorBlack.b);
					colorsAlt.push(colorBlack.r, colorBlack.g, colorBlack.b);
				}
			}
		}
		geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
		const geometryAlt = new THREE.BoxGeometry( 1, .1, 1 ).toNonIndexed();
		geometryAlt.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsAlt, 3 ) );

		camera.position.z = 15;
		const distance = camera.position.z;
		const vFOV = THREE.MathUtils.degToRad(camera.fov);
		let height = Math.ceil( 2 * Math.tan(vFOV / 2) * distance);
		let width = Math.ceil( height * camera.aspect);
		cameraX = width;
		cameraY = height;
		let numCubes = 0;
		let cubes = []
		let cubeRow = []
		console.log("Dimensions: ", width, height);
		let rowIndex = 0;
		let colIndex = 0;
		for (let row = height/2; row > -height/2; row--) {
			for (let col = -width/2; col < width/2; col++) {
				// console.log("row: ", row);
				// console.log("col: ", col);
				let cube;
				if (initialsMap[rowIndex][colIndex] === 1) {
					cube = new THREE.Mesh(geometryAlt, material);
					cube.userData.isAlt = true;
				} else {
					cube = new THREE.Mesh(geometry, material);
					cube.userData.isAlt = false;
				}
				cube.userData.isActivated = false;
				cube.position.x = col;
				cube.position.y = row;
				scene.add(cube);

				cubeRow.push(cube);
				numCubes++;
				colIndex++;
			}
			colIndex = 0;
			rowIndex++;
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
					let square = cubes[row][col];
					if (shouldFlip || square.userData.isActivated) {
						if (square.userData.isAlt) {
							square.userData.isActivated = true;
						}
						square.rotation.x += (targetRotationX - square.rotation.x) * 0.2;
					} else if (!square.userData.isActivated) {
						square.rotation.x += (normalRotationX - square.rotation.x) * 0.05;
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