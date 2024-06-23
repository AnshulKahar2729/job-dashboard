import React from "react";
import TrashIcon from "./icons/TrashIcon";
import EditIcon from "./icons/EditIcon";

export const DeleteButton = () => {
  return (
    <button className=" w-full flex items-center justify-center gap-[10px] border-[0.8px] border-[#DC4A2D] bg-[#FEF4F2] py-3 px-6 rounded-[8px] ">
      <TrashIcon />
      <span className=" text-[#DC4A2D]">Delete Job</span>
    </button>
  );
};

export const EditButton = () => {
  return (
    <button className=" w-full flex items-center justify-center gap-[10px] border-[2px] border-[#FED3CA] bg-[#DC4A2D] py-3 px-6 rounded-[8px]">
      <EditIcon />
      <span className=" text-white">Edit Job</span>
    </button>
  );
};
