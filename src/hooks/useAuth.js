import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authLogin } from "../reducer/authentication";
import { fb } from "../service/firebase";
import useFullPageLoader from "./useFullPageLoader";

export const useAuth = () => {
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return {
    authUser,
  };
};

export const useAuthLogin = () => {
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.authentication
  );
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (values) => {
    await dispatch(authLogin(values));

    if (isAuthenticated) {
      history.push("/");
    }
  };

  return { user, isLoading, isAuthenticated, error, onLogin };
};
