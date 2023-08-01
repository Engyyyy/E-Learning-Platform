import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "../assets/search-icon.svg";

function SearchBar({ placeholder }) {
  const [selOption, setSelOption] = useState("");
  const [dispValue, setDispValue] = useState("");

  const handleDispValue = (event, newInputValue) => {
    setDispValue(newInputValue);
  };

  const handleSelectOption = (event, newValue) => {
    setSelOption(newValue);
  };

  return (
    <Autocomplete
      value={selOption}
      onChange={handleSelectOption}
      inputValue={dispValue}
      onInputChange={handleDispValue}
      freeSolo
      options={["a", "b", "c"]}
      renderInput={(params) => {
        return (
          <Stack direction="row">
            <TextField {...params} size="small" InputProps={{ placeholder }} />
            <Button variant="contained">
              <img src={SearchIcon} alt="search-icon" />
            </Button>
          </Stack>
        );
      }}
    />
  );
}

export default SearchBar;
