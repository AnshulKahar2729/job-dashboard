import React from "react";
import BellIcon from "./icons/BellIcon";
import Image from "next/image";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import UserLogo from "../../../public/UserLogo.png";
import { DotIcon } from "lucide-react";

const RightNav = () => {
  return (
    <div className=" flex flex-row items-center gap-4 ">
      <div className=" relative">
        <BellIcon />
        <DotIcon size={50} className=" z-[100] absolute bottom-0 left-[-4px] text-[#DC4A2D]" />
      </div>
      <div className=" flex flex-row items-center gap-1.5">
        <Image
          src={UserLogo}
          height={40}
          width={40}
          className=" rounded-[60px]"
          alt="User Logo"
        />
        <ChevronDownIcon />
      </div>
    </div>
  );
};

export default RightNav;
