import React from "react";
import { HomeContext } from "../../../store/Context/HomeContext";
import { NavLink } from "react-router-dom";
import { Title } from "@mantine/core";
import { HomePageData } from "../../../api/homepage";

const NavBar = () => {
  const homepageData = React.useContext(HomeContext);
  console.log(homepageData, "navbar");
  const data = { ...homepageData };
  return (
    <nav className="hidden md:flex justify-center h-[10vh] items-center text-white bg-sky-700 fixed top-0  w-full m-0 ">
      <div className="flex gap-4">
        <NavItems title="Home" href="/" />
        {homepageData.data ? (
          homepageData?.current_status.blog ? (
            <NavItems title="Blog" href="/blog" />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {data ? (
          homepageData.current_status["video"] ? (
            <NavItems title="Video" href="/video" />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        <h1>hello gsgsg</h1>
        <NavItems title="Contact" href="/contact" />
        <NavItems title="Admin Panel" href="/admin-panel" />
      </div>
    </nav>
  );
};

export default NavBar;

interface INavItems {
  title: string;
  href: string;
}

export const NavItems = ({ title, href }: INavItems) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      isActive
        ? "text-gray-900 no-underline"
        : "text-gray-100 no-underline hover:text-gray-900"
    }
  >
    <Title order={3} className="text-base">
      {title}
    </Title>
  </NavLink>
);
