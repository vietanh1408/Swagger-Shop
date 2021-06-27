import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("access-token");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
