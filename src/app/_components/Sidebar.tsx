import React, { FC } from "react";
import { DeleteButton, EditButton } from "./Button";
import { Separator } from "@/components/ui/separator";
import UserIcon from "./icons/UserIcon";
import UserCheckIcon from "./icons/UserCheckIcon";
import MessageSquareIcon from "./icons/MessageSquareIcon";
import EyeIcon from "./icons/EyeIcon";
import SidebarItem from "./SidebarItem";

const sidebarDetails = [
  {
    label: "Applicants",
    amount: 400,
    icon: UserIcon,
  },
  {
    label: "Matches",
    icon: UserCheckIcon,
    amount: 100,
  },
  {
    label: "Messages",
    amount: 147,
    icon: MessageSquareIcon,
  },
  {
    label: "Views",
    amount: 800,
    icon: EyeIcon,
  },
];

const Sidebar = () => {
  return (
    <div className=" hidden  min-h-screen bg-[#FCFCFC] w-[409px] md:flex flex-col pt-9 gap-4 border-l border-[#E7E7E7] px-6 shadow-sidebar-shadow">
      <div className=" flex xl:flex-row flex-col gap-4 ">
        <DeleteButton />
        <EditButton />
      </div>
      <div className=" p-3 flex flex-col gap-4">
        {sidebarDetails.map((sidebarDetail, index) => (
          <>
            <SidebarItem
              key={sidebarDetail.label}
              label={sidebarDetail.label}
              amount={sidebarDetail.amount}
              icon={sidebarDetail.icon}
            />
            {index !== sidebarDetails.length - 1 && <Separator />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
