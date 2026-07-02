import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function FloatingShape({ position, rotation, scale, color, type }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.002;
  });

  const geometry = useMemo(() => {
    switch (type) {
      case "icosahedron": return <icosahedronGeometry args={[1, 0]} />;
      case "torus": return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "octahedron": return <octahedronGeometry args={[1, 0]} />;
      case "dodecahedron": return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [type]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.3}
          metalness={0.1}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#20a1db" />

      <FloatingShape
        position={[-6, 4, -5]}
        rotation={[0.5, 0.8, 0.3]}
        scale={1.8}
        color="#20a1db"
        type="icosahedron"
      />
      <FloatingShape
        position={[7, -3, -8]}
        rotation={[1.2, 0.5, 0.7]}
        scale={2.2}
        color="#7fc8e8"
        type="dodecahedron"
      />
      <FloatingShape
        position={[-4, -5, -10]}
        rotation={[0.3, 1.1, 0.9]}
        scale={1.5}
        color="#0d2b3e"
        type="octahedron"
      />
      <FloatingShape
        position={[5, 6, -6]}
        rotation={[0.8, 0.2, 1.3]}
        scale={1.6}
        color="#20a1db"
        type="torus"
      />
      <FloatingShape
        position={[0, -6, -12]}
        rotation={[0.1, 0.6, 0.4]}
        scale={2.0}
        color="#7fc8e8"
        type="icosahedron"
      />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
