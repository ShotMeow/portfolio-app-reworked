import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Home from "@/components/templates/Home/Home";

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
