import React from "react";
import { Link } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import Clock from "./Clock";

function FlashDeal() {
  return (
    <div className="flash-deal">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-12">
            <div className="flash-deal__left">
              <div className="d-flex align-items-center ">
                <i className="fas fa-bolt"></i>
                <span className="m-0">Flash Deals</span>
              </div>
              <h3>Grab This Offer Now!</h3>
              <p>
                Flash Deals provides you high quality product at a big discount.
                Visiting Flash Deals, you can find what you want at a fairly low
                price as there are...
              </p>
              <Clock />
              <Link to="/products">
                <button>View All Products</button>
              </Link>
            </div>
          </div>
          <div className="col col-md-6 col-12">
            <div className="flash-deal__right">
              <ProductSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashDeal;
