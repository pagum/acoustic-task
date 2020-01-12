import React from "react";
import { apiUrl } from "../App";

const Image = (imageProps: any) => {
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
    <div>
      {label}
      <img src={apiUrl + resourceUri} alt={alternativeText} />
    </div>
  );
};
export default Image;
