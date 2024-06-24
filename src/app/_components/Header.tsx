import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import RightNav from "./RightNav";

const Header = () => {
  return (
    <header className="lg:h-[109px] lg:py-0 py-2 lg:pl-10 lg:pr-6 px-2 sticky top-0 bg-white flex flex-row items-center justify-between  shadow-custom-shadow border-b border-[#E7E7E7]  ">
      <Logo />
      <Navbar />
      <RightNav />
    </header>
  );
};

export default Header;
