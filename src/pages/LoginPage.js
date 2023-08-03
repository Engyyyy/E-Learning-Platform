import {
  Modal,
  Typography,
  FormLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Stack,
  DialogActions,
} from "@mui/material";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store";
import EyeIcon from "../assets/eye-icon.svg";
import { useLoginUserMutation } from "../store";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [doLogin, result] = useLoginUserMutation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (result.data) {
      dispatch(login());
      console.log(result.error);
    }
  });

  const handleLogin = () => {
    doLogin({ email, password });
  };

  return (
    <Modal open={true}>
      <Dialog open>
        <DialogTitle margin="20px 0px 15px 0px" textAlign="center" variant="h2">
          Welcome Back
        </DialogTitle>
        <DialogContent>
          <Stack spacing="10px">
            <FormLabel sx={{ fontSize: "16px", fontWeight: 600 }}>
              Phone Number or IP Number
            </FormLabel>
            <OutlinedInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: "430px", fontSize: "18px", fontWeight: 400 }}
              placeholder="Enter your phone number or IP number"
            />
            <FormLabel sx={{ fontSize: "16px", fontWeight: 600 }}>
              Password
            </FormLabel>
            <OutlinedInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: "430px", fontSize: "18px", fontWeight: 400 }}
              placeholder="Enter your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <img src={EyeIcon} alt="eye-icon" />
                  </IconButton>
                </InputAdornment>
              }
            />
            <Typography
              fontSize="14x"
              fontWeight={600}
              color="#2A313B"
              fontFamily="Montserrat"
              textAlign="end"
              style={{ cursor: "pointer" }}
            >
              Forgot Password?
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack
            spacing="25px"
            width="100%"
            alignItems="center"
            marginBottom="15px"
          >
            <Button
              style={{ width: "430px", height: "60px" }}
              variant="contained"
              onClick={handleLogin}
            >
              {result.isLoading ? (
                <RefreshSharpIcon
                  sx={{
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                      "0%": {
                        transform: "rotate(0deg)",
                      },
                      "100%": {
                        transform: "rotate(360deg)",
                      },
                    },
                  }}
                />
              ) : (
                "Login"
              )}
            </Button>
            {result.error && (
              <Typography color="red">Incorrect Email or Password</Typography>
            )}
            <Stack direction="row" spacing="5px">
              <Typography
                fontFamily="Montserrat"
                fontSize="14px"
                fontWeight={300}
                color="#728397"
              >
                New User?
              </Typography>
              <Typography
                fontFamily="Montserrat"
                fontSize="14px"
                fontWeight={700}
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Sign up
              </Typography>
            </Stack>
          </Stack>
        </DialogActions>
      </Dialog>
    </Modal>
  );
}

export default LoginPage;
