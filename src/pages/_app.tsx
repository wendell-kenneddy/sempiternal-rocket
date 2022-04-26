import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Layout } from '../components/Layout';
import { AnimatePresence } from 'framer-motion';

export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
    router: { asPath }
  } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={asPath} />
          </AnimatePresence>
        </Layout>
      </MantineProvider>
    </>
  );
}
