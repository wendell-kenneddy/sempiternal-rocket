import { Box, Title } from '@mantine/core';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Box
      sx={({ colors, radius, spacing, fn: { rgba } }) => ({
        background: rgba(colors.dark[9], 0.6),
        width: '100%',
        borderRadius: radius.md,
        padding: spacing.xs,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 768px)': {
          marginTop: '-7rem'
        },
        '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
          {
            backdropFilter: 'blur(10px)'
          }
      })}
    >
      <Title sx={({ fontSizes }) => ({ fontSize: fontSizes.lg })}>
        {title}
      </Title>
    </Box>
  );
}
