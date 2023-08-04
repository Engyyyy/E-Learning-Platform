import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { useLoginUserMutation } from "../store";
import LoginContent from "../components/LoginContent";
import LoginActions from "../components/LoginActions";
import closeIcon from "../assets/close-icon.svg";

function LoginPage({ isOpen, closeLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [doLogin, result] = useLoginUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(login());
    }
  });

  const handleLogin = () => {
    doLogin({ email, password });
  };

  const handleClose = () => closeLogin();

  return (
    <Dialog position="relative" open={isOpen} onClose={handleClose}>
      <IconButton
        onClick={handleClose}
        style={{ width: "auto", right: "0px", position: "absolute" }}
      >
        <img src={closeIcon} alt="close-icon" />
      </IconButton>
      <DialogTitle margin="20px 0px 15px 0px" textAlign="center" variant="h2">
        Welcome Back
      </DialogTitle>
      <LoginContent
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <LoginActions handleLogin={handleLogin} loginResult={result} />
    </Dialog>
  );
}

export default LoginPage;
