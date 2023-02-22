import React from "react";
import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import LandingSection from "@/components/Sections/HomePage/LandingSection/LandingSection";
import AboutSection from "@/components/Sections/HomePage/AboutSection/AboutSection";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин</title>
      </Head>
      <main>
        <LandingSection />
        <AboutSection />
      </main>
    </Layout>
  );
};

export default HomePage;
