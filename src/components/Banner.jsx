import React, { useState } from "react";
import contentBanner from "../contants/ContentBanner";

function Banner() {
  const [x, setX] = useState(0);

  const handleClickPrev = () => {
    x === 0 ? setX(-100 * (contentBanner.length - 1)) : setX(x + 100);
  };

  const handleClickNext = () => {
    x === -100 * (contentBanner.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carousel-banner">
      {contentBanner.map((item, index) => {
        return (
          <div
            key={index}
            className="banner-slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <img className="slide-image" src={item.image} alt={item.title} />
          </div>
        );
      })}

      {/* button */}
      <button id="prev-slide" onClick={handleClickPrev}>
        <i className="fas fa-chevron-circle-left"></i>
      </button>
      <button id="next-slide" onClick={handleClickNext}>
        <i className="fas fa-chevron-circle-right"></i>
      </button>
    </div>
  );
}

export default Banner;
