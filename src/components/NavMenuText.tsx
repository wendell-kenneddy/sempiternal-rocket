import { Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavMenuText({ href, children }: NavLinkProps) {
  const { asPath } = useRouter();
  const currentPageMatchesHref = asPath === href;

  return (
    <Text
      size="md"
      sx={({ fontSizes, colors, fn: { darken } }) => ({
        textDecoration: 'none',
        color: currentPageMatchesHref ? colors.teal[4] : darken('#fff', 0.4),
        fontWeight: currentPageMatchesHref ? 700 : 400,
        ':hover': {
          color: colors.teal[4]
        }
      })}
    >
      {children}
    </Text>
  );
}
