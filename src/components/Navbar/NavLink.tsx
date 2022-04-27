import { Box } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;

  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const { asPath } = useRouter();
  const currentPageMatchesHref = asPath === href;

  return (
    <Link href={href} passHref>
      <Box
        component="a"
        sx={({ fontSizes, colors, fn: { darken } }) => ({
          fontSize: fontSizes.md,
          textDecoration: 'none',
          color: currentPageMatchesHref ? colors.teal[4] : darken('#fff', 0.4),
          fontWeight: currentPageMatchesHref ? 700 : 400,
          ':hover': {
            color: colors.teal[4]
          }
        })}
      >
        {children}
      </Box>
    </Link>
  );
}
