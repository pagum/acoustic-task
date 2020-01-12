import React from "react";
import * as R from "ramda";

import { articleType } from "./data";
import Input from "./ItemComponents/Input";
import FormattedTextComponent from "./ItemComponents/FormattedTextComponent";
import DateComponent from "./ItemComponents/DateComponent";
import Image from "./ItemComponents/Image";
interface PrepareElementInterface {
  itemElements: any;
}

enum ElementType {
  Text = "text",
  FormattedText = "formattedtext",
  DateTime = "datetime",
  Group = "group"
}

export const prepareElement = ({ itemElements }: PrepareElementInterface) => {
  const { elements: articleElements } = articleType;
  console.log(itemElements);
  const x =
    itemElements &&
    itemElements.map((element: any) => {
      const articleElement = R.find(
        R.propEq("elementType", element.elementType)
      )(articleElements);
      // console.log(element.key, element.value, element.values, articleElement);
      const {
        value: elementValue,
        key: elementKey,
        elementType,
        values: elementValues
      } = element;
      console.log("x ", element);

      return ItemComponent({
        ...articleElement,
        elementValue,
        elementType,
        elementKey,
        elementValues
      });
    });
  return x;
};
interface ItemComponentProps {
  key: string;
  label: string;
  elementValue: any;
  elementKey: string;
  helpText?: string;
  fieldLabel?: string;
  fieldType?: string;
  allowMultipleValues?: any;
  minimumValues?: any;
  placeholder?: any;
  elementType: string;
  elementValues?: string[];
}
const ItemComponent = ({
  key,
  label,
  helpText,
  fieldLabel,
  fieldType,
  allowMultipleValues,
  minimumValues,
  placeholder,
  elementValue,
  elementKey,
  elementType,
  elementValues
}: ItemComponentProps) => {
  console.log({
    // key,
    // label,
    // helpText,
    // fieldLabel,
    // fieldType,
    // allowMultipleValues,
    // minimumValues,
    // placeholder,
    elementValue,
    elementKey,
    elementType
  });
  return (
    <div key={elementKey} data-key={elementKey}>
      {getComponentByElementType({
        key,
        label,
        helpText,
        fieldLabel,
        fieldType,
        allowMultipleValues,
        minimumValues,
        placeholder,
        elementValue,
        elementKey,
        elementType,
        elementValues
      })}
    </div>
  );
  {
    /* {elementKey}
      {placeholder?.show === true && (
        <Input
          label={label}
          text={placeholder.text}
          value={elementValue}
        ></Input>
      )} */
  }
};

const getComponentByElementType = ({
  key,
  label,
  helpText,
  fieldLabel,
  fieldType,
  allowMultipleValues,
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
          label={label}
          text={placeholder.text}
          value={elementValue}
        ></Input>
      );
      break;
    case ElementType.FormattedText:
      return (
        <FormattedTextComponent
          label={label}
          text={placeholder.text}
          values={elementValues}
        ></FormattedTextComponent>
      );
      break;
    case ElementType.DateTime:
      return <DateComponent label={label} date={elementValue}></DateComponent>;
      break;
    case ElementType.Group:
      console.log(elementValue, elementValues);
      return <Image label={label} value={elementValue}></Image>;
      break;
    default:
      return <div>dups</div>;
  }
};
