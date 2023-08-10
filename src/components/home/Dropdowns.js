import { FormControl, InputLabel, Select, Stack } from "@mui/material";
import DownArrow from "../../assets/home/arrow-down-icon.svg";

function Dropdowns() {
  return (
    <Stack direction="row" justifyContent="center" spacing="40px">
      <Stack>
        <FormControl>
          <InputLabel
            sx={{ fontSize: "12px", fontWeight: 500, color: "#8E8E93" }}
          >
            Choose your curriculum
          </InputLabel>
          <Select
            value=""
            style={{
              backgroundColor: "white",
              width: "300px",
            }}
            IconComponent={() => (
              <img
                src={DownArrow}
                alt="down arrow"
                style={{ cursor: "pointer" }}
              />
            )}
          />
        </FormControl>
      </Stack>
      <Stack>
        <FormControl>
          <InputLabel
            sx={{ fontSize: "12px", fontWeight: 500, color: "#8E8E93" }}
          >
            Choose your study phase
          </InputLabel>
          <Select
            value=""
            style={{
              backgroundColor: "white",
              paddingRight: "20px",
              width: "300px",
            }}
            IconComponent={() => (
              <img
                src={DownArrow}
                alt="down arrow"
                style={{ cursor: "pointer" }}
              />
            )}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default Dropdowns;
