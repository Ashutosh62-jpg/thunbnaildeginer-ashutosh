'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 2.0);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x06b6d4, 3, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // 3. Meshes

    // Centerpiece: Metallic Gradient Torus Knot
    const torusGeometry = new THREE.TorusKnotGeometry(1.0, 0.32, 128, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.15,
      metalness: 0.85,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.25,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusMesh);

    // Floating Glass Cubes
    const createCube = (size: number, color: number, x: number, y: number, z: number) => {
      const geo = new THREE.BoxGeometry(size, size, size);
      const mat = new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.8,
        roughness: 0.1,
        transmission: 0.5,
        thickness: 0.8,
        clearcoat: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    };

    const cube1 = createCube(0.9, 0x3b82f6, -2.2, 1.5, -0.5);
    const cube2 = createCube(0.75, 0x8b5cf6, 2.3, 1.7, -1.2);

    // Floating Glowing Spheres
    const createSphere = (radius: number, color: number, x: number, y: number, z: number) => {
      const geo = new THREE.SphereGeometry(radius, 32, 32);
      const mat = new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.05,
        metalness: 0.9,
        transmission: 0.6,
        thickness: 1.0,
        clearcoat: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    };

    const sphere1 = createSphere(0.7, 0x06b6d4, 2.2, -1.4, 0.5);
    const sphere2 = createSphere(0.6, 0x3b82f6, -2.4, -1.5, -0.5);

    // 4. Mouse Rig Interpolation
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Torus Knot Animations
      torusMesh.rotation.x = elapsedTime * 0.4;
      torusMesh.rotation.y = elapsedTime * 0.5;

      // Cubes Floating & Rotations
      cube1.rotation.x = elapsedTime * 0.6;
      cube1.rotation.y = elapsedTime * 0.4;
      cube1.position.y = 1.5 + Math.sin(elapsedTime * 1.5) * 0.2;

      cube2.rotation.x = -elapsedTime * 0.5;
      cube2.rotation.z = elapsedTime * 0.7;
      cube2.position.y = 1.7 + Math.cos(elapsedTime * 1.8) * 0.25;

      // Spheres Floating
      sphere1.position.y = -1.4 + Math.sin(elapsedTime * 2.0) * 0.2;
      sphere2.position.y = -1.5 + Math.cos(elapsedTime * 1.6) * 0.2;

      // Smooth Camera Rig
      camera.position.x += (targetMouseX * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (targetMouseY * 1.2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[450px] relative flex items-center justify-center">
      {/* Background Aura Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-secondary/25 to-accent/25 rounded-full blur-3xl scale-75 animate-pulse-slow pointer-events-none" />
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-10" />
    </div>
  );
}
