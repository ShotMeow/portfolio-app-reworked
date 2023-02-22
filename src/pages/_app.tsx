import "@/styles/globals.scss";
import { NextPage } from "next";
import { AppProps } from "next/app";
import NextProgressBar from "nextjs-progressbar";
import dynamic from "next/dynamic";
import Head from "next/head";

dynamic(import("@/features/theme/initColorScheme").then, {
  ssr: false,
});

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
    </>
  );
};

export default App;
