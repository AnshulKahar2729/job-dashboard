import React from "react";
import MarkerPin from "./icons/MarkerPinIcon";
import CoinsStackedIcon from "./icons/CoinsStackedIcon";
import JobStatusBadge from "./JobStatusBadge";
import { DotIcon } from "lucide-react";

const JobHeader = () => {
  return (
    <div className=" pl-[100px] flex flex-col gap-6 border-b border-[#E7E7E7] pt-9 pb-8">
      <div className=" flex flex-row items-center gap-3">
        <h1 className=" font-semibold text-[35px] leading-[47.25px]">
          Senior Product Designer
        </h1>
        <DotIcon className=" text-[#888888]"/>
        <h1 className=" text-[14px] font-medium leading-[18.9px] text-[#888888]">posted 2 days ago</h1>
        <JobStatusBadge />
      </div>
      <div className=" flex flex-row gap-4">
        <div className=" flex gap-2">
          <MarkerPin />
          <h1 className=" font-medium text-[#5D5D5D]">Deleware, USA</h1>
        </div>
        <div>{/* ellipese */}</div>
        <div className=" flex flex-row gap-3">
          <CoinsStackedIcon />
          <h1 className=" font-medium text-[#5D5D5D]">$300k-$400k</h1>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;

// EXPLAIN : H1 IS USED BECAUSE IT IS GIVEN IN FIGMA
