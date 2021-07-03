// libs
import { Badge } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import SearchBar from "../SearchBar";
import SettingMenu from "./SettingMenu";

const NavRight = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const screenWidth = window.innerWidth;

  const [isScreenMobile, setIsScreenMobile] = useState(false);

  useEffect(() => {
    if (screenWidth <= 960) {
      setIsScreenMobile(true);
    }

    if (screenWidth > 960) {
      setIsScreenMobile(false);
    }
    if (isScreenMobile) {
      setShowSearchBar(true);
    }
  }, [screenWidth]);

  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      <ul className="header__setting-list">
        <li className="header__setting-list__item">
          {!isScreenMobile && <SearchIcon onClick={handleShowSearchBar} />}
          <SearchBar
            showSearchBar={showSearchBar}
            isScreenMobile={isScreenMobile}
          />
        </li>
        <li className="header__setting-list__item">
          <Link to="">
            <Badge
              color="secondary"
              badgeContent={1}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <FavoriteBorderIcon />
            </Badge>
          </Link>
        </li>
        <li className="header__setting-list__item">
          <Link to="/cart">
            <Badge
              color="secondary"
              badgeContent={1}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </li>
        <li className="header__setting-list__item">
          <SettingMenu />
        </li>
      </ul>
    </>
  );
};

export default NavRight;
