import { Slider } from "@material-ui/core";
import React, { useState } from "react";

const LeftFilter = () => {
  const [value, setValue] = useState(0);

  const max = 15000000;

  const step = 1000000;

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="left-filter">
      <div className="filter-by">
        <span>Filter By</span>
      </div>
      <div className="filter-categories">
        <h5>Categories</h5>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              Vans
            </label>
            <span>(12)</span>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              Vans
            </label>
            <span>(12)</span>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              Vans
            </label>
            <span>(12)</span>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              Vans
            </label>
            <span>(12)</span>
          </li>
        </ul>
      </div>
      <div className="filter-price">
        <h5>Price</h5>
        <span>{`${value} VNĐ - ${max} VNĐ`}</span>
        <Slider
          className="filter-price-slider"
          value={value}
          onChange={handleChange}
          max={max}
          step={step}
          aria-labelledby="continuous-slider"
        />
      </div>

      <div className="filter-size">
        <h5>Size</h5>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              L
            </label>
            <span>(12)</span>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              XL
            </label>
            <span>(12)</span>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="" className="pl-2">
              XXL
            </label>
            <span>(12)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftFilter;
