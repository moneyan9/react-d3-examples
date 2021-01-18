import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React D3.js Examples</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
