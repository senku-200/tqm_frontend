"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const TimeTQMChart = () => {
  const data = {
    labels: ["0", "2", "4", "6", "8", "10"], // X-axis (Time in hours)
    datasets: [
      {
        label: "TQM",
        data: [10, 30, 50, 40, 60, 80], // Y-axis (TQM values)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth line
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", 
      },
      title: {
        display: true,
        text: "Time vs TQM Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (hours)",
        },
      },
      y: {
        title: {
          display: true,
          text: "TQM",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TimeTQMChart;
