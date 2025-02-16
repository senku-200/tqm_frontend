"use client";
import React, { ReactNode } from "react";
import SideBar from "../common/sideBar/SideBar";
import Header from "../common/Header/Header";
interface Props {
  children: ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-screen">
      <SideBar />
      <div className="w-full ">
        <Header />
        <div className="">
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
