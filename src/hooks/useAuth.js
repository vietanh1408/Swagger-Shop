import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authLogin, authRegister } from "../reducer/authentication";
import { toast } from "react-toastify";

export const useAuthLogin = () => {
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.authentication
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (values) => {
    const resultAction = await dispatch(authLogin(values));

    if (authLogin.fulfilled.match(resultAction)) {
      toast.success("Login successfully!");
      history.push("/");
    } else {
      toast.error(resultAction.payload.data.error);
    }
  };

  return { user, isLoading, isAuthenticated, error, onLogin };
};

export const useAuthRegister = () => {
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.authentication
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const onRegister = async (values) => {
    const resultAction = await dispatch(authRegister(values));

    if (authRegister.fulfilled.match(resultAction)) {
      toast.success("Register successfully!");
      history.push("/");
    } else {
      toast.error(resultAction.payload.data.error);
    }
  };

  return { user, isLoading, isAuthenticated, error, onRegister };
};
