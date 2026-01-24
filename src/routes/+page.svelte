<script>
	import { onMount } from "svelte";
	import * as THREE from "three";
	import { goto } from '$app/navigation';

	let leftContainer;
	let rightContainer;

	onMount(() => {
		// ========== CAMERAS ==========
		const leftCamera = new THREE.PerspectiveCamera(
			75,
			leftContainer.clientWidth / leftContainer.clientHeight,
			0.1,
			1000
		);
		leftCamera.position.set(0, 0.5, 5);

		const rightCamera = new THREE.PerspectiveCamera(
			75,
			rightContainer.clientWidth / rightContainer.clientHeight,
			0.1,
			1000
		);
		rightCamera.position.set(0, 0.5, 5);

		// ========== SCENES & RENDERERS ==========
		const leftScene = new THREE.Scene();
		const rightScene = new THREE.Scene();

		const leftRenderer = new THREE.WebGLRenderer({ antialias: true });
		leftRenderer.setSize(leftContainer.clientWidth, leftContainer.clientHeight);
		leftContainer.appendChild(leftRenderer.domElement);

		const rightRenderer = new THREE.WebGLRenderer({ antialias: true });
		rightRenderer.setSize(rightContainer.clientWidth, rightContainer.clientHeight);
		rightContainer.appendChild(rightRenderer.domElement);

		// ========== LIGHTING (duplicates!) ==========
		const makeLights = (color, pill) => {
			const group = new THREE.Group();

			const ambient = new THREE.AmbientLight(0xffffff, 2);
			group.add(ambient);

			const spotlight = new THREE.SpotLight(color, 30);
			spotlight.target = pill;
			spotlight.position.set(0, -2, 5);
			spotlight.angle = Math.PI / 3;
			spotlight.penumbra = 0.5;
			spotlight.decay = 0.5;
			spotlight.distance = 20;
			group.add(spotlight);

			const spotlightAbove = new THREE.SpotLight(color, 15);
			spotlightAbove.target = pill;
			spotlightAbove.position.set(1, 1.5, 5);
			spotlightAbove.angle = Math.PI / 3;
			spotlightAbove.penumbra = 0.5;
			group.add(spotlightAbove);

			const spotlightLeft = new THREE.SpotLight(color, 25);
			spotlightLeft.position.set(-2, 0.5, 1);
			spotlightLeft.angle = Math.PI / 3;
			spotlightLeft.penumbra = 0.5;
			group.add(spotlightLeft);

			return group;
		};

		// ========== GEOMETRIES ==========
		const pillGeometry = new THREE.CapsuleGeometry(0.5, 1.5, 16, 32);
		const platformGeometry = new THREE.CylinderGeometry(2, 2, 20, 32, true);

		// ========== MATERIALS ==========
		const makePillMaterial = (color) =>
			new THREE.MeshPhysicalMaterial({
				color,
				metalness: 0.1,
				roughness: 0.05,
				transparent: true,
				opacity: 0.9,
				transmission: 0.99,
				clearcoat: 1,
				clearcoatRoughness: 0.05,
				reflectivity: 1,
			});

		const wireframeMaterial = new THREE.MeshBasicMaterial({
			color: 0x00ff00,
			wireframe: true,
		});

		const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

		// ========== LEFT OBJECTS ==========
		const redPill = new THREE.Mesh(pillGeometry, makePillMaterial(0xff0000));
		redPill.position.set(0, 1, 0);
		leftScene.add(redPill);

		const wireframeLeft = new THREE.Mesh(pillGeometry, wireframeMaterial);
		wireframeLeft.position.set(0, 1, 0);
		wireframeLeft.scale.set(0.99, 0.99, 0.99);
		leftScene.add(wireframeLeft);

		const platformLeft = new THREE.Mesh(platformGeometry, platformMaterial);
		platformLeft.position.set(0, -10.5, 1);
		leftScene.add(platformLeft);

		// ========== RIGHT OBJECTS ==========
		const bluePill = new THREE.Mesh(pillGeometry, makePillMaterial(0x0000ff));
		bluePill.position.set(0, 1, 0);
		rightScene.add(bluePill);

		const wireframeRight = new THREE.Mesh(pillGeometry, wireframeMaterial);
		wireframeRight.position.set(0, 1, 0);
		wireframeRight.scale.set(0.99, 0.99, 0.99);
		rightScene.add(wireframeRight);

		const platformRight = new THREE.Mesh(platformGeometry, platformMaterial);
		platformRight.position.set(0, -10.5, 1);
		rightScene.add(platformRight);

		leftScene.add(makeLights(0xff0000, redPill));  // red lights
		rightScene.add(makeLights(0x0000ff, bluePill)); // blue lights

		// ========== ANIMATION ==========
		function animate() {
			redPill.rotation.x += 0.02;
			redPill.rotation.y += 0.01;
			redPill.rotation.z += 0.01;
			wireframeLeft.rotation.x += 0.02;
			wireframeLeft.rotation.y += 0.01;
			wireframeLeft.rotation.z += 0.01;

			bluePill.rotation.x += 0.01;
			bluePill.rotation.y += 0.01;
			bluePill.rotation.z += 0.02;
			wireframeRight.rotation.x += 0.01;
			wireframeRight.rotation.y += 0.01;
			wireframeRight.rotation.z += 0.02;

			leftRenderer.render(leftScene, leftCamera);
			rightRenderer.render(rightScene, rightCamera);
		}

		leftRenderer.setAnimationLoop(animate);
		rightRenderer.setAnimationLoop(animate);

		// ========== RESIZE ==========
		const handleResize = () => {
			leftCamera.aspect = leftContainer.clientWidth / leftContainer.clientHeight;
			leftCamera.updateProjectionMatrix();
			leftRenderer.setSize(leftContainer.clientWidth, leftContainer.clientHeight);

			rightCamera.aspect = rightContainer.clientWidth / rightContainer.clientHeight;
			rightCamera.updateProjectionMatrix();
			rightRenderer.setSize(rightContainer.clientWidth, rightContainer.clientHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			leftRenderer.dispose();
			rightRenderer.dispose();
		};
	});

	function goToScroll() {
		goto('/scroll');
	}
</script>

<div class="container">
	<button
		bind:this={leftContainer}
		class="scene"
		type="button"
		on:click={goToScroll}
	></button>
	<div bind:this={rightContainer} class="scene"></div>
</div>

<style>
    .container {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: row;
    }

    .scene {
        flex: 1;
        background: black;
        opacity: 0.9;
        transition: opacity 0.3s ease;
        width: 50%;
        height: 100%;
    }

    .scene:hover {
        opacity: 1;
    }
</style>
