import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Product from "../../../components/Product/Product";
import OwlCarousel from "react-owl-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 400,
    boxShadow: "none",
    /* [theme.breakpoints.down('xs')]: {
            display: 'none'
        } */
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
    backgroundSize: "50%",
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textAlign: "center",

    "& p": {
      fontWeight: "bold",
      fontSize: "1rem",
      color: "#000",
    },
  },
  action: {
    display: "flex",
    justifyContent: "space-between",

    "& p": {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },
}));

const ProductSlider = () => {
  const { items } = useSelector((state) => state.product);
  // const [productIndex, setProductIndex] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // const handleAddToCart = (product) => {};
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow arrow-next" onClick={onClick}>
  //       <i className="fas fa-chevron-circle-right"></i>
  //     </div>
  //   );
  // };
  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow arrow-prev" onClick={onClick}>
  //       <i className="fas fa-chevron-circle-left"></i>
  //     </div>
  //   );
  // };
  // const settings = {
  //   autoplay: false,
  //   infinite: true,
  //   lazyLoad: true,
  //   speed: 500,
  //   slidersToShow: 3,
  //   centerMode: true,
  //   centerPadding: "200px",
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   beforeChange: (current, next) => setProductIndex(next),
  //   responsive: [
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         centerPadding: "10px",
  //       },
  //     },
  //   ],
  // };

  // return (
  //   <div className="product-carousel">
  //     <Slider {...settings}>
  //       {items?.map((product, index) => (
  //         <div
  //           key={index}
  //           className={index === productIndex ? "slide activeSlide" : "slide"}
  //         >
  //           <Product product={product} />
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );

  return (
    <OwlCarousel
      className="owl-theme"
      items={4}
      rows={2}
      colSpan={2}
      loop={true}
      margin={10}
      nav={true}
      autoPlay={true}
      animateIn={`bounceInRight`}
      animateOut={`bounceInLeft`}
      navText={[
        '<i className="fas fa-chevron-circle-left"></i>',
        '<i className="fas fa-chevron-circle-right"></i>',
      ]}
    >
      {items?.map((product, index) => (
        <div key={index} className="item">
          <Product product={product} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default ProductSlider;
