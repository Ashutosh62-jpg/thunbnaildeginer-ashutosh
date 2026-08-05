'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingCube({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

export function FloatingSphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.05}
          metalness={0.9}
          transmission={0.6}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

export function FloatingTorus({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.8} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.2}
          metalness={0.8}
          emissive="#3B82F6"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}
