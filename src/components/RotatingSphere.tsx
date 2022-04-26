import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function RotatingSphere() {
  const mesh = useRef<MeshProps>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();

      mesh.current.rotation.x = Math.sin(time);
      mesh.current.rotation.y = Math.sin(time);
      mesh.current.rotation.z = Math.sin(time);
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshPhongMaterial wireframe />
    </mesh>
  );
}
