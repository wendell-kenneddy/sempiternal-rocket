import { Button, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';
import { Earth } from '../components/Earth';
import dynamic from 'next/dynamic';
import { CanvasContainerProps } from '../components/CanvasContainer';
import { CanvasLoader } from '../components/CanvasLoader';
import Link from 'next/link';
import { SocialLink } from '../components/SocialLink';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PageTitle } from '../components/PageTitle';

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
        <meta
          name="description"
          content="A journey through Wendell Kenneddy's portfolio."
        />
        <meta name="author" content="Wendell Kenneddy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wendell Kenneddy | Homepage" />
        <meta property="og:site_name" content="Wendell Kenneddy | Homepage" />
        <meta
          property="og:description"
          content="A journey through Wendell Kenneddy's portfolio."
        />
        <meta
          property="og:url"
          content="https://sempiternalrocket.vercel.app/"
        />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Wendell Kenneddy | Homepage" />
        <meta
          property="twitter:description"
          content="A journey through Wendell Kenneddy's portfolio."
        />
        <meta
          property="twitter:url"
          content="https://sempiternalrocket.vercel.app/"
        />
        <title>Wendell Kenneddy | Homepage</title>
        <link rel="canonical" href="https://sempiternalrocket.vercel.app/" />
      </Head>

      <AnimatedLayout>
        <CanvasContainer>
          <Earth />
        </CanvasContainer>

        <PageTitle title="Hi, I'm a web dev student!" />

        <Title
          my="sm"
          order={3}
          sx={() => ({ position: 'relative', zIndex: 999 })}
        >
          About me
        </Title>

        <Text my="sm" sx={() => ({ position: 'relative', zIndex: 999 })}>
          I am a web development student based on Brazil, with passion for
          learning new technologies and solving problems. I also love music and
          games in general.
        </Text>

        <Text my="sm">
          Started with plain HTML, JS and CSS, then moved on to build MVP apps
          with Express. Learned React, then finally started learning NextJS and
          it&apos;s ecosystem, wich is my go-to for the Frontend.
        </Text>

        <Text my="sm">
          My time was most spent building user interfaces and reliable web apps,
          as a way to learn the tooling necessary for creating modern
          applications. But also had experience building APIs with Node. Along
          the way, learned how to use database services like Firestore from
          Firebase, FaunaDB and other SQL based services.
        </Text>

        <Title my="sm" order={3}>
          Social
        </Title>

        <Stack my="sm" align="flex-start" spacing="xs">
          <SocialLink isExternal href="https://github.com/wendell-kenneddy">
            <FaGithub color="#fff" fontSize={16} />
            @wendell-kenneddy
          </SocialLink>

          <SocialLink isExternal href="mailto:wkenneddy505@gmail.com">
            <MdEmail color="#fff" fontSize={16} />
            wkenneddy505@gmail.com
          </SocialLink>
        </Stack>

        <Link href="/work" passHref>
          <Button my="sm" color="teal" size="md" component="a">
            Projects
          </Button>
        </Link>
      </AnimatedLayout>
    </>
  );
}
