import React from "react";
import AimSection from "../components/home/AimSection";
import CardSection from "../components/home/CardSection";
import ComingSoon from "../components/home/ComingSoon";
import EventPicturesSection from "../components/home/EventPicturesSection";
import Hero from "../components/home/Hero";
import PartnerSection from "../components/home/PartnerSection";
import SupportSection from "../components/home/SupportSection";
import Layout from "../components/layout/Layout";

const Index = () => {
  return (
    <div className="text-4xl">
      <Layout>
        <Hero />
        <CardSection />
        <SupportSection />
        <AimSection />
        <PartnerSection />
        <EventPicturesSection />
        <ComingSoon />
      </Layout>
    </div>
  );
};

export default Index;
