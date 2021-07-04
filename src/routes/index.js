import NotFound from "../components/NotFound";
import { routePath } from "../contants/routes";
import LogIn from "../features/Auth/LogIn";
import Register from "../features/Auth/Register";
import Categories from "../features/Category";
import Home from "../features/Home";
import Products from "../features/Products";
import SearchPage from "../features/SearchPage";

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
    path: routePath.PRODUCT,
    component: () => <Products />,
    exact: false,
    isProtected: false,
  },
  {
    path: routePath.CATEGORIES,
    component: () => <Categories />,
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
