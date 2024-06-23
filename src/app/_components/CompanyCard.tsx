import Image from "next/image";
import React from "react";
import AtlassianImage from "../../../public/atlassian.png";

const CompanyCard = () => {
  return (
    <div className=" pl-[100px] py-[34px] flex flex-col gap-4 w-[736px]">
      <div className=" py-[10px] pr-[10px] flex items-center gap-3">
        <Image
          src={AtlassianImage}
          width={40}
          height={40}
          alt="Atlassian"
          className=" rounded-[4px]"
        />
        <h1 className=" font-medium text-xl leading-[27px] text-[#4F4F4F]">
          Atlassian
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-12">
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">
            Company size
          </h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">
            1k - 2k Employees
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">Type</h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">Private</h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">Sector</h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">
            Information Technology, Infrastructure
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">Funding</h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">
            Bootstrapped
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">
            Founded In
          </h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">2019</h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[#6E6D6D] text-sm leading-[18.9px]">
            Founded By
          </h1>
          <h1 className=" text-[#3D3D3D] text-sm  leading-[21.6px]">
            Scott Farquhar, Mike Cannon-Brookes
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
