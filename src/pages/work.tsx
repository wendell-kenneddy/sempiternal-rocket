import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CanvasContainerProps } from '../components/CanvasContainer';
import { CanvasLoader } from '../components/CanvasLoader';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';
import { PageTitle } from '../components/PageTitle';
import { Projects } from '../components/Projects';
import { Sun } from '../components/Sun';
import { ProjectData, PROJECTS } from '../data/projects';

interface ProjectsPageProps {
  projects: ProjectData[];
}

const CanvasContainer = dynamic<CanvasContainerProps>(
  () =>
    import('../components/CanvasContainer').then((mod) => mod.CanvasContainer),
  {
    ssr: false,
    loading: CanvasLoader
  }
);

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Wendell Kenneddy's projects." />
        <meta name="author" content="Wendell Kenneddy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wendell Kenneddy | Work" />
        <meta property="og:site_name" content="Wendell Kenneddy | Work" />
        <meta
          property="og:description"
          content="Wendell Kenneddy's projects."
        />
        <meta
          property="og:url"
          content="https://sempiternalrocket.vercel.app/work"
        />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Wendell Kenneddy | Work" />
        <meta
          property="twitter:description"
          content="Wendell Kenneddy's projects."
        />
        <meta
          property="twitter:url"
          content="https://sempiternalrocket.vercel.app/work"
        />
        <title>Wendell Kenneddy | Work</title>
        <link
          rel="canonical"
          href="https://sempiternalrocket.vercel.app/work"
        />
      </Head>

      <AnimatedLayout>
        <CanvasContainer>
          <Sun />
        </CanvasContainer>

        <PageTitle title="My most valuable projects" />

        <Projects data={projects} />
      </AnimatedLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: PROJECTS
    }
  };
}
