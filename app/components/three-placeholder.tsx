"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { ParallaxBarrierEffect } from "three/addons/effects/ParallaxBarrierEffect.js";

export const ThreePlaceholder: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<ParallaxBarrierEffect | null>(null);
  const spheresRef = useRef<THREE.Mesh[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windowHalfRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const mouse = mouseRef.current;
    const windowHalf = windowHalfRef.current;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    const path = "https://threejs.org/examples/textures/cube/pisa/";
    const format = ".png";
    const urls = [
      path + "px" + format,
      path + "nx" + format,
      path + "py" + format,
      path + "ny" + format,
      path + "pz" + format,
      path + "nz" + format,
    ];

    // const customURL = Array.from({ length: 6 }, () => '/png-transparent-mythical-phoenix-watercolor-resplendent-flaming-phoenix-bird-thumbnail.png');
    const customURL = Array.from({ length: 6 }, () => '/Mitul_Bid_transparent_1_bc27f7cfd0.png');
    console.log(urls);
    const textureCube = new THREE.CubeTextureLoader().load(customURL);

    const scene = new THREE.Scene();
    scene.background = textureCube;
    sceneRef.current = scene;

    const geometry = new THREE.SphereGeometry(0.1, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
    });

    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 10 - 5;
      mesh.position.y = Math.random() * 10 - 5;
      mesh.position.z = Math.random() * 10 - 5;
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
      scene.add(mesh);
      spheres.push(mesh);
    }
    spheresRef.current = spheres;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setAnimationLoop(animate);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const width = window.innerWidth || 2;
    const height = window.innerHeight || 2;
    const effect = new ParallaxBarrierEffect(renderer);
    effect.setSize(width, height);
    effectRef.current = effect;

    function onWindowResize(): void {
      windowHalf.x = window.innerWidth / 2;
      windowHalf.y = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      effect.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event: MouseEvent): void {
      mouse.x = (event.clientX - windowHalf.x) / 100;
      mouse.y = (event.clientY - windowHalf.y) / 100;
    }

    function animate(): void {
      const timer = 0.0001 * Date.now();

      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      for (let i = 0, il = spheres.length; i < il; i++) {
        const sphere = spheres[i];
        sphere.position.x = 5 * Math.cos(timer + i);
        sphere.position.y = 5 * Math.sin(timer + i * 1.1);
      }

      effect.render(scene, camera);
    }

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("mousemove", onDocumentMouseMove);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      renderer.setAnimationLoop(null);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      textureCube.dispose();
      effectRef.current = null;
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      spheresRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-screen" />;
};

export default ThreePlaceholder;
