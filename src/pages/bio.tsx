import { Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';

export default function BioPage() {
  return (
    <>
      <Head>
        <title>Wendell Kenneddy | Bio</title>
      </Head>

      <AnimatedLayout>
        <Title>Bio</Title>
      </AnimatedLayout>
    </>
  );
}
