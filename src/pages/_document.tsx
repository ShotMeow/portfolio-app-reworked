import { Html, Head, Main, NextScript } from "next/document";
import { NextPage } from "next";
import React from "react";

const Document: NextPage = () => {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500;700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/favicon-180x180.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
