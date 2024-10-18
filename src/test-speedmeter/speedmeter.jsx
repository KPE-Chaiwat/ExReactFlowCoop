import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    //     display: "inline-block",
    display: "grid",
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: "1em",
    color: "#000",
  },
};

const Speedometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        fluidWidth={true}
        forceRender={true}
        maxValue={120}
        minValue={-100}
        height={190}
        width={290}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={15}
        endColor="red"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default Speedometer;
