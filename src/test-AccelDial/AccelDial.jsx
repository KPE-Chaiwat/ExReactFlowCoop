import React from "react";
import GaugeChart from "react-gauge-chart";

const styles = {
  dial: {
    display: "inline-block",
    width: `500px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
  },
  title: {
    fontSize: "1em",
    color: "#000",
  },
};

const AccelDial = ({ id, value, title }) => {
  let percent = value / 100;
  // value: "-50" -> percent: 0
  // value: "0" ---> percent: .5
  // value: "50" ---> percent: 1
  // -25 ... .5 + (-25/100) = .25
  // 25 ...  .5 + (25/100) = .75
  // -110 .. .5 + (-110/100) = -0.6

  return (
    <div style={styles.dial}>
      <GaugeChart
        id={id}
        nrOfLevels={20}
        arcsLength={[
          0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
          0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
        ]}
        colors={["green", "orange", "red"]}
        arcPadding={0.01}
        percent={percent}
        textColor={"#000000"}
        needleColor={"#5392ff"}
        //         hideText={true}
        formatTextValue={(value) => value}
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default AccelDial;
