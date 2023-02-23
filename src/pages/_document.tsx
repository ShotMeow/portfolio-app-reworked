import { Html, Head, Main, NextScript } from "next/document";
import { DocumentType } from "next/dist/shared/lib/utils";
import { NextPage } from "next";
import React from "react";

const Document: NextPage<DocumentType> = () => {
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
          crossOrigin={"anonymous"}
        />
        <meta
          name="og:title"
          content="Данила Маврин, Full-stack JavaScript разработчик"
        />
        <meta
          name="og:description"
          content="Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее."
        />
        <meta
          name="description"
          content="Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее."
        />
        <meta
          name="og:image"
          content="https://shotmeow.dev/images/main-page.jpg"
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
