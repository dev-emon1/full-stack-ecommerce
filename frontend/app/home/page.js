import Container from "@/components/container/Container";
import BestCollection from "@/components/home/BestCollection";
import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import PartnerCompany from "@/components/home/PartnerCompany";
import QualityBanner from "@/components/home/QualityBanner";
import TopRatedProducts from "@/components/home/TopRatedProducts";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <Category />
        <NewArrivals />
        <FlashSale />
        <PartnerCompany />
        <QualityBanner />
        <BestCollection />
        <TopRatedProducts />
      </Container>
    </>
  );
};

export default HomePage;
