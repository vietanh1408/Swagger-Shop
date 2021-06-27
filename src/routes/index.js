import NotFound from "../components/NotFound";
import Register from "../features/Auth/Register";
import LogIn from "../features/Auth/LogIn";
import Home from "../features/Home";
import Products from "../features/Products";
import SearchPage from "../features/SearchPage";
import CartPage from "../features/Cart/index";
import { routePath } from "../contants/routes";

export const routes = [
  {
    path: routePath.HOME,
    component: () => <Home />,
    exact: true,
    isProtected: false,
  },
  {
    path: routePath.LOGIN,
    component: () => <LogIn />,
    exact: false,
    isProtected: false,
  },
  {
    path: routePath.REGISTER,
    component: () => <Register />,
    exact: false,
    isProtected: false,
  },
  {
    path: routePath.CART,
    component: () => <CartPage />,
    exact: false,
    isProtected: true,
  },
  {
    path: routePath.PRODUCT,
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
    path: routePath.SEARCH,
    component: () => <SearchPage />,
    exact: false,
    isProtected: false,
  },
  {
    path: routePath.NOT_FOUND,
    component: () => <NotFound />,
    exact: false,
    isProtected: false,
  },
];
