import { Box, Text } from '@mantine/core';
import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';
import { useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';

export function Logo() {
  const { colors } = useMantineTheme();
  const { hovered, ref } = useHover<HTMLAnchorElement>();

  return (
    <Link href="/" passHref>
      <Box
        ref={ref}
        component="a"
        sx={({ spacing }) => ({
          display: 'flex',
          alignItems: 'center',
          gap: spacing.xs,
          textDecoration: 'none'
        })}
      >
        <FaRocket color={hovered ? colors.teal[4] : '#fff'} fontSize={18} />

        <Text size="md" color="#fff" weight={700}>
          Wendell Kenneddy
        </Text>
      </Box>
    </Link>
  );
}
