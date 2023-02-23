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
          name="description"
          content="Посадочная страница сайта-портфолио"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default HomePage;
