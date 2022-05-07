import { OrbitControls, useTexture } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Sun() {
  const meshRef = useRef<MeshProps>(null);

  const props = useTexture({
    map: '/sun-texture-map.jpg'
  });

  useFrame(() => {
    const { current: mesh } = meshRef;

    if (mesh) {
      mesh.rotation.x += 0.01;
      mesh.rotation.z += 0.01;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 128, 128]} />
        <meshStandardMaterial {...props} />
      </mesh>
      <ambientLight />
      <OrbitControls />
    </>
  );
}
