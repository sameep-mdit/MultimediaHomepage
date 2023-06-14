import React from "react";
import { HomeContext } from "../../../store/Context/HomeContext";
import { NavLink } from "react-router-dom";
import { Title } from "@mantine/core";

// ? assets
import logo from "../../../assets/icons/logo.png";

const NavBar = () => {
  const homepageData = React.useContext(HomeContext);
  console.log(homepageData.data, "navbar");
  React.useEffect(() => {
    console.log(homepageData.isLoading);
  }, [homepageData]);
  return (
    <div className="flex-1 flex justify-between md:px-[20vh] items-center bg-[#003455] text-white">
      <div>
        <img src={logo} alt="" className="h-[8vh]" />
      </div>
      <div className="flex  md:justify-between">
        <NavLink to={"/"} className={"md:pr-6"}>
          <p>Home</p>
        </NavLink>
        {!false ? (
          <NavLink to={"/blogs"} className={"md:pr-6"}>
            Blogs
          </NavLink>
        ) : (
          <></>
        )}
        {!false ? (
          <NavLink to={"/Videos"} className={"md:pr-6"}>
            Videos
          </NavLink>
        ) : (
          <></>
        )}
        <NavLink to={"/Contacts"}>Contacts</NavLink>
      </div>
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
