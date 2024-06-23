import React from "react";
import Sidebar from "./_components/Sidebar";
import JobHeader from "./_components/JobHeader";
import CompanyCard from "./_components/CompanyCard";
import JobInfo from "./_components/JobInfo";
import JobDescription from "./_components/JobDescription";
import SubHeader from "./_components/SubHeader";

const IndexPage = () => {
  return (
    <div className="   ">
      <SubHeader />
      <div className=" flex flex-row justify-between ">
        <div className=" ">
          <JobHeader />
          <JobInfo />
          <JobDescription />
          <CompanyCard />
        </div>
        <Sidebar />
      </div>
      <div className=" h-[72px]"></div>
    </div>
  );
};

export default IndexPage;
