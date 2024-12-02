"use client";
import MainComponent1 from "@/components/MainPageComponents/MainComponent1";
import ThemeSwitch from "@/components/switch/ThemeSwitch";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-auto max-w-full flex py-5 items-center justify-around">
      <div className="">
        <MainComponent1 />
      </div>
      <div className="flex gap-5 items-center">
        <div className="">
          <ThemeSwitch />
        </div>
        <div className="">
          <div className="h-10 w-auto px-3 bg-stone-500 flex flex-col items-center justify-center rounded-full">
            <p className="text-sm">
              Hello, User
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
