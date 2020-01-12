import React from "react";

import { ImageValue } from "../Content/content.type";
import Typography from "@material-ui/core/Typography";
import { getComponentByElementType } from "../Content/contentItem.helpers";

export interface ItemComponentProps {
  label: string;
  key?: string;
  elementValue: string | ImageValue;
  elementKey: string;
  helpText?: string;
  fieldLabel?: string;
  fieldType?: string;
  allowMultipleValues?: boolean;
  minimumValues?: number;
  placeholder?: {
    show: boolean;
    text: string;
  };
  elementType: string;
  elementValues?: string[];
}
const ItemComponent = ({
  label,
  minimumValues,
  placeholder,
  elementValue,
  elementKey,
  elementType,
  elementValues
}: ItemComponentProps) => (
  <div key={elementKey}>
    {getComponentByElementType({
      label,
      minimumValues,
      placeholder,
      elementValue,
      elementKey,
      elementType,
      elementValues
    })}
  </div>
);

export default ItemComponent;
