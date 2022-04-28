import { Box } from '@mantine/core';
import { GithubLink } from './GithubLink';
import { NavLink } from './NavLink';

export function NavLinks() {
  return (
    <Box
      sx={({ spacing }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xs
      })}
    >
      <NavLink href="/work">Work</NavLink>
      <GithubLink />
    </Box>
  );
}
