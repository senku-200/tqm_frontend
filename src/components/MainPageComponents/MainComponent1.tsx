import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { PiGraphBold } from "react-icons/pi";

const MainComponent1: React.FC = () => {
  return (
    <div>
      <section className="">
        <div className="md:flex gap-5">
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-8 h-8 p-2 rounded-full bg-black">
                <PiGraphBold />
              </div>
              <div className="text-stone-400">
                <p className="">Current</p>
                <p className="">PM2.5 Level</p>
              </div>
            </div>
            <div className="bg-[#93CC4B] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
              <p className="text-black text-3xl bold">12</p>
              <div className="">
                <p className="text-black capitalize">indoor</p>
                <p className="text-stone-500">µW/m²</p>
              </div>
            </div>
          </div>
          <div className="w-auto px-5 py-3 flex flex-col gap-3 bg-stone-800 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <div className="w-8 h-8 p-2 rounded-full bg-black">
                  <PiGraphBold />
                </div>
                <div className="text-stone-400">
                  <p className="">Today&apos;s Average</p>
                  <p className="">PM2.5 Levels</p>
                </div>
              </div>
              <div className="text-stone-400">
                <p className="">UP TO</p>
                <p className="">11.00AM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#93CC4B] w-[150px] h-[70px] rounded-full flex items-center pl-5 gap-4">
                <p className="text-black text-3xl bold">12</p>
                <div className="">
                  <p className="text-black capitalize">indoor</p>
                  <p className="text-stone-500">µW/m²</p>
                </div>
              </div>{" "}
              <div className="bg-[#5B255F] w-auto h-[70px] rounded-full flex items-center px-5 pl-5 gap-4">
                <p className="text-white text-3xl bold">244</p>
                <div className="">
                  <p className="text-white capitalize">Outdoor</p>
                  <p className="text-stone-500">µW/m²</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="w-auto px-5 py-3 flex flex-col justify-around bg-stone-800 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <div className="w-8 h-8 p-2 rounded-full bg-[#83c77f]">
                  <FaBoltLightning className="text-black" />
                </div>
                <div className="text-stone-400">
                  <p className="">Power</p>
                  <p className="">Consumption</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center pl-5 gap-2 text-[#83c77f]">
                <p className="text-4xl bold">151.27</p>
                <p className="text-[#83c77f]">kMh</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent1;
