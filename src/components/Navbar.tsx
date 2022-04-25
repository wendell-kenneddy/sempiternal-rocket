import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { NavMenu } from './NavMenu';

export function Navbar() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)', false);

  return (
    <Box
      component="header"
      sx={({ spacing, colors, shadows, fn: { rgba } }) => ({
        background: rgba(colors.dark[9], 0.1),
        width: '100%',
        paddingBlock: spacing.xs,
        paddingInline: spacing.lg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: shadows.xs,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '99',
        backdropFilter: 'blur(10px)'
      })}
    >
      <Box
        component="nav"
        sx={({ breakpoints }) => ({
          width: '100%',
          maxWidth: breakpoints.sm,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        })}
      >
        <Logo />

        {isLargeScreen ? <NavLinks /> : <NavMenu />}
      </Box>
    </Box>
  );
}
