// src/components/ui/CarbonNetworkCanvas.tsx
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const FlowNodes = () => {
  const meshRef = useRef<THREE.Points>(null);

  // 1. FIXED: Removed the unused 'count' variable to satisfy TS6133
  const particles = useMemo(() => {
    const numSide = 70;
    const gap = 1;
    const positions = new Float32Array(numSide * numSide * 3);
    const originals = new Float32Array(numSide * numSide * 3);

    for (let i = 0; i < numSide; i++) {
      for (let j = 0; j < numSide; j++) {
        const idx = (i * numSide + j) * 3;
        const x = (i - numSide / 2) * gap;
        const z = (j - numSide / 2) * gap;

        positions[idx] = x;
        positions[idx + 1] = 0;
        positions[idx + 2] = z;

        originals[idx] = x;
        originals[idx + 1] = 0;
        originals[idx + 2] = z;
      }
    }
    return { positions, originals };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.3;
    const posAttr = meshRef.current?.geometry.attributes.position;
    if (!posAttr) return;

    for (let i = 0; i < posAttr.count; i++) {
      const i3 = i * 3;
      const x = particles.originals[i3];
      const z = particles.originals[i3 + 2];

      const wave1 = Math.sin(x * 0.2 + time) * 0.8;
      const wave2 = Math.cos(z * 0.3 + time * 0.5) * 0.8;
      const wave3 = Math.sin((x + z) * 0.1 + time) * 0.5;

      posAttr.array[i3 + 1] = wave1 + wave2 + wave3;
      posAttr.array[i3] = x + Math.sin(time + z * 0.1) * 0.2;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        {/* 2. FIXED: Added 'args' property to satisfy TS2741 */}
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#007473"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CarbonNetwork3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 15, 0], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'), 0);
        }}
      >
        <FlowNodes />
      </Canvas>
    </div>
  );
};

export default CarbonNetwork3D;