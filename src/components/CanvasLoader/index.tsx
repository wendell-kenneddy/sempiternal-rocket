import { Box, Loader } from '@mantine/core';

export function CanvasLoader() {
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
      <Loader color="teal" size="lg" />
    </Box>
  );
}
