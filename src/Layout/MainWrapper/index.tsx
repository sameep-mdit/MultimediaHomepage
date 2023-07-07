import React from "react";
import NavBar from "../../component/global/Navbar";
import FooterPage from "../../component/global/Footer";


type IMainWrapper = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-[9] bg-slate-50 overflow-y-scroll ">{children}</div>
      <FooterPage/>
    </main>
  );
};

export default MainWrapper;
