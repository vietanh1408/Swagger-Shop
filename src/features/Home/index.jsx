import React from "react";

// components
import Categories from "./components/Categories";
import FlashDeal from "./components/FlashDeal";
import HomeBanner from "./components/HomeBanner";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <section id="home-page">
      {/* Banner */}
      <Banner />

      {/* home banner */}
      <HomeBanner />

      {/* flash deal */}
      <FlashDeal />

      {/* categories */}
      <Categories />
    </section>
  );
};

export default Home;
