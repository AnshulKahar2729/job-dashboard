import React, { FC } from "react";
import { DeleteButton, EditButton } from "./Button";
import { Separator } from "@/components/ui/separator";
import UserIcon from "./icons/UserIcon";

const Sidebar = () => {
  return (
    <div className=" bg-[#FCFCFC] w-[409px] flex flex-col pt-9 gap-4 border-l border-[#E7E7E7] px-6">
      <div className=" flex flex-row gap-4 ">
        <DeleteButton />
        <EditButton />
      </div>
      <div className=" p-3 flex flex-col gap-4">
        <div className=" flex flex-row items-center justify-between">
          <div className=" p-[10px] flex  items-center gap-[10px]">
            <UserIcon />
            <span>Applicants</span>
          </div>
          <span className=" font-semibold text-xl">400</span>
        </div>
        <Separator />
        <div className=" flex flex-row justify-between">
          <div className=" p-[10px] flex items-center gap-[10px]">
            <UserIcon />
            <span>Matches</span>
          </div>
          <span className=" font-semibold text-xl">100</span>
        </div>
        <Separator />
        <div className=" flex flex-row justify-between">
          <div className=" p-[10px] flex items-center gap-[10px]">
            <UserIcon />
            <span>Messages</span>
          </div>
          <span className=" font-semibold text-xl">147</span>
        </div>
        <Separator />
        <div className=" flex flex-row justify-between">
          <div className=" p-[10px] flex items-center gap-[10px]">
            <UserIcon />
            <span>Views</span>
          </div>
          <span className=" font-semibold text-xl">800</span>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Sidebar;
