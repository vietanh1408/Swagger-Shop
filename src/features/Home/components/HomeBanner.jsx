import React from "react";
import HomeBannerBackground1 from "../../../assets/images/vans-background-1.jpg";
import HomeBannerBackground2 from "../../../assets/images/vans-background-2.jpg";

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-12 mt-4">
            <div className="banner-box">
              <img src={HomeBannerBackground1} alt=""></img>
            </div>
          </div>
          <div className="col col-md-6 col-12 mt-4">
            <div className="banner-box">
              <img src={HomeBannerBackground2} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
