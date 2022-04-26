import { Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Wendell Kenneddy | Work</title>
      </Head>

      <AnimatedLayout>
        <Title>Work</Title>
      </AnimatedLayout>
    </>
  );
}
