import React from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <div className="h-[40px] flex justify-around items-center flex-row font-roboto">
      <div className="flex gap-4">
        <div className="text-[#002468] text-[10px] font-medium">ИРГЭН</div>
        <div className="text-[#687BA5] text-[10px] font-medium">
          ХУУЛИЙН ЭТГЭЭД
        </div>
        <div className="text-[#687BA5] text-[10px] font-medium">FOREIGNER</div>
      </div>

      <div className="bg-[#EFF2F5] h-[25px] w-[50px] rounded-lg flex justify-center items-center">
        <FaMoon />
      </div>
    </div>
  );
}

export default Header;
