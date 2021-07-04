import React from "react";
import OwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import Product from "../../../components/Product/Product";

const ProductSlider = () => {
  const { items } = useSelector((state) => state.product);

  const rows = items.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <OwlCarousel
      className="owl-theme"
      autoplay={true}
      autoplayTimeout={3000}
      autoplayHoverPause={true}
      loop={true}
      margin={20}
      dots={false}
      nav={true}
      navClass={["prev-slide", "next-slide"]}
      lazyLoad={true}
      slideBy={2}
      responsive={{
        0: { items: 1 },
        450: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 },
      }}
    >
      {rows?.map((col, index) => {
        return (
          <div key={index}>
            <Product product={col[0]} />
            <Product product={col[1]} />
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default ProductSlider;
