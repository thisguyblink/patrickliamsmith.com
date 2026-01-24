<script>
	import * as THREE from 'three';
	import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
	import { FontLoader } from 'three/addons/loaders/FontLoader.js';
	import { onMount } from 'svelte';

	let x;
	let y;
	let name;
	onMount(async () => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const loader = new FontLoader();
		const font = await loader.loadAsync( '/fonts/helvetiker_bold.typeface.json' );
		const geometry = new TextGeometry( 'Patrick S.', {
			font: font,
			size: 80,
			depth: 5,
			curveSegments: 12
		} );
		geometry.center();
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		});
		renderer.setSize( window.innerWidth, window.innerHeight );
		name.appendChild( renderer.domElement );
		const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
		const text = new THREE.Mesh( geometry, material );
		scene.add( text );

		camera.position.z = 500;
		function animate() {
			text.rotation.y = 45 - (y / 180 * 1);
			renderer.render( scene, camera );
		}
		renderer.setAnimationLoop( animate );
	});


</script>

<svelte:window bind:scrollY={y} bind:scrollX={x}/>
<div class="box">
	<div class="landingBackground">
		<div class="name" bind:this={name}></div>
	</div>
</div>

<style>
	.box {
			height: 1200px;
	}
	.landingBackground {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: #00f000;
			z-index: 0;
  }
	.name {
			height: 800px;
			z-index: 1;
	}

</style>