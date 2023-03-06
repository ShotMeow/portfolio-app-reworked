import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/layouts";
import { Blog } from "@/templates/blog";

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
