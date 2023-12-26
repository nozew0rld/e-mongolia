import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import con from "../img/contact.svg";
import hum from "../img/human.svg";
import { SiMessenger } from "react-icons/si";
const Menu = () => {
  return (
    <div className="flex justify-end fixed bottom-0 left-0 w-[100%] z-[1000] -ml-3">
      <div className="flex flex-col gap-4">
        <div className="w-[55px] h-[55px] rounded-full bg-[#306CE8] flex justify-center items-center">
          <RxHamburgerMenu className="w-[30px] h-[30px] text-white" />
        </div>
        <div className="w-[55px] h-[55px] rounded-full bg-[#306CE8] flex justify-center items-center">
          <img src={con} alt="" className="w-[40px] h-[40px]" />
        </div>
        <div className="w-[55px] h-[55px] rounded-full bg-[#306CE8] flex justify-center items-center">
          <img src={hum} alt="" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-[55px] h-[55px] rounded-full bg-[#306CE8] flex justify-center items-center">
          <SiMessenger className="w-[30px] h-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
