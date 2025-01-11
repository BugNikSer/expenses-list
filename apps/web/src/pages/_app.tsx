import React from 'react';
import type { AppProps } from 'next/app';
import { trpc } from "@web/src/lib/trpc";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp);
