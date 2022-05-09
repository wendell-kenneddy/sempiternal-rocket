import { Title } from '@mantine/core';
import Head from 'next/head';

export default function Offline() {
  return (
    <>
      <Head>
        <title>Offline at the moment</title>
      </Head>

      <Title mt="7rem" sx={({ fontSizes }) => ({ fontSize: fontSizes.xl })}>
        Offline at the moment :(
      </Title>
    </>
  );
}
