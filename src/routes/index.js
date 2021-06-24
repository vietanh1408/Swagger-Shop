import NotFound from "../components/NotFound";
import Register from "../features/Auth/Register";
import LogIn from "../features/Auth/LogIn";
import Home from "../features/Home";
import Products from "../features/Products";

export const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/login",
    component: () => <LogIn />,
    exact: false,
  },
  {
    path: "/register",
    component: () => <Register />,
    exact: false,
  },
  // {
  //     path: '/cart',
  //     component: () => <CartPage/>,
  //     exact: false,
  // },
  {
    path: "/products",
    component: () => <Products />,
    exact: false,
  },
  // {
  //     path: '/account',
  //     component: () => <Account/>,
  //     exact: false,
  // },
  // {
  //     path: '/wishlist',
  //     component: () => <WishList/>,
  //     exact: false,
  // },
  {
    path: "",
    component: () => <NotFound />,
    exact: false,
  },
];
