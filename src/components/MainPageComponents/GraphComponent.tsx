"use client";
import React from "react";
import CO2Chart from "./CO2Chart";

const GraphComponent: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] p-5 bg-slate-200 rounded-2xl mx-auto my-5">
      <CO2Chart />
    </div>
  );
};

export default GraphComponent;
