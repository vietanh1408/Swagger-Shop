import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.authentication);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
