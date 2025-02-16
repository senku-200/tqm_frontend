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

const CO2Chart = () => {
  const [timeLabels, setTimeLabels] = useState<string[]>(["0", "2", "4", "6", "8", "10"]);
  const [co2Levels, setCO2Levels] = useState<number[]>([400, 420, 440, 460, 480, 500]); // Initial CO₂ levels (ppm)

  useEffect(() => {
    // Simulate CO₂ level updates every 2 seconds
    const interval = setInterval(() => {
      setTimeLabels((prev) => {
        const newTime = (parseInt(prev[prev.length - 1]) + 2).toString(); // Increment time
        return [...prev, newTime].slice(-10); // Keep last 10 time labels
      });

      setCO2Levels((prev) => {
        const lastValue = prev[prev.length - 1];
        const newCO2 = lastValue + Math.floor(Math.random() * 10 + 5); // Increase CO₂ with small variation
        return [...prev, newCO2].slice(-10); // Keep last 10 CO₂ levels
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: "CO₂ Level (ppm)",
        data: co2Levels,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
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
        text: "Live CO₂ Levels Over Time",
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
          text: "CO₂ Level (ppm)",
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CO2Chart;
