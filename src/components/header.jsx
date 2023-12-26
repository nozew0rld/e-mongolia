import React from "react";
import { FaMoon } from "react-icons/fa";
import logo from "../img/logo.svg";
import { BiBell } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-[100%] z-[1000] bg-white">
      <div className="h-[40px] flex justify-around items-center flex-row font-roboto">
        <div className="flex gap-4">
          <div className="text-[#002468] text-[10px] font-medium">ИРГЭН</div>
          <div className="text-[#687BA5] text-[10px] font-medium">
            ХУУЛИЙН ЭТГЭЭД
          </div>
          <div className="text-[#687BA5] text-[10px] font-medium">
            FOREIGNER
          </div>
        </div>

        <div className="bg-[#EFF2F5] h-[25px] w-[50px] rounded-lg flex justify-center items-center">
          <FaMoon />
        </div>
      </div>
      <div>
        <div className="h-[1px] w-full bg-[#EBEBEB]"></div>
        <div className=" h-[70px] flex justify-around items-center">
          <img src={logo} alt="" />
          <div className="w-[50px] h-[50px] border-[1px] border-solid border-[#EBEBEB] rounded-2xl flex justify-center items-center">
            <BiBell className="text-[#306CE8] text-2xl" />
          </div>
          <div
            className="w-[50px] h-[50px] border-[1px] border-solid border-[#EBEBEB] rounded-2xl flex justify-center items-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <IoExitOutline className="text-red-700 text-2xl" />
          </div>
          <RxHamburgerMenu className="text-3xl text-[#306CE8]" />
        </div>
        <div className="h-[1px] w-full bg-[#EBEBEB]"></div>
      </div>
    </div>
  );
}

export default Header;
