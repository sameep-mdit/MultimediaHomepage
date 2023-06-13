import React from "react";
import { HomeContext } from "../../../store/Context/HomeContext";
import { NavLink } from "react-router-dom";
import { Title } from "@mantine/core";

const NavBar = () => {
  const homepageData = React.useContext(HomeContext);
  console.log(homepageData.data, "navbar");
  React.useEffect(() => {
    console.log(homepageData.isLoading);
  }, [homepageData]);
  return (
    <div className="flex flex-1 bg-[#0C2D48] justify-between ">
      <div className="md:flex-1"></div>
      <nav className="flex flex-1 justify-between items-center border-solid border-2 border-red-300 text-white">
        <NavLink to={"/"}>
          <h2>Home</h2>
        </NavLink>
        {homepageData.data?.homepage.current_status.blog ? (
          <NavLink to={"/blogs"}>
            <h2>Blogs</h2>
          </NavLink>
        ) : (
          <></>
        )}
        {homepageData.data?.homepage.current_status.video ? (
          <NavLink to={"/videos"}>
            <h2>Blogs</h2>
          </NavLink>
        ) : (
          <></>
        )}
        <NavLink to={"/"}>
          <h2>Contact</h2>
        </NavLink>
      </nav>
      <div className="md:flex-1"></div>
    </div>
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
