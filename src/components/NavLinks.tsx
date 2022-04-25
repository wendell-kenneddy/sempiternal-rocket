import { Box } from '@mantine/core';
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
      <NavLink href="/bio">Bio</NavLink>
      <NavLink href="/work">Work</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Box>
  );
}
