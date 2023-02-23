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
        <meta
          name="og:image"
          content="https://shotmeow.dev/images/main-page.jpg"
        />
        <meta
          name="og:title"
          content="Данила Маврин, Full-stack JavaScript разработчик"
        />
        <meta
          name="og:site_name"
          content="Данила Маврин, Full-stack JavaScript разработчик"
        />
        <meta
          name="og:description"
          content="Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее."
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default HomePage;
