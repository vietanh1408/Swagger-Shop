import NotFound from "../components/NotFound";
import Register from "../features/Auth/Register";
import LogIn from "../features/Auth/LogIn";
import Home from "../features/Home";
import Products from "../features/Products";
import SearchPage from "../features/SearchPage";
import CartPage from "../features/Cart/index";

export const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
    isProtected: false,
  },
  {
    path: "/login",
    component: () => <LogIn />,
    exact: false,
    isProtected: false,
  },
  {
    path: "/register",
    component: () => <Register />,
    exact: false,
    isProtected: false,
  },
  {
    path: "/cart",
    component: () => <CartPage />,
    exact: false,
    isProtected: true,
  },
  {
    path: "/products",
    component: () => <Products />,
    exact: false,
    isProtected: false,
  },
  // {
  //     path: '/account',
  //     component: () => <Account/>,
  //     exact: false,
  //
  // },
  // {
  //     path: '/wishlist',
  //     component: () => <WishList/>,
  //     exact: false,
  // },
  {
    path: "/search",
    component: () => <SearchPage />,
    exact: false,
    isProtected: false,
  },
  {
    path: "",
    component: () => <NotFound />,
    exact: false,
    isProtected: false,
  },
];
