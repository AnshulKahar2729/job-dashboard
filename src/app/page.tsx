import React from "react";
import Sidebar from "./_components/Sidebar";
import JobHeader from "./_components/JobHeader";
import CompanyCard from "./_components/CompanyCard";
import JobInfo from "./_components/JobInfo";
import JobDescription from "./_components/JobDescription";
import SubHeader from "./_components/SubHeader";
import MobileSidebarTable from "./_components/MobileSidebarTable";

const IndexPage = () => {
  return (
    <div className="   ">
      <SubHeader />
      <div className=" flex lg:flex-row flex-col  ">
        <div className=" flex-1 ">
          <JobHeader />
          <JobInfo />
          <MobileSidebarTable/>
          <JobDescription />
          <CompanyCard />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default IndexPage;
