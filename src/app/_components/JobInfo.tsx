import Image from "next/image";
import React from "react";
import Figma from "../../../public/figma.png";
import AdobeXD from "../../../public/adobexd.png";
import AdobeIllustrator from "../../../public/adobe_illustrator.png";

const JobInfo = () => {
  return (
    <div className=" border-b border-[#E7E7E7] pl-[100px] flex flex-row gap-16 pt-9 pb-8">
      <div className=" flex flex-col gap-2 w-[170px]">
        <h1 className=" font-medium text-sm leading-[18.9px] text-[#6E6D6D]">
          Skills required
        </h1>
        {/* TODO : REASON FOR NOT USING BADGE WAS THEY HAVE THEIR OWN DEFAULT DESINGING */}
        <div className=" flex flex-col gap-2">
          <div className=" w-fit border-[#D0D5DD] bg-white border py-1 px-1.5 rounded-[6px] flex items-center gap-[3px]">
            <Image width={16} height={16} alt="figma" src={Figma} />
            <h1 className=" font-medium text-[12px] leading-[16.2px] text-[#344054]">
              Figma
            </h1>
          </div>
          <div className=" w-fit border-[#D0D5DD] bg-white border py-1 px-1.5 rounded-[6px] flex items-center gap-[3px]">
            <Image width={16} height={16} alt="figma" src={AdobeIllustrator} />
            <h1 className=" font-medium text-[12px] leading-[16.2px] text-[#344054]">
              Adobe Illustrator
            </h1>
          </div>
          <div className=" w-fit border-[#D0D5DD] bg-white border py-1 px-1.5 rounded-[6px] flex items-center gap-[3px]">
            <Image width={16} height={16} alt="figma" src={AdobeXD} />
            <h1 className=" font-medium text-[12px] leading-[16.2px] text-[#344054]">
              Adobe XD
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 w-[170px]">
        <h1 className=" font-medium text-sm leading-[18.9px] text-[#6E6D6D]">
          Preferred Language
        </h1>
        <h1 className=" font-semibold text-base  leading-[21.6px text-[#3D3D3D]">
          English
        </h1>
      </div>
      <div className=" flex flex-col gap-2 w-[170px]">
        <h1 className=" font-medium text-sm leading-[18.9px] text-[#6E6D6D]">
          Type
        </h1>
        <h1 className=" font-semibold text-base  leading-[21.6px text-[#3D3D3D]">
          Full time
        </h1>
      </div>
      <div className=" flex flex-col gap-2 w-[170px]">
        <h1 className=" font-medium text-sm leading-[18.9px] text-[#6E6D6D]">
          Years of Experience
        </h1>
        <h1 className=" font-semibold text-base  leading-[21.6px text-[#3D3D3D]">
          3+ Years of Experience
        </h1>
      </div>
    </div>
  );
};

export default JobInfo;
