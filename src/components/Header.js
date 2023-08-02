import { useContext } from "react";
import { Button, Stack, IconButton } from "@mui/material";
import UserContext from "../contexts/UserContext";
import logo from "../assets/logo.svg";
import ShoppingCartIcon from "../assets/shopping-cart-icon.svg";
import NotificationsIcon from "../assets/notifications-icon.svg";
import AvatarIcon from "../assets/avatar.svg";
import SearchBar from "./SearchBar";

function Header() {
  const { isLoggedIn } = useContext(UserContext);
  const loggedOutHeader = (
    <>
      <IconButton>
        <img src={ShoppingCartIcon} alt="shopping-cart-icon" />
      </IconButton>
      <Button variant="text">Login</Button>
      <Button variant="contained">Sign Up</Button>
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
      padding="20px 10px 20px 10px"
    >
      <img
        src={logo}
        alt="logo"
        style={{ marginLeft: "65px", marginRight: "185px" }}
      />
      <SearchBar placeholder="What you want to learn?" />
      <Stack
        direction="row"
        spacing="15px"
        sx={{ flexGrow: 1 }}
        justifyContent="end"
        alignItems="center"
        marginLeft="40px"
        marginRight="75px"
      >
        {isLoggedIn ? loggedInHeader : loggedOutHeader}
      </Stack>
    </Stack>
  );
}

export default Header;
