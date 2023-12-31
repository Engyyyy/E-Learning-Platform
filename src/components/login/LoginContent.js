import {
  DialogContent,
  Stack,
  OutlinedInput,
  FormLabel,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import EyeIcon from "../../assets/login/eye-icon.svg";

function LoginContent({ email, setEmail, password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
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
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            width: "430px",
            fontSize: "18px",
            fontWeight: 400,
          }}
          placeholder="Enter your password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={toggleShowPassword}>
                <img src={EyeIcon} alt="eye-icon" />
              </IconButton>
            </InputAdornment>
          }
        />
        <Typography
          fontSize="14px"
          fontWeight={500}
          color="#2A313B"
          fontFamily="Montserrat"
          textAlign="end"
          style={{ cursor: "pointer" }}
        >
          Forgot Password?
        </Typography>
      </Stack>
    </DialogContent>
  );
}

export default LoginContent;
