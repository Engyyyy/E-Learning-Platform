import {
  Stack,
  Button,
  Typography,
  DialogActions,
  CircularProgress,
} from "@mui/material";

function LoginActions({ handleLogin, loginResult }) {
  return (
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
          {loginResult.isLoading ? (
            <CircularProgress color="neutral" />
          ) : (
            "Login"
          )}
        </Button>
        {loginResult.error && (
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
  );
}

export default LoginActions;
