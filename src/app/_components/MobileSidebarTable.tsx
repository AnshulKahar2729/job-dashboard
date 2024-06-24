import React from "react";
import UserIcon from "./icons/UserIcon";
import UserCheckIcon from "./icons/UserCheckIcon";
import MessageSquareIcon from "./icons/MessageSquareIcon";
import EyeIcon from "./icons/EyeIcon";
import SidebarItem from "./SidebarItem";
import { Separator } from "@/components/ui/separator";

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

const MobileSidebarTable = () => {
  return (
    <div className=" lg:hidden p-3 flex flex-col gap-4 border-b border-[#E7E7E7]">
      {sidebarDetails.map((sidebarDetail, index) => (
        <>
          <SidebarItem
            label={sidebarDetail.label}
            amount={sidebarDetail.amount}
            icon={sidebarDetail.icon}
          />
          {index !== sidebarDetails.length - 1 && <Separator   />}
        </>
      ))}
    </div>
  );
};

export default MobileSidebarTable;
