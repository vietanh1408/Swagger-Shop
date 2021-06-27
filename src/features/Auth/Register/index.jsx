// libs
import React from "react";
import { useHistory } from "react-router-dom";

// custom hook
import { useAuthRegister } from "../../../hooks/useAuth";

// components
import RegisterForm from "./Form";

function Register() {
  const { user, isLoading, onRegister } = useAuthRegister();

  const history = useHistory();

  if (user) {
    history.goBack();
  }

  return (
    <div className="register">
      <div className="container">
        <RegisterForm
          onSubmit={(values) => onRegister(values)}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default Register;
