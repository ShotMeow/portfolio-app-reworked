import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Training from "@/components/templates/Training/Training";

const TrainingPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин - Обучение</title>
        <meta name="og:type" content="Блог" />
        <meta name="og:url" content="https://shotmeow.dev/training" />
      </Head>
      <Training />
    </Layout>
  );
};

export default TrainingPage;
