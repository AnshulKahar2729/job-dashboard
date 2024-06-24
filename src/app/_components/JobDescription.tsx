import React from "react";

const JobDescription = () => {
  return (
    <div className=" lg:pl-[100px] px-5 lg:px-0 flex flex-col gap-2 py-8 border-b border-[#E7E7E7]">
      <h1 className=" text-[#6E6D6D] font-medium text-sm leading-[18.9px]">
        About the job
      </h1>
      <div className=" font-medium text-base text-[#3D3D3D] leading-[28px]">
        <ol className=" list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <span>Benefits:</span>
        <ul className=" list-disc list-inside pl-2">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <span>Schedule:</span>
        <ul className=" list-disc list-inside pl-2">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <span>Benefits:</span>
        <ul className=" list-disc list-inside pl-2">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
