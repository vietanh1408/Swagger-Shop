import { capitalize } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import './App.scss'
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
import { fb } from './service/firebase'

function App() {

  /* const [showBtn, setShowBtn] = useState(false)

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  useEffect(() => {
    window.onscroll = function () { scrollFunction() }
  }, [])

  const handleBackToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  } */


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

  const dispatch = useDispatch()

  const history = useHistory()

  const { authUser } = useAuth()

  const authResolved = useResolved(authUser)

  /* useEffect(() => {
    if (authResolved) {
      history.push(!!authUser === false ? '/sign-in' : `${history.goBack()}`)
    }
  }, [authUser, authResolved, history]) */

  useEffect(() => {
    fb.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('user logged in: ', user.email)
        dispatch(login(user.email))
      } else {
        console.log('user logged out')
      }
    })
  }, [])

  return (
    <div className="app">
      {/* header */}
      <Header />


      {/* content */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={LogIn} />
        <Route path="/sign-up" component={Register} />
        <Route path="/cart" component={CartPage} />
        <Route path="/products" component={Products} />
        <Route path="/account" component={Account} />
        <Route path="/wishlist" component={WishList} />
        <Route component={NotFound} />
      </Switch>


      {/* footer */}
      <Footer />

      {/* btn back to top */}
      {/* {showBtn && <i className="fas fa-arrow-circle-up btn-back-to-top" onClick={handleBackToTop}></i>} */}
    </div>
  )
}

export default App
