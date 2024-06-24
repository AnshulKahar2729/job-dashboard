import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import RightNav from "./RightNav";

const Header = () => {
  return (
    <header className="h-[109px] pl-10 pr-6 sticky top-0 bg-white flex flex-row items-center justify-between  shadow-custom-shadow border-b border-[#E7E7E7]  ">
      <Logo />
      <Navbar />
      <RightNav />
    </header>
  );
};

export default Header;
