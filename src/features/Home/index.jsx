// libs
import React from "react";
// custom hooks
import { useGetProductSlide } from "../../hooks/useGetProductSlide";
// components
import Banner from "../../components/Banner";
import CustomSlider from "../../components/CustomSlider";
import Categories from "./components/Categories";
import FlashDeal from "./components/FlashDeal";
import HomeBanner from "./components/HomeBanner";

const Home = () => {
  const sliders = useGetProductSlide();

  return (
    <section id="home-page">
      {/* Banner */}
      <Banner />

      {/* home banner */}
      <HomeBanner />

      {/* flash deal */}
      <FlashDeal />

      <CustomSlider
        container={true}
        title="You Might Also Like"
        subTitle="Add Related products to weekly line up"
        items={sliders}
        total={4}
        autoPlay={true}
        time={2000}
        loop={true}
        nav={false}
        dots={true}
        margin={20}
        lazyLoad={true}
        slideBy={2}
      />

      {/* categories */}
      <Categories />
    </section>
  );
};

export default Home;
