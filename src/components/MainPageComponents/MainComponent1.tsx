import React, { useEffect, useState } from "react";
import { FaTemperatureHigh, FaUsers, FaWind, FaCloud } from "react-icons/fa6";
import { PiGraphBold } from "react-icons/pi";

const MainComponent1: React.FC = () => {
  // State for simulated IAQ data
  const [iaqData, setIaqData] = useState({
    ambientTemp: 30,
    indoorTemp: 25,
    humidity: 50,
    humanLoad: 2,
    co2Level: 400, // ppm
    idealTemp: 24,
  });

  // Function to generate random but realistic values
  const generateRandomData = () => {
    return {
      ambientTemp: Math.floor(20 + Math.random() * 15), // 20-35°C
      indoorTemp: Math.floor(18 + Math.random() * 10), // 18-28°C
      humidity: Math.floor(30 + Math.random() * 40), // 30-70%
      humanLoad: Math.floor(1 + Math.random() * 4), // 1-5 people
      co2Level: Math.floor(300 + Math.random() * 500), // 300-800 ppm
      idealTemp: Math.floor(20 + Math.random() * 10), // 20-30°C
    };
  };

  // Simulate live updates every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIaqData(generateRandomData());
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="p-5">
      <section>
        <div className="md:flex gap-5">
          {/* Ambient Temperature */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <FaTemperatureHigh className="text-red-500" />
              </div>
              <div className="text-stone-400">
                <p>Ambient Temperature</p>
              </div>
            </div>
            <div className="bg-[#93CC4B] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl font-bold">{iaqData.ambientTemp}°C</p>
            </div>
          </div>

          {/* Indoor Temperature */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <FaTemperatureHigh className="text-blue-400" />
              </div>
              <div className="text-stone-400">
                <p>Indoor Temperature</p>
              </div>
            </div>
            <div className="bg-[#5B255F] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-white text-3xl font-bold">{iaqData.indoorTemp}°C</p>
            </div>
          </div>

          {/* Humidity */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <FaWind className="text-blue-300" />
              </div>
              <div className="text-stone-400">
                <p>Humidity</p>
              </div>
            </div>
            <div className="bg-[#4B93CC] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl font-bold">{iaqData.humidity}%</p>
            </div>
          </div>

          {/* CO2 Level */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <PiGraphBold className="text-green-400" />
              </div>
              <div className="text-stone-400">
                <p>CO₂ Level</p>
              </div>
            </div>
            <div className="bg-[#93CC4B] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl font-bold">{iaqData.co2Level} ppm</p>
            </div>
          </div>

          {/* Human Load */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <FaUsers className="text-yellow-300" />
              </div>
              <div className="text-stone-400">
                <p>Human Load</p>
              </div>
            </div>
            <div className="bg-[#FFAB00] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl font-bold">{iaqData.humanLoad}</p>
            </div>
          </div>

          {/* Ideal Temperature Suggestion */}
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-[#83c77f]">
                <FaCloud className="text-black" />
              </div>
              <div className="text-stone-400">
                <p>Suggested Temperature</p>
              </div>
            </div>
            <div className="bg-[#83c77f] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl font-bold">{iaqData.idealTemp}°C</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent1;
