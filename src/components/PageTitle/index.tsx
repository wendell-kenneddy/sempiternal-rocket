import { Box, Title } from '@mantine/core';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Box
      sx={({ radius, spacing, fn: { rgba } }) => ({
        background: rgba('#fff', 0.1),
        width: '100%',
        borderRadius: radius.md,
        padding: spacing.xs,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        '@media (min-width: 768px)': {
          marginTop: '-7rem'
        }
      })}
    >
      <Title sx={({ fontSizes }) => ({ fontSize: fontSizes.lg })}>
        {title}
      </Title>
    </Box>
  );
}
