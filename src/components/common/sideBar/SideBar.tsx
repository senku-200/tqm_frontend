import React from "react";
import { FaBus, FaRegUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const SideBar: React.FC = () => {
  return (
    <div>
      <aside className="w-[250px] h-screen flex flex-col px-5 pt-10 gap-10">
        <section className="flex flex-col gap-10">
          <p className="text-[#83c77f] text-xl tracking-wider text-center">
            tqm
          </p>
          <div className="w-full h-10  bg-[#83c77f] text-black rounded-full flex flex-col items-center justify-center">
            <p className="capitalize text-black flex items-center justify-center text-md gap-2">
              <MdSpaceDashboard className="" />
              dashboard
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-5">
          <p className="uppercase text-stone-500 text-sm">Account Management</p>
          <nav>
            <ul className="flex flex-col gap-5">
              <li>
                <p className="flex gap-4 items-center text-lg">
                  <FaBus />
                  vehicle
                </p>{" "}
              </li>
              <li>
                <p className="flex gap-4 items-center text-lg">
                  <FaRegUser />
                  user
                </p>
              </li>
            </ul>
          </nav>
        </section>
      </aside>
    </div>
  );
};

export default SideBar;
