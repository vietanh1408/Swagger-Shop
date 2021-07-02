import React, { useEffect, useState } from "react";
import NavLeft from "./components/NavLeft";
import NavRight from "./components/NavRight";
import logo from "../../assets/images/logo.png";

function Header() {
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleShowMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className={!isScroll ? "header" : "header header-fixed"}>
        <div className="container">
          <div className="row">
            <div className="col col-md-5">
              <NavLeft
                openMenu={openMenu}
                handleShowMenuMobile={handleShowMenuMobile}
              />
            </div>
            <div
              className="col col-md-2 p-lg-0 header-logo"
              style={{ height: "100%" }}
            >
              <img
                src="//bizweb.dktcdn.net/100/347/923/themes/742041/assets/logo.png?1619251219942"
                alt="logo"
                style={{ height: "100%" }}
              />
            </div>
            <div className="col col-md-5 p-lg-0">
              <NavRight />
            </div>
          </div>
        </div>
      </div>

      {openMenu && <div className="modal" onClick={handleShowMenuMobile}></div>}
    </>
  );
}

export default Header;
