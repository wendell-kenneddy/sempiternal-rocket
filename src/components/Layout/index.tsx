import { Box } from '@mantine/core';
import { ReactElement } from 'react';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <Box
        component="main"
        sx={({ breakpoints }) => ({
          width: '90%',
          maxWidth: breakpoints.sm,
          margin: '0 auto'
        })}
      >
        {children}
      </Box>
    </>
  );
}
