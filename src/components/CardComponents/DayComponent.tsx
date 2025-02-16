import React, { useEffect, useState } from "react";
import PercentageDoughnutChart from "../MainPageComponents/PercentageDoughnutChart";

interface DailyMetrics {
  airQuality: number; // 0-100 scale
  co2Average: number; // 0-100 scale for simplicity
  hours: number;
  airQualityStatus: string;
  co2Status: string;
}

const DayComponent: React.FC = () => {
  // Morning metrics
  const [morningMetrics, setMorningMetrics] = useState<DailyMetrics>({
    airQuality: 70,
    co2Average: 50,
    hours: 6,
    airQualityStatus: "Moderate",
    co2Status: "Average",
  });

  // Afternoon metrics
  const [afternoonMetrics, setAfternoonMetrics] = useState<DailyMetrics>({
    airQuality: 65,
    co2Average: 55,
    hours: 5,
    airQualityStatus: "Moderate",
    co2Status: "Average",
  });

  // Update both sets of metrics every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Morning: simulate more controlled conditions
      const newMorningAirQuality = Math.floor(60 + Math.random() * 20); // 60-80
      const newMorningCo2Average = Math.floor(40 + Math.random() * 20); // 40-60
      const newMorningAirQualityStatus =
        newMorningAirQuality < 65
          ? "Healthy"
          : newMorningAirQuality < 75
          ? "Moderate"
          : "Unhealthy";
      const newMorningCo2Status =
        newMorningCo2Average < 45
          ? "Good"
          : newMorningCo2Average < 55
          ? "Average"
          : "High";

      setMorningMetrics({
        airQuality: newMorningAirQuality,
        co2Average: newMorningCo2Average,
        hours: 6,
        airQualityStatus: newMorningAirQualityStatus,
        co2Status: newMorningCo2Status,
      });

      // Afternoon: simulate slightly more variable conditions
      const newAfternoonAirQuality = Math.floor(50 + Math.random() * 40); // 50-90
      const newAfternoonCo2Average = Math.floor(50 + Math.random() * 30); // 50-80
      const newAfternoonAirQualityStatus =
        newAfternoonAirQuality < 60
          ? "Healthy"
          : newAfternoonAirQuality < 80
          ? "Moderate"
          : "Unhealthy";
      const newAfternoonCo2Status =
        newAfternoonCo2Average < 55
          ? "Good"
          : newAfternoonCo2Average < 65
          ? "Average"
          : "High";

      setAfternoonMetrics({
        airQuality: newAfternoonAirQuality,
        co2Average: newAfternoonCo2Average,
        hours: 5,
        airQualityStatus: newAfternoonAirQualityStatus,
        co2Status: newAfternoonCo2Status,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Color helpers for Morning
  const getMorningAirQualityColor = (value: number) => {
    if (value < 65) return "green";
    if (value < 75) return "yellow";
    return "red";
  };

  const getMorningCO2Color = (value: number) => {
    if (value < 45) return "green";
    if (value < 55) return "yellow";
    return "red";
  };

  // Color helpers for Afternoon
  const getAfternoonAirQualityColor = (value: number) => {
    if (value < 60) return "green";
    if (value < 80) return "yellow";
    return "red";
  };

  const getAfternoonCO2Color = (value: number) => {
    if (value < 55) return "green";
    if (value < 65) return "yellow";
    return "red";
  };

  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {/* Morning Metrics Card */}
      <div className="bg-stone-800 w-[600px] rounded-xl px-5 py-3 flex items-center justify-around">
        <div className="flex flex-col">
          <p>Morning</p>
          <p className="text-stone-400">{morningMetrics.hours} hrs</p>
        </div>
        <div className="flex items-center gap-3">
          <PercentageDoughnutChart
            value={morningMetrics.airQuality}
            maxValue={100}
            label={""}
            status={""}
            color={getMorningAirQualityColor(morningMetrics.airQuality)}
          />
          <div>
            <p className="text-stone-400">Air Quality</p>
            <p>{morningMetrics.airQualityStatus}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <PercentageDoughnutChart
              value={morningMetrics.co2Average}
              maxValue={100}
              label={""}
              status={""}
              color={getMorningCO2Color(morningMetrics.co2Average)}
            />
          </div>
          <div>
            <p className="text-stone-400">CO₂ Average</p>
            <p>{morningMetrics.co2Status}</p>
          </div>
        </div>
      </div>

      {/* Afternoon Metrics Card */}
      <div className="bg-stone-800 w-[600px] rounded-xl px-5 py-3 flex items-center justify-around">
        <div className="flex flex-col">
          <p>Afternoon</p>
          <p className="text-stone-400">{afternoonMetrics.hours} hrs</p>
        </div>
        <div className="flex items-center gap-3">
          <PercentageDoughnutChart
            value={afternoonMetrics.airQuality}
            maxValue={100}
            label={""}
            status={""}
            color={getAfternoonAirQualityColor(afternoonMetrics.airQuality)}
          />
          <div>
            <p className="text-stone-400">Air Quality</p>
            <p>{afternoonMetrics.airQualityStatus}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <PercentageDoughnutChart
              value={afternoonMetrics.co2Average}
              maxValue={100}
              label={""}
              status={""}
              color={getAfternoonCO2Color(afternoonMetrics.co2Average)}
            />
          </div>
          <div>
            <p className="text-stone-400">CO₂ Average</p>
            <p>{afternoonMetrics.co2Status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayComponent;
