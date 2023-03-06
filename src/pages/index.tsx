import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/layouts";
import { Home } from "@/templates/home";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин</title>
        <meta name="og:type" content="Главная страница" />
        <meta name="og:url" content="https://shotmeow.dev" />
        <meta
          name="og:image"
          content="https://shotmeow.dev/images/main-page.jpg"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default HomePage;
