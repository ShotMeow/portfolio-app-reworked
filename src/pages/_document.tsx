import { Html, Head, Main, NextScript } from "next/document";
import { DocumentType } from "next/dist/shared/lib/utils";
import { NextPage } from "next";

const Document: NextPage<DocumentType> = () => {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700;800&display=swap"
          rel="preload"
          as="style"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="overlay"></div>
      </body>
    </Html>
  );
};

export default Document;
