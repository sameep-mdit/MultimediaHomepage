import React from "react";
import NavBar from "../../component/global/Navbar";

type IMainWrapper = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className="flex-[9] bg-slate-50 overflow-y-scroll ">{children}</div>
    </div>
  );
};

export default MainWrapper;
