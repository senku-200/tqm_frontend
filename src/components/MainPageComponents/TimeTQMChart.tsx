"use client";

import { useState, useEffect } from "react";
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
  const [labels, setLabels] = useState<string[]>(["0", "2", "4", "6", "8", "10"]);
  const [dataPoints, setDataPoints] = useState<number[]>([10, 30, 50, 40, 60, 80]);

  useEffect(() => {
    // Simulate live data updates every 2 seconds
    const interval = setInterval(() => {
      setLabels((prev) => {
        const newLabel = (parseInt(prev[prev.length - 1]) + 2).toString(); // Increment time
        return [...prev, newLabel].slice(-10); // Keep last 10 labels
      });

      setDataPoints((prev) => {
        const newValue = Math.floor(Math.random() * 100); // Simulated data
        return [...prev, newValue].slice(-10); // Keep last 10 values
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "TQM",
        data: dataPoints,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
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
        text: "Live Time vs TQM Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (seconds)",
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
