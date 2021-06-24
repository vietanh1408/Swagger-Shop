import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NavLeft({ openMenu, handleShowMenuMobile }) {
  const handleShowProductsMenu = () => {
    const productsMenu = document.querySelector(
      ".header__nav-left__menu-decorations"
    );
    productsMenu.style.display = "block";
  };

  const handleHideProductMenu = () => {
    const productsMenu = document.querySelector(
      ".header__nav-left__menu-decorations"
    );
    productsMenu.style.display = "none";
  };

  const wishlist = useSelector((state) => state.wishlist);
  const categoryList = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getCategories())
  // }, [])

  return (
    <>
      <div className="header__menu-icon" onClick={handleShowMenuMobile}>
        <i className="fas fa-bars"></i>
      </div>

      <ul
        className={`${
          openMenu
            ? "header__menu-list"
            : "header__menu-list header__menu-list--close"
        }`}
      >
        <li className="header__menu-list__item">
          <span className="mt-1">
            <i className="fas fa-random mr-2"></i>
            Compare (<span>0</span>)
          </span>
          <span className="mt-1">
            <i className="far fa-heart mr-2"></i>
            Wishlist (<span>{wishlist.length}</span>)
          </span>
        </li>
        <li className="header__menu-list__item">
          MENU
          <i className="fas fa-arrow-left" onClick={handleShowMenuMobile}></i>
        </li>
        <li className="header__menu-list__item" onClick={handleShowMenuMobile}>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="header__menu-list__item header__menu-list__item-decorations">
          <NavLink
            to="/products"
            onMouseOver={handleShowProductsMenu}
            onMouseLeave={handleHideProductMenu}
            onClick={handleShowProductsMenu}
          >
            Products
            {/* {!isScreenMobile ? (<i className="fas fa-angle-down"></i>) : (<i className="fas fa-plus"></i>)} */}
          </NavLink>
          <ul
            className="header__nav-left__menu-decorations"
            onMouseOver={handleShowProductsMenu}
            onMouseLeave={handleHideProductMenu}
          >
            {categoryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/products/category/${item}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="header__menu-list__item" onClick={handleShowMenuMobile}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li className="header__menu-list__item" onClick={handleShowMenuMobile}>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavLeft;

{
  /* <ul className='header__nav-left m-0 p-0 d-flex justify-content-start align-items-center h-100 w-100'>
    <NavLink to="/home">
        Home
    </NavLink>
    <NavLink to="/abc">
        Deco
        <ExpandMoreIcon style={{ fontSize: '0.9rem' }} />
        <div className="header__nav-left__menu-deco">
            <DecoMenu />
        </div>
    </NavLink>
    <NavLink to="/b">
        Decorations
        <ExpandMoreIcon style={{ fontSize: '0.9rem' }} />
        <div className="header__nav-left__menu-decorations">
            <DecorationsMenu />
        </div>
    </NavLink>
    <NavLink to="/xyz">Contact Us</NavLink>
    <NavLink to="/a">About Us</NavLink>
</ul> */
}
