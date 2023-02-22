import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import HomePage from "@/components/templates/HomePage/HomePage";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин</title>
      </Head>
      <HomePage />
    </Layout>
  );
};

export default Home;
