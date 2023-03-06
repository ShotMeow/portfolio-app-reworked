import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/layouts";
import { Resources } from "@/templates/resources";

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
