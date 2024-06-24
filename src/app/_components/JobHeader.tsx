import React from "react";
import MarkerPin from "./icons/MarkerPinIcon";
import CoinsStackedIcon from "./icons/CoinsStackedIcon";
import JobStatusBadge from "./JobStatusBadge";
import { DotIcon, Ellipsis, EllipsisVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DeleteButton, EditButton } from "./Button";

const JobHeader = () => {
  return (
    <div className=" lg:pl-[100px] px-5 lg:px-0 flex flex-col gap-6 border-b border-[#E7E7E7] pt-9 pb-8">
      <div className=" flex flex-col items-start lg:flex-row lg:items-center gap-3">
        <div className=" flex flex-row justify-between lg:w-auto w-full">
          <h1 className=" font-semibold lg:text-[35px] text-2xl lg:leading-[47.25px] leading-10">
            Senior Product Designer
          </h1>
          <Popover>
            <PopoverTrigger className=" lg:hidden ">
              <Ellipsis />
            </PopoverTrigger>
            <PopoverContent className=" flex flex-col gap-4 mx-2">
              <DeleteButton />
              <EditButton />
            </PopoverContent>
          </Popover>
        </div>

        <div className=" flex gap-3 flex-row items-center">
          <DotIcon className=" w-4 h-4 text-[#888888]" />
          <h1 className=" text-[14px] font-medium leading-[18.9px] text-[#888888]">
            posted 2 days ago
          </h1>
          <JobStatusBadge />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col gap-4 lg:items-center items-start">
        <div className=" flex gap-2 items-center ">
          <MarkerPin />
          <h1 className=" font-medium text-[#5D5D5D]">Deleware, USA</h1>
        </div>
        <div className=" flex flex-row gap-4">
          <DotIcon className=" w-4 h-4 text-[#888888] lg:block hidden" />
          <div className=" flex flex-row gap-3">
            <CoinsStackedIcon />
            <h1 className=" font-medium text-[#5D5D5D]">$300k-$400k</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;

// EXPLAIN : H1 IS USED BECAUSE IT IS GIVEN IN FIGMA
