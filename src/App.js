import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import NotFound from './components/NotFound'
import LogIn from './features/Auth/components/LogIn'
import Register from './features/Auth/components/Register'
import { login } from './features/Auth/userSlice'
import Home from './features/Home'
import Products from './features/Products'
import ShoppingCart from './features/ShoppingCart'
import { useAuth } from './hooks'
import { useResolved } from './hooks/useResolved'
import { fb } from './service/firebase'

function App() {

  const [showBtn, setShowBtn] = useState(false)

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  window.onscroll = function () { scrollFunction() }

  const handleBackToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }



  /*   useEffect(() => {
      fb.firestore
        .collection('ecolifeUsers')
        .where('userName', '==', 'vietanh1408')
        .get()
        .then(res => {
          const users = res.docs[0]?.data()
          console.log('users: ', users)
        }).catch(error => {
          console.log(error)
        })
    }, []) */

  const history = useHistory()

  const { authUser } = useAuth()

  const authResolved = useResolved(authUser)

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/sign-in')
    }
  }, [authUser, authResolved, history])

  return (
    <div className="app">
      {/* header */}
      <Header />


      {/* content */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={LogIn} />
        <Route path="/sign-up" component={Register} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>


      {/* footer */}
      <div style={{ height: '1000px', backgroundColor: 'gray' }}></div>

      {/* btn back to top */}
      {showBtn && <i className="fas fa-arrow-circle-up btn-back-to-top" onClick={handleBackToTop}></i>}
    </div>
  )
}

export default App
