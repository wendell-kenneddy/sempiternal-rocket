import { Box, Button, Stack, Text, Title } from '@mantine/core';
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

        <Box
          sx={({ radius, spacing, fn: { rgba } }) => ({
            background: rgba('#fff', 0.1),
            width: '100%',
            borderRadius: radius.md,
            padding: spacing.xs,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            '@media (min-width: 768px)': {
              marginTop: '-7rem'
            }
          })}
        >
          <Title sx={({ fontSizes }) => ({ fontSize: fontSizes.lg })}>
            Hi, I&apos;m a web dev student!
          </Title>
        </Box>

        <Title my="sm" order={3}>
          About me
        </Title>

        <Text my="sm">
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
