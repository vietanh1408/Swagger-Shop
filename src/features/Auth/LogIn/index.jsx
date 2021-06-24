import React from "react";
import { useAuthLogin } from "../../../hooks/useAuth";
import LogInForm from "./Form";

function LogIn() {
  const { isLoading, onLogin } = useAuthLogin();

  return (
    <div className="log-in">
      <div className="container">
        <LogInForm onSubmit={(values) => onLogin(values)} loading={isLoading} />
      </div>
    </div>
  );
}

export default LogIn;
