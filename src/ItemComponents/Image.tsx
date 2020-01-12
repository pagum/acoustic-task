import React from "react";
import { apiUrl } from "../App";
import { ComponentWrapper } from "./ItemComponents.style";
import { ImageValue } from "../content.type";

interface ImageProps {
  label: string;
  value: ImageValue;
}

const Image = (imageProps: ImageProps) => {
  const {
    label,
    value: {
      leadImage: {
        asset: { resourceUri, altText, id }
      },
      leadImageCaption: { value: leadImageCaptionValue },
      leadImageCredit: { value: leadImageCreditvalue }
    }
  } = imageProps;

  const alternativeText =
    altText.length > 0 ? altText.length : leadImageCaptionValue;

  return (
    <ComponentWrapper>
      {label}
      <img src={apiUrl + resourceUri} alt={alternativeText} />
    </ComponentWrapper>
  );
};
export default Image;
