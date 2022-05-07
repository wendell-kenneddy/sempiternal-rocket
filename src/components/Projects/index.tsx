import { Grid } from '@mantine/core';
import { ProjectData } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  data: ProjectData[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <Grid my="md" justify="space-between" mx={0} grow>
      {data.length &&
        data.map((project) => (
          <Grid.Col xs={6} sm={4} key={project.title}>
            <ProjectCard project={project} />
          </Grid.Col>
        ))}
    </Grid>
  );
}
