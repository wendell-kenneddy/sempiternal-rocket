import { Title } from '@mantine/core';

export default function NotFound() {
  return (
    <Title mt="7rem" sx={({ fontSizes }) => ({ fontSize: fontSizes.xl })}>
      Page not found :(
    </Title>
  );
}
