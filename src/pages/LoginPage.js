import {
  Modal,
  Typography,
  FormLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  InputAdornment,
  IconButton,
  Button,
  Stack,
  DialogActions,
} from "@mui/material";
import Input from "../components/Input";
import EyeIcon from "../assets/eye-icon.svg";

function LoginPage() {
  return (
    <Modal open={true}>
      <Dialog open>
        <DialogTitle margin="20px 0px 15px 0px" textAlign="center" variant="h2">
          Welcome Back
        </DialogTitle>
        <form>
          <DialogContent>
            <Stack spacing="10px">
              <FormLabel sx={{ fontSize: "16px", fontWeight: 600 }}>
                Phone Number or IP Number
              </FormLabel>
              <Input placeholder="Enter your phone number or IP number" />
              <FormLabel sx={{ fontSize: "16px", fontWeight: 600 }}>
                Password
              </FormLabel>
              <Input
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
              >
                Login
              </Button>
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
        </form>
      </Dialog>
    </Modal>
  );
}

export default LoginPage;
