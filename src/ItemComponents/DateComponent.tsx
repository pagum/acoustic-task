import React from "react";
import moment from "moment";

const DateComponent = (componentProps: any) => {
  const formattedDate = moment(componentProps.date).format("MM-DD-YYYY  HH:mm");
  return (
    <div>
      {componentProps.label}
      {formattedDate}
    </div>
  );
};

export default DateComponent;
