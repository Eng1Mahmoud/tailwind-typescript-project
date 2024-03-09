import React from "react";
import { GiAutoRepair } from "react-icons/gi";
export const Features: React.FC = () => {
  return (
    <div className="features py-10 sm:py0 md:transform md:-translate-y-28  ">
      <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="feature bg-backgroundElement shadow-2xl rounded-lg p-7 text-center flex items-center  flex-col gap-y-4 hover:bg-secondary group transition-colors duration-1000 ease-in-out ">
            <GiAutoRepair className="text-5xl text-secondary group-hover:text-white" />
            <h2 className="text-secondary  text-xl group-hover:text-white">
              REPAIR
            </h2>
          </div>
          <div className="feature shadow-2xl rounded-lg p-4 text-center flex items-center  flex-col gap-y-4 bg-secondary">
            <GiAutoRepair className="text-5xl text-white" />
            <h2 className="text-white  text-xl">IMPROVE</h2>
          </div>
          <div className="feature bg-backgroundElement shadow-2xl rounded-lg p-4 text-center flex items-center  flex-col gap-y-4 hover:bg-secondary group transition-colors duration-1000 ease-in-out">
            <GiAutoRepair className="text-5xl text-secondary group-hover:text-white" />

            <h2 className="text-secondary  text-xl group-hover:text-white">
              MAINTAIN
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
