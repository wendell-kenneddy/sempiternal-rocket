import { Box, Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RotatingSphere } from '../components/RotatingSphere';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wendell Kenneddy | Homepage</title>
      </Head>

      <AnimatedLayout>
        <Box
          sx={() => ({
            width: 280,
            height: 280,
            margin: '0 auto',
            '@media (min-width: 768px)': {
              width: 540,
              height: 540
            }
          })}
        >
          <Canvas>
            <RotatingSphere />
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 20]} />
            <OrbitControls />
          </Canvas>
        </Box>

        <Title>Hello, world!</Title>
      </AnimatedLayout>
    </>
  );
}
