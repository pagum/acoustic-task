import React from "react";

import { ImageValue } from "../content.type";
import { getComponentByElementType } from "../contentItem.helpers";

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
  <div key={elementKey} data-key={elementKey}>
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
