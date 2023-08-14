import { Link } from "react-router-dom";
import { Button, Stack, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import ShoppingCartIcon from "../../assets/header/shopping-cart-icon.svg";
import NotificationsIcon from "../../assets/header/notifications-icon.svg";
import AvatarIcon from "../../assets/header/avatar.svg";
import SearchBar from "./SearchBar";

function Header({ openLogin }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const loggedOutHeader = (
    <>
      <IconButton>
        <img src={ShoppingCartIcon} alt="shopping-cart-icon" />
      </IconButton>
      <Button variant="text" onClick={openLogin}>
        Login
      </Button>
      <Button style={{ whiteSpace: "nowrap" }} variant="contained">
        Sign Up
      </Button>
    </>
  );
  const loggedInHeader = (
    <>
      <IconButton>
        <img
          width="22px"
          height="27px"
          src={NotificationsIcon}
          alt="notifications-icon"
        />
      </IconButton>
      <IconButton>
        <img src={ShoppingCartIcon} alt="shopping-cart-icon" />
      </IconButton>
      <IconButton>
        <img width="62px" height="62px" src={AvatarIcon} alt="avatar-icon" />
      </IconButton>
    </>
  );
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems="center"
      width="100%"
      sx={{ backgroundColor: "white" }}
      padding="20px 80px 20px 80px"
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar placeholder="What you want to learn?" />
      <Stack
        direction="row"
        spacing="15px"
        justifyContent="end"
        alignItems="center"
      >
        {isLoggedIn ? loggedInHeader : loggedOutHeader}
      </Stack>
    </Stack>
  );
}

export default Header;
