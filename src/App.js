import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Account from './features/Account'
import LogIn from './features/Auth/components/LogIn'
import Register from './features/Auth/components/Register'
import { login } from './features/Auth/userSlice'
import CartPage from './features/Cart'
import Home from './features/Home'
import Products from './features/Products'
import WishList from './features/WishList'
import { useAuth } from './hooks'
import { useResolved } from './hooks/useResolved'
import './scss/index.scss'
import { fb } from './service/firebase'
import { routes } from './routes'

function App() {

  return (
    <div className="app">
      {/* header */}
      <Header />


      {/* content */}

      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={LogIn} />
        <Route path="/sign-up" component={Register} />
        <Route path="/cart" component={CartPage} />
        <Route path="/products" component={Products} />
        <Route path="/account" component={Account} />
        <Route path="/wishlist" component={WishList} />
        <Route component={NotFound} /> */}
        {routes.map((item, index) => {
          return <Route 
          exact={item.exact} 
          path={item.path} 
          component={item.component} 
          key={index} />
        })}
      </Switch>


      {/* footer */}
      <Footer />

      {/* btn back to top */}
      {/* {showBtn && <i className="fas fa-arrow-circle-up btn-back-to-top" onClick={handleBackToTop}></i>} */}
    </div>
  )
}

export default App
