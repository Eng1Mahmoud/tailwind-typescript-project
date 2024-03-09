import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const Footer: React.FC = () => {
    const year = new Date().getFullYear();
  return (
    <div className="footer mt-[100px] bg-footerBackground ">
      <div className="container">
        <h1 className="footer__title text-mainColorText text-[30px] font-bold text-center my-10 w-full">
          GET IN TOUCH
        </h1>
        <div className="z-[1] grid grid-cols-1 md:grid-cols-3 gap-28 align-baseline  md:justify-between w-full relative after:content-[' '] after:bg-white after:w-[2px] after:h-full md:after:w-full md:after:h-[2px] after:absolute after:top-0 after:left-[50%] md:after:top-[50%] md:after:left-0  after:z-[-1]">
          <div
            data-after="Lorem ipsum dolor sit"
            className="w-[80px] h-[80px] bg-secoundColorText hover:bg-secondary rounded-full  justify-self-center relative md:justify-self-start  after:content-[attr(data-after)] after:text-secoundColorText after:w-[150px]  after:h-[20px] after:absolute after:top-[155%] after:left-[-35%] after:text-center after:bg-footerBackground after:flex after:items-center "
          >
            <div className="flex items-center justify-center w-full h-full  rounded-full">
              <FaLocationDot className="text-white text-5xl" />
            </div>
          </div>
          <div
            data-after="+01 123455678990"
            className="w-[80px] h-[80px] bg-secoundColorText hover:bg-secondary rounded-full  justify-self-center relative md:justify-self-center  after:content-[attr(data-after)] after:text-secoundColorText after:w-[150px]  after:h-[20px] after:absolute after:top-[155%] after:left-[-35%] after:text-center after:bg-footerBackground after:flex after:items-center"
          >
            <div className="flex items-center justify-center w-full h-full  rounded-full">
              <FaPhone className="text-white text-5xl" />
            </div>
          </div>
          <div
            data-after="demo@gmail.com"
            className="w-[80px] h-[80px] bg-secoundColorText hover:bg-secondary rounded-full  justify-self-center  relative md:justify-self-end  after:content-[attr(data-after)] after:text-secoundColorText after:w-[150px]  after:h-[50px] after:absolute after:top-[130%]  after:left-[-35%] after:text-center after:bg-footerBackground after:py-1"
          >
            <div className="flex items-center justify-center w-full h-full  rounded-full">
              <MdEmail className="text-white text-5xl" />
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px] bg-secoundColorText mt-[100px]" />
        <div className="copyRight w-full text-center text-white text-[20px] py-6">
            <p>© {year} All Rights Reserved</p>
            </div>
      </div>
    </div>
  );
};
