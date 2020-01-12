import React from "react";
import moment from "moment";

import { ComponentWrapper } from "./ItemComponents.style";

interface DateProps {
  label: string;
  date: string;
}

const DateComponent = ({ label, date }: DateProps) => {
  const formattedDate = moment(date).format("MM-DD-YYYY  HH:mm");
  return (
    <ComponentWrapper>
      {label}
      {formattedDate}
    </ComponentWrapper>
  );
};

export default DateComponent;
