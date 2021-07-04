import React from "react";
import HomeBannerBackground1 from "../../../assets/images/banner_3.png";
import HomeBannerBackground2 from "../../../assets/images/banner_4.png";

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-12 mt-4">
            <div className="banner-box">
              <img src={HomeBannerBackground1} alt="home-banner-1"></img>
            </div>
          </div>
          <div className="col col-md-6 col-12 mt-4">
            <div className="banner-box">
              <img src={HomeBannerBackground2} alt="home-banner-2"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
