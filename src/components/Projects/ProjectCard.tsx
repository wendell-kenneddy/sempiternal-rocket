import { Card, Image, Text, Title } from '@mantine/core';
import { ProjectData } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, url } = project;

  return (
    <Card
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      shadow="md"
      sx={({ colors }) => ({
        width: '100%',
        border: '1px solid transparent',
        ':hover': {
          borderColor: colors.teal[4]
        }
      })}
    >
      <Card.Section>
        <Image src={image} alt={`${title} project icon`} height={132} />
      </Card.Section>

      <Title mt="xs" order={3}>
        {title}
      </Title>

      <Text size="xs">{description}</Text>
    </Card>
  );
}
