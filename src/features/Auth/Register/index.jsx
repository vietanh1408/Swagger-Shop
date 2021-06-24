import React from "react";
import { useDispatch } from "react-redux";
import { authRegister } from "../../../reducer/authentication";
import RegisterForm from "./Form";

function Register() {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log("values.,,,,,,,,,,,,,,,,,", values);
    dispatch(authRegister(values));
  };

  return (
    <div className="register">
      <div className="container">
        <RegisterForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Register;
