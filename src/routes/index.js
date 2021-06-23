import Account from "../features/Account";
import CartPage from "../features/Cart";
import Home from "../features/Home";
import Products from "../features/Products";
import WishList from "../features/WishList";
import NotFound from "../components/NotFound";
import LogIn from "../features/Auth/components/LogIn";
import Register from "../features/Auth/components/Register";

export const routes = [
    {
        path: '/',
        component: () => <Home/>,
        exact: true,
    }, 
    {
        path: '/sign-in', 
        component: () => <LogIn/>,
        exact: false,
    },
    {
        path: '/sign-up',
        component: () => <Register/>,
        exact: false,
    },
    {
        path: '/cart',
        component: () => <CartPage/>,
        exact: false,
    },
    {
        path: '/products',
        component: () => <Products/>,
        exact: false,
    },
    {
        path: '/account',
        component: () => <Account/>,
        exact: false,
    }, 
    {
        path: '/wishlist',
        component: () => <WishList/>,
        exact: false,
    }, 
    {
        path: '',
        component: () => <NotFound/>,
        exact: false
    }
]