import { useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";

// components
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import SearchBar from "../SearchBar";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  const handleShowMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const isTabletOrMobile = useMediaQuery("(max-width: 1224px)");

  return (
    <>
      <div className={!isScroll ? "header" : "header header-fixed"}>
        <div className="container" style={{ height: "100%" }}>
          <div className="row">
            <div className="col col-md-5">
              <NavLeft
                openMenu={openMenu}
                handleShowMenuMobile={handleShowMenuMobile}
              />
            </div>
            <div className="col col-md-2 header-logo">
              <span className="logo-word">
                swagger<i className="far fa-star logo-icon"></i>
              </span>
            </div>
            <div className="col col-md-5">
              <NavRight />
            </div>
          </div>
        </div>
        {isTabletOrMobile && (
          <SearchBar
            showSearchBar={isTabletOrMobile}
            classText="search-bar-mobile"
          />
        )}
      </div>
    </>
  );
};

export default Header;
