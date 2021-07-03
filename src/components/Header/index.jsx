import React, { useEffect, useState } from "react";

// components
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

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
      </div>

      {openMenu && <div className="modal" onClick={handleShowMenuMobile}></div>}
    </>
  );
}

export default Header;
