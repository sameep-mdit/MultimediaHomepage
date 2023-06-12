import React from "react";
import Navbar from "../../components/global/Navbar";

type IMainWrapper = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex-[9] bg-slate-50">{children}</div>
    </div>
  );
};

export default MainWrapper;
