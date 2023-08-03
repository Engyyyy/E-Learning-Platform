import { Modal, Dialog, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { useLoginUserMutation } from "../store";
import LoginContent from "../components/LoginContent";
import LoginActions from "../components/LoginActions";

function LoginPage({ isOpen }) {
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

  return (
    <Modal open={isOpen}>
      <Dialog open>
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
    </Modal>
  );
}

export default LoginPage;
