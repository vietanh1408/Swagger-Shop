// libs
import React from "react";
import { useHistory } from "react-router-dom";

// custom hooks
import { useAuthLogin } from "../../../hooks/useAuth";

// components
import LogInForm from "./Form";

function LogIn() {
  const { user, isLoading, onLogin } = useAuthLogin();

  const history = useHistory();

  if (user) {
    history.goBack();
  }

  return (
    <div className="log-in">
      <div className="container">
        <LogInForm onSubmit={(values) => onLogin(values)} loading={isLoading} />
      </div>
    </div>
  );
}

export default LogIn;
