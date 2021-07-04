// libs
import React from "react";
import OwlCarousel from "react-owl-carousel";
// components
import Product from "./Product/Product";

const CustomSlider = (props) => {
  const {
    children,
    container,
    title,
    subTitle,
    items,
    total,
    autoPlay,
    time,
    dots,
    margin,
    loop,
    nav,
    lazyLoad,
    slideBy,
    btnPrev,
    btnNext,
  } = props;

  return (
    <div className={container ? "container" : ""}>
      {title && (
        <h3 className="slider-title d-flex justify-content-center py-2">
          {title}
        </h3>
      )}
      {subTitle && (
        <p className="slider-subtitle d-flex justify-content-center pb-2">
          {subTitle}
        </p>
      )}
      <OwlCarousel
        className="owl-theme"
        autoplay={autoPlay}
        autoplayTimeout={time}
        autoplayHoverPause={true}
        items={total}
        loop={loop}
        margin={margin}
        dots={dots}
        nav={nav}
        navText={nav && [btnPrev, btnNext]}
        navClass={["prev-slide", "next-slide"]}
        lazyLoad={lazyLoad}
        slideBy={slideBy}
      >
        {children ??
          items.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
      </OwlCarousel>
    </div>
  );
};

export default CustomSlider;
