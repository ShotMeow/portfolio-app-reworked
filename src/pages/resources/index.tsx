import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Resources from "@/components/templates/Resources/Resources";

const ResourcesPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин - Ресурсы</title>
        <meta
          name="description"
          content="Страница с полезными ресурсами для разработчиков"
        />
      </Head>
      <Resources />
    </Layout>
  );
};

export default ResourcesPage;
