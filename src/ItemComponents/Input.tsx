import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = (inputProps: any) => (
  <div>
    {inputProps.label}
    <TextField
      type="text"
      placeholder={inputProps.text}
      value={inputProps.value}
      disabled={!!inputProps.value}
      multiline
    />
  </div>
);
export default Input;
