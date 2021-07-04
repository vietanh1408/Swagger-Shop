// libs
import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackToTop from "./components/BacktoTop";

// routes
import ProtectedRoute from "./hocs/ProtectedRoute";
import { routes } from "./routes";

// scss
import "./scss/index.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const App = () => {
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
      <BackToTop />
    </div>
  );
};

export default App;
