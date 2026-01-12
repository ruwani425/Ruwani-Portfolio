"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the profile image as a texture
  // Note: TextureLoader needs to be handled carefully in Next.js SSR, but @react-three/fiber handles it well inside Canvas
  const texture = useLoader(TextureLoader, "/IMG_20260103_134927.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate 360 degrees exactly once, then stop
      if (meshRef.current.rotation.y < Math.PI * 2) {
        meshRef.current.rotation.y += delta * 5;
      } else {
        meshRef.current.rotation.y = Math.PI * 2; // Ensure it ends perfectly flat
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        {/* Card Geometry: Width, Height, Depth (thin) */}
        <boxGeometry args={[5, 5, 0.1]} />
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Profile3D() {
  return (
    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <RotatingCube />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
