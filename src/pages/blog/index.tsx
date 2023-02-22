import React from "react";
import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин - Блог</title>
      </Head>
    </Layout>
  );
};

export default BlogPage;
