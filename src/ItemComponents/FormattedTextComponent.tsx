import React from "react";
import ReactHtmlParser from "react-html-parser";
import Typography from "@material-ui/core/Typography";

import { ComponentWrapper } from "./ItemComponents.style";

interface FormattedTextProps {
  label: string;
  text: string;
  values: string[];
}

const FormattedTextComponent = ({ values, label }: FormattedTextProps) => (
  <ComponentWrapper>
    <Typography variant="h6">{label}</Typography>

    {values.map((value: string, index: number) => (
      <div key={index}>{ReactHtmlParser(value)}</div>
    ))}
  </ComponentWrapper>
);

export default FormattedTextComponent;
