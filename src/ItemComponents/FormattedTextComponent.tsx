import React from "react";
import TextField from "@material-ui/core/TextField";
import ReactHtmlParser from "react-html-parser";

const FormattedTextComponent = (componentProps: any) => (
  <div>
    {componentProps.label}
    {componentProps.values.map((x: any) => (
      <div>{ReactHtmlParser(x)}</div>
    ))}
  </div>
);

export default FormattedTextComponent;
