import "@/styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
import NextProgressBar from "nextjs-progressbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import("@/features/colorScheme/initColorScheme");

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <NextProgressBar
        color="#3B82F6"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
