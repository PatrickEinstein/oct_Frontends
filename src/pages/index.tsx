import React from "react";
import CardSection from "../components/home/CardSection";
import Hero from "../components/home/Hero";
import SupportSection from "../components/home/SupportSection";
import Layout from "../components/layout/Layout";

const Index = () => {
  return (
    <div className="text-4xl">
      <Layout>
        <Hero />
        <CardSection />
        <SupportSection />
      </Layout>
    </div>
  );
};

export default Index;
