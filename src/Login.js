import { Button } from "@mui/material";
import React from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"
          alt=""
        />
      </div>
      <Button variant="contained" color="primary" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
