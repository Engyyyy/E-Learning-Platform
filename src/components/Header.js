import { Button, Stack } from "@mui/material";
import logo from "../assets/logo.svg";
import ShoppingCartIcon from "../assets/shopping-cart-icon.svg";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <Stack direction="row" justifyContent={"space-between"} alignItems="center">
      <img
        src={logo}
        alt="logo"
        style={{ marginLeft: "75px", marginRight: "75px" }}
      />
      <Stack
        direction="row"
        spacing="30px"
        sx={{ flexGrow: 1 }}
        justifyContent="end"
        marginLeft="75px"
        marginRight="75px"
      >
        <SearchBar placeholder="What you want to learn?" />
        <Button variant="text" sx={{ padding: 0 }}>
          <img src={ShoppingCartIcon} alt="shopping cart icon" />
        </Button>
        <Button variant="text">Login</Button>
        <Button variant="contained">Sign Up</Button>
      </Stack>
    </Stack>
  );
}

export default Header;
