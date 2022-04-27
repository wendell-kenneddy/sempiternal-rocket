import { Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';
import { Earth } from '../components/Earth';
import dynamic from 'next/dynamic';
import { CanvasContainerProps } from '../components/CanvasContainer';
import { CanvasLoader } from '../components/CanvasLoader';

const CanvasContainer = dynamic<CanvasContainerProps>(
  () =>
    import('../components/CanvasContainer').then((mod) => mod.CanvasContainer),
  {
    ssr: false,
    loading: CanvasLoader
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Wendell Kenneddy | Homepage</title>
      </Head>

      <AnimatedLayout>
        <CanvasContainer>
          <Earth />
        </CanvasContainer>

        <Title>Hello, world!</Title>
      </AnimatedLayout>
    </>
  );
}
