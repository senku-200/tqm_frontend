import React from "react";
import TimeTQMChart from "./TimeTQMChart";

const GraphComponent: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] p-5 bg-slate-200 rounded-2xl mx-auto my-5">
      <TimeTQMChart />
    </div>
  );
};

export default GraphComponent;
