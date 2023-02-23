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
        <meta name="og:type" content="Ресурсы" />
        <meta name="og:url" content="https://shotmeow.dev/resources" />
      </Head>
      <Resources />
    </Layout>
  );
};

export default ResourcesPage;
