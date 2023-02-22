import { Html, Head, Main, NextScript } from "next/document";
import { DocumentType } from "next/dist/shared/lib/utils";
import { NextPage } from "next";

const Document: NextPage<DocumentType> = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
      </Head>
      <body className="dark:bg-gradient-to-t">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
