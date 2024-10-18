import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const HalfDoughnutChart = ({ data, pointerValue }) => {
  const options = {
    rotation: -90, // Start angle of the chart
    circumference: 180, // Sweep angle of the chart (half doughnut)
    cutout: "70%", // The inner radius of the doughnut chart
    plugins: {
      beforeDraw: (chart) => {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;
        const angle = (pointerValue / 100) * Math.PI; // Convert the value to angle in radians

        ctx.save();
        ctx.translate(width / 2, height); // Move to the center bottom of the chart
        ctx.rotate(angle); // Rotate to the correct angle

        ctx.beginPath();
        ctx.moveTo(0, -height / 2); // Move pointer base
        ctx.lineTo(0, -height / 2 + 10); // Draw pointer
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      },
    },
  };

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Dataset",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} options={options} />;
};

export default HalfDoughnutChart;
