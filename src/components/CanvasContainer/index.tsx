import { Box } from '@mantine/core';
import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';

export interface CanvasContainerProps {
  children: ReactNode;
}

export function CanvasContainer({ children }: CanvasContainerProps) {
  return (
    <Box
      sx={() => ({
        width: 280,
        height: 280,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 768px)': {
          width: 540,
          height: 540
        }
      })}
    >
      <Canvas>{children}</Canvas>
    </Box>
  );
}
