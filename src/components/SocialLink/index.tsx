import { Box } from '@mantine/core';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
}

export function SocialLink({ href, children, isExternal }: SocialLinkProps) {
  return isExternal ? (
    <Box
      py="xs"
      px="sm"
      component="a"
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      sx={({ spacing, colors, radius, fn: { rgba } }) => ({
        textDecoration: 'none',
        borderRadius: radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.xs,
        color: colors.teal[4],
        cursor: 'pointer',
        ':hover': {
          background: rgba(colors.teal[4], 0.15)
        }
      })}
    >
      {children}
    </Box>
  ) : (
    <Link href={href} passHref>
      <Box
        py="xs"
        px="sm"
        component="a"
        sx={({ spacing, colors, radius, fn: { rgba } }) => ({
          textDecoration: 'none',
          borderRadius: radius.md,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: spacing.xs,
          color: colors.teal[4],
          cursor: 'pointer',
          ':hover': {
            background: rgba(colors.teal[4], 0.15)
          }
        })}
      >
        {children}
      </Box>
    </Link>
  );
}
