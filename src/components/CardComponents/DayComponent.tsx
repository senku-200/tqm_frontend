import React from "react";
import PercentageDoughnutChart from "../MainPageComponents/PercentageDoughnutChart";

const DayComponent: React.FC = () => {
  return (
    <div className="mb-10 flex gap-2">
      <div className="bg-stone-800 w-[600px] rounded-xl px-5 py-3 flex items-center justify-around">
        <div className="flex flex-col">
          <p className="">Today</p>
          <p className="text-stone-400">11hrs</p>
        </div>
        <div className="flex items-center gap-3">
          <PercentageDoughnutChart
            value={70}
            maxValue={100}
            label={""}
            status={""}
            color={"red"}
          />
          <div className="">
            <p className="text-stone-400">TQM</p>
            <p className="">UnHealthy</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-3">
          <div className="">
            <PercentageDoughnutChart
              value={50}
              maxValue={100}
              label={""}
              status={""}
              color={"yellow"}
            />
          </div>
          <div className="">
            <p className="text-stone-400">CO2</p>
            <p className="">Average</p>
          </div>
        </div>
      </div>{" "}
      <div className="bg-stone-800 w-[600px] rounded-xl px-5 py-3 flex items-center justify-around">
        <div className="flex flex-col">
          <p className="">Today</p>
          <p className="text-stone-400">11hrs</p>
        </div>
        <div className="flex items-center gap-3">
          <PercentageDoughnutChart
            value={70}
            maxValue={100}
            label={""}
            status={""}
            color={"red"}
          />
          <div className="">
            <p className="text-stone-400">TQM</p>
            <p className="">UnHealthy</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-3">
          <div className="">
            <PercentageDoughnutChart
              value={50}
              maxValue={100}
              label={""}
              status={""}
              color={"yellow"}
            />
          </div>
          <div className="">
            <p className="text-stone-400">CO2</p>
            <p className="">Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayComponent;
