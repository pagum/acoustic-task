import React from "react";
import * as R from "ramda";

import { prepareElement } from "./contentItem.helpers";
import { ContentType } from "./content.type";

interface ContentItemProps {
  item: ContentType;
}

const ContentItem = ({ item }: ContentItemProps) => {
  const elementsKeys = R.keys(item.elements);
  const elementsValues = R.values(item.elements);
  const itemElements = elementsKeys.map((key, index) => ({
    key,
    ...elementsValues[index]
  }));
  const element = prepareElement({ itemElements });
  return <div>{element}</div>;
};

export default ContentItem;
