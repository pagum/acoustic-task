import React from "react";
import Typography from "@material-ui/core/Typography";

import { apiUrl } from "../App";
import { ComponentWrapper, ImageContainer } from "./ItemComponents.style";
import { ImageValue } from "../Content/content.type";

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
      <Typography variant="h6">{label}</Typography>
      <ImageContainer src={apiUrl + resourceUri} alt={alternativeText} />
    </ComponentWrapper>
  );
};

export default Image;
