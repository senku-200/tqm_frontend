"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  value: number; // Percentage value
  maxValue: number; // Maximum value (100 for percentages)
  label: string; // Main label (e.g., "Indoor PM 2.5")
  status: string; // Status text (e.g., "Unhealthy")
  color: string; // Primary color of the doughnut
}

const PercentageDoughnutChart: React.FC<DoughnutChartProps> = ({
  value,
  maxValue,
  label,
  status,
  color,
}) => {
  const data = {
    datasets: [
      {
        data: [value, maxValue - value], // Value and remaining
        backgroundColor: [color, "black"], // Primary color and gray background
        hoverBackgroundColor: [color, "#e0e0e0"],
        borderWidth: 0, // No border
        cutout: "70%", // Inner radius for the "donut" look
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
      legend: { display: false }, // Disable the legend
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "120px",
        textAlign: "center",
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
          {value}
        </p>
        <p style={{ margin: 0, fontSize: "12px" }}>{label}</p>
        <p style={{ margin: 0, fontSize: "12px", color: color }}>{status}</p>
      </div>
    </div>
  );
};

export default PercentageDoughnutChart;
