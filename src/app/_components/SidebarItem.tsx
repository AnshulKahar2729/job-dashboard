import React, { FC } from "react";
import UserIcon from "./icons/UserIcon";

interface SidebarItemProps {
  label: string;
  amount: number;
  icon: () => React.JSX.Element;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, amount, icon: Icon }) => {
  return (
    <div className=" flex flex-row items-center justify-between">
      <div className=" p-[10px] flex  items-center gap-[10px]">
        <Icon />
        <span className=" text-[#4F4F4F]">{label}</span>
      </div>
      <span className=" font-semibold text-xl text-[#3D3D3D]">{amount}</span>
    </div>
  );
};

export default SidebarItem;
