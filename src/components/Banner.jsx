// libs
import React from "react";
// constants
import contentBanner from "../contants/ContentBanner";
// components
import CustomSlider from "./CustomSlider";

function Banner() {
  return (
    <CustomSlider
      children={contentBanner.map((item, index) => {
        return (
          <div key={index} className="banner-slide">
            <img className="slide-image" src={item.image} alt={item.title} />
          </div>
        );
      })}
      container={false}
      items={contentBanner}
      total={1}
      autoPlay={true}
      time={4000}
      loop={true}
      nav={false}
      dots={true}
      margin={5}
      lazyLoad={true}
      sliderBy={1}
    />
  );
}

export default Banner;
