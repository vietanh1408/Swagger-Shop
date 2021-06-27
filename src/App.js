import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routes } from "./routes";
import "./scss/index.scss";
import ProtectedRoute from "./hocs/ProtectedRoute";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* content */}

      <Switch>
        {routes.map((item, index) => {
          if (item.isProtected) {
            return (
              <ProtectedRoute
                exact={item.exact}
                path={item.path}
                component={item.component}
                key={index}
              />
            );
          } else {
            return (
              <Route
                exact={item.exact}
                path={item.path}
                component={item.component}
                key={index}
              />
            );
          }
        })}
      </Switch>

      {/* footer */}
      <Footer />

      {/* btn back to top */}
      {/* {showBtn && <i className="fas fa-arrow-circle-up btn-back-to-top" onClick={handleBackToTop}></i>} */}
    </div>
  );
}

export default App;
