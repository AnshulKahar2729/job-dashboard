import React from "react";

const SubHeader = () => {
  return (
    // TODO : TRY TO CHANGE FONT SIZE AS PER RESPONSIVENESS

    <div className="  h-[67px] lg:pl-[100px] px-5 lg:px-0 overflow-auto flex  items-center border-b-[2px] border-[#E7E7E7]">
      <div className=" flex gap-[72px] h-full">
        <div className=" relative flex items-center z-[-10]  ">
          <h1 className=" font-semibold text-xl leading-[27px] text-[#DC4A2D] lg:whitespace-normal whitespace-nowrap">
            Job Preview
          </h1>
          <div className=" absolute bottom-0 left-6 bg-[#DC4A2D] h-0.5 w-[65px]"></div>
        </div>

        <div className=" flex items-center">
          <h1 className=" font-medium text-xl leading-[27px] text-[#888888] lg:whitespace-normal whitespace-nowrap">
            Applicants
          </h1>
        </div>
        <div className=" flex items-center">
          <h1 className=" font-medium text-xl leading-[27px] text-[#888888] lg:whitespace-normal whitespace-nowrap">
            Match
          </h1>
        </div>
        <div className=" flex items-center">
          <h1 className=" font-medium text-xl leading-[27px] text-[#888888] lg:whitespace-normal whitespace-nowrap">
            Messages
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
