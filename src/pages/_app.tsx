import "@/app/styles/globals.css";

import("@/features/colorScheme/initColorScheme");

import { en, Locale, ru } from "@/features/language";

import { NextPage } from "next";
import { AppProps } from "next/app";
import NextProgressBar from "nextjs-progressbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { IntlProvider } from "react-intl";

const langMessages = {
  en,
  ru,
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const locale = localStorage.getItem("portfolio:locale") as Locale;

  return (
    <IntlProvider locale={locale} messages={langMessages[locale]}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="og:locale" content="ru_RU" />
        <meta name="theme-color" content="#14191F" />
        <meta name="og:title" content="Данила Маврин" />
        <meta
          name="og:description"
          content="Помогаю другим разработчикам становиться сильнее."
        />
        <meta
          name="description"
          content="Помогаю другим разработчикам становиться сильнее."
        />
        <meta
          name="og:image"
          content="https://shotmeow.dev/images/main-page.jpg"
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
    </IntlProvider>
  );
};

export default App;
