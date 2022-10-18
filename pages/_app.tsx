import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Fonts from '../components/fonts';

const colors = {
  guideblue: {
    400: '#1d2025',
    300: '#68707d',
    200: '#b6bcc8',
    100: '#f7f8fd',
  },
  guideorange: {
    200: '#ff7d1a',
    100: '#ffede0',
  },
}

const fonts = {
  heading: `'KumbhSans-Bold', sans-serif`,
  body: `'KumbhSans-Regular', sans-serif`,
}

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
