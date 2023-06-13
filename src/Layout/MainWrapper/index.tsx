import React from "react";
import NavBar from "../../component/global/Navbar";
import { HomeContext } from "../../store/Context/HomeContext";

type IMainWrapper = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <NavBar />
      <div className="flex-[9] bg-slate-50">{children}</div>
    </div>
  );
};

export default MainWrapper;
