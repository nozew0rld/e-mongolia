import React from "react";
import logo from "../img/logo.svg";
import { BiBell } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Header2() {
  const navigate = useNavigate();

  return (
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
            navigate("/login");
          }}
        >
          <IoExitOutline className="text-red-700 text-2xl" />
        </div>
        <RxHamburgerMenu className="text-3xl text-[#306CE8]" />
      </div>
      <div className="h-[1px] w-full bg-[#EBEBEB]"></div>
    </div>
  );
}

export default Header2;
