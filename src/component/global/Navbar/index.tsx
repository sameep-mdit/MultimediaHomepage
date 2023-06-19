import React from "react";
import { HomeContext } from "../../../store/Context/HomeContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Menu, Title, Text } from "@mantine/core";

// ? assets
import logo from "../../../assets/icons/logo.png";
import { dummyHomePageData } from "../../../constants/dummy/dummyData";

const NavBar = () => {
  const homepageData = React.useContext(HomeContext);
  console.log(homepageData.data, "navbar");
  React.useEffect(() => {
    console.log(homepageData.isLoading);
  }, [homepageData]);
  const navigate = useNavigate();
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
          <div>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Text className="hover:cursor-pointer ">Blogs</Text>
              </Menu.Target>
              <Menu.Dropdown>
                {dummyHomePageData.homepage.blogs.map((item) => {
                  return (
                    <Link to={`/blogs/${item.name}`}>
                      <Menu.Item>{item.name}</Menu.Item>
                    </Link>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
          </div>
        ) : (
          <></>
        )}
        {!false ? (
          <div>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Text className="hover:cursor-pointer px-4">Videos</Text>
              </Menu.Target>
              <Menu.Dropdown>
                {dummyHomePageData.homepage.videos.map((item) => {
                  return (
                    <Link to={`/videos/${item.name}`}>
                      <Menu.Item>{item.name}</Menu.Item>
                    </Link>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
          </div>
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
