import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Blog from "@/components/templates/Blog/Blog";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин - Блог</title>
        <meta name="og:type" content="Блог" />
        <meta name="og:url" content="https://shotmeow.dev/blog" />
      </Head>
      <Blog />
    </Layout>
  );
};

export default BlogPage;
