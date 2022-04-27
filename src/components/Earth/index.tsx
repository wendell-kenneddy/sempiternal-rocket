import { OrbitControls, useTexture } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Earth() {
  const meshRef = useRef<MeshProps>(null);

  const props = useTexture({
    map: '/earth-texture-map.jpg'
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
      <mesh ref={meshRef} castShadow={true} receiveShadow={false}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial {...props} />
      </mesh>
      <ambientLight />
      <OrbitControls />
    </>
  );
}
