import { Box } from '@mantine/core';
import { ReactElement } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <Box
        sx={({ breakpoints }) => ({
          width: '100%',
          maxWidth: breakpoints.sm,
          margin: '5rem auto 1rem'
        })}
      >
        {children}
      </Box>
    </>
  );
}
