import { Stack, Button, Typography, DialogActions } from "@mui/material";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";

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
