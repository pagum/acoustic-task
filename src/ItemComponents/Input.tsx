import React from "react";
import TextField from "@material-ui/core/TextField";
import { ComponentWrapper } from "./ItemComponents.style";

interface InputProps {
  label: string;
  text: string;
  value: string;
}

const Input = ({ label, text, value }: InputProps) => (
  <ComponentWrapper>
    {label}
    <TextField
      type="text"
      placeholder={text}
      value={value}
      disabled={!!value}
      multiline
    />
  </ComponentWrapper>
);

export default Input;
