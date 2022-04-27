import { Box, Text } from '@mantine/core';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface GithubLinkProps {
  asText?: boolean;
}

export function GithubLink({ asText }: GithubLinkProps) {
  return asText ? (
    <Text
      sx={({ spacing, colors, fn: { darken } }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: spacing.sm,
        textDecoration: 'none',
        color: darken('#fff', 0.4),
        cursor: 'pointer',
        ':hover': {
          color: colors.teal[4]
        }
      })}
    >
      Source
      <FaGithub color="#fff" fontSize={18} />
    </Text>
  ) : (
    <Link href="https://github.com/wendell-kenneddy/portfolio" passHref>
      <Box
        component="a"
        sx={({ spacing, colors, fn: { darken } }) => ({
          display: 'flex',
          alignItems: 'center',
          gap: spacing.sm,
          textDecoration: 'none',
          color: darken('#fff', 0.4),
          cursor: 'pointer',
          ':hover': {
            color: colors.teal[4]
          }
        })}
      >
        Source
        <FaGithub color="#fff" fontSize={18} />
      </Box>
    </Link>
  );
}
