import React from "react";

import NavBar from "../../component/global/Navbar";
import FooterPage from "../../component/global/Footer";

import style from "./style.module.scss";

type IMainWrapper = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  return (
    <main className={style.bgGradiant}>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <FooterPage />
    </main>
  );
};

export default MainWrapper;
