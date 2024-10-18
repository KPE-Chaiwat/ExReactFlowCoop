import React from "react";
import Thermometer from "react-thermometer-chart";

const Thermometer_node = ({ id, value, title }) => {
  return (
    <div>
      <Thermometer
        width="100px"
        height="250px"
        steps={5}
        minValue={0}
        maxValue={100}
        currentValue={74}
        color="#85c1e9"
      />
    </div>
  );
};

export default Thermometer_node;
