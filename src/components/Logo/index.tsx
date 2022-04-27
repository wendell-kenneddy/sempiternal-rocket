import { Text } from '@mantine/core';
import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';
import { useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { motion } from 'framer-motion';

export function Logo() {
  const { colors } = useMantineTheme();
  const { hovered, ref } = useHover<HTMLAnchorElement>();
  const {
    spacing: { sm }
  } = useMantineTheme();

  return (
    <Link href="/" passHref>
      <motion.a
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: sm,
          textDecoration: 'none'
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <FaRocket color={hovered ? colors.teal[4] : '#fff'} fontSize={18} />

        <Text size="md" color="#fff" weight={700}>
          Wendell Kenneddy
        </Text>
      </motion.a>
    </Link>
  );
}
