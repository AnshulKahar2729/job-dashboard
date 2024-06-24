import React from "react";
import BriefCaseIcon from "./icons/BriefCaseIcon";
import CoinsHandIcon from "./icons/CoinsHandIcon";
import MessageSquareIcon from "./icons/MessageSquareIcon";
import { DotIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" h-[74px] w-[538px] rounded-[36px] border-[0.5px] border-[#D1D1D1] p-2 pr-5 flex flex-row justify-between ">
      <div className=" bg-[#DC4A2D]  p-[15px]  border-[#FCB4A5] border-[2px] rounded-[49px] flex gap-2 items-center">
        <BriefCaseIcon />
        <h1 className=" font-medium leading-[27px] text-xl text-white">Jobs</h1>
      </div>

      <div className=" flex gap-2 items-center">
        <div className=" relative">
          <MessageSquareIcon  />
          <DotIcon
            size={50}
            className=" z-[100] absolute bottom-[-5px] left-[-4px] text-[#DC4A2D]"
          />
        </div>
        <h1 className=" text-[#B0B0B0] font-medium leading-[27px] text-xl">
          Messages
        </h1>
      </div>

      <div className=" flex gap-2 items-center">
        <CoinsHandIcon />
        <h1 className=" text-[#B0B0B0] font-medium leading-[27px] text-xl">
          Payments
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
