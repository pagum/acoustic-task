import React from "react";
import * as R from "ramda";

import { articleType } from "../data";
import Input from "../ItemComponents/Input";
import FormattedTextComponent from "../ItemComponents/FormattedTextComponent";
import DateComponent from "../ItemComponents/DateComponent";
import Image from "../ItemComponents/Image";
import ItemComponent, {
  ItemComponentProps
} from "../ItemComponents/ItemComponent";
import { ImageValue } from "./content.type";

interface ItemElement {
  elementType: string;
  key: string | number;
  value?: string | ImageValue;
  values?: string[];
  typeRef?: { id: string };
}

interface PrepareElementInterface {
  itemElements: ItemElement[];
}

enum ElementType {
  Text = "text",
  FormattedText = "formattedtext",
  DateTime = "datetime",
  Group = "group"
}

export const prepareElement = ({ itemElements }: PrepareElementInterface) => {
  const { elements: articleElements } = articleType;
  const preparedElement =
    itemElements &&
    itemElements.map((element: ItemElement) => {
      const articleElement = R.find(
        R.propEq("elementType", element.elementType)
      )(articleElements);

      const {
        value: elementValue,
        key: elementKey,
        elementType,
        values: elementValues
      } = element;

      return ItemComponent({
        ...articleElement,
        elementValue,
        elementType,
        elementKey,
        elementValues
      });
    });

  return preparedElement;
};

export const getComponentByElementType = ({
  label,
  minimumValues,
  placeholder,
  elementValue,
  elementKey,
  elementType,
  elementValues
}: ItemComponentProps) => {
  switch (elementType) {
    case ElementType.Text:
      return (
        <Input
          label={`${label}-${elementKey}`}
          text={placeholder!.text}
          value={elementValue as string}
        ></Input>
      );

    case ElementType.FormattedText:
      const shouldDisplayComponent = !R.isNil(minimumValues)
        ? elementValues && elementValues.length >= minimumValues
        : true;
      return shouldDisplayComponent ? (
        <FormattedTextComponent
          label={label}
          text={placeholder!.text}
          values={elementValues!}
        ></FormattedTextComponent>
      ) : null;

    case ElementType.DateTime:
      return (
        <DateComponent
          label={label}
          date={elementValue as string}
        ></DateComponent>
      );

    case ElementType.Group:
      return <Image label={label} value={elementValue as ImageValue}></Image>;

    default:
      return null;
  }
};
