import { useState } from "react";
import { OutlinedInput } from "@mui/material";

function Input({ placeholder, ...rest }) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <OutlinedInput
      value={text}
      onChange={handleChange}
      style={{ width: "430px", fontSize: "18px", fontWeight: 400 }}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;
