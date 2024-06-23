import React from "react";
import DotIcon from "./icons/DotIcon";

const JobStatusBadge = () => {
  return (
    <div className=" bg-[#ECFDF3] text-[] border border-[##ABEFC6] rounded-full py-0.5 px-2 flex flex-row items-center gap-1">
      <DotIcon />
      <span className=" font-medium text-xs leading-[18px]  text-[#067647]">
        Open
      </span>
    </div>
  );
};

export default JobStatusBadge;
