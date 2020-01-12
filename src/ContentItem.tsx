import React, { useState, useEffect } from "react";
import * as R from "ramda";
import { articleType } from "./data";
import { prepareElement } from "./contentItem.helpers";

interface ContentItemProps {
  item: any;
}

const ContentItem = ({ item }: ContentItemProps) => {
  const elementsKeys = R.keys(item.elements);
  const elementsValues = R.values(item.elements);
  console.log("vaaaal", item, elementsValues);
  const itemElements = elementsKeys.map((key, index) => ({
    key,
    ...elementsValues[index]
  }));
  console.log(itemElements);
  const x = prepareElement({ itemElements });
  console.log(x);
  return <div data-key="arrrrr">{x}</div>;
};
export default ContentItem;
