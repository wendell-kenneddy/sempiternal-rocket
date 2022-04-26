import { Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Wendell Kenneddy | Contact</title>
      </Head>

      <AnimatedLayout>
        <Title>Contact</Title>
      </AnimatedLayout>
    </>
  );
}
