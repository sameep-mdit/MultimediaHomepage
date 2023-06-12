import { Title } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { getHomePage } from "../../../api/homepage";

const NavBar = () => {
  const [data, setData] = React.useState<any>();

  const HomePageApi = async () => {
    try {
      const data = await getHomePage();

      setData(data.data.homepage);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    HomePageApi();
  }, []);

  return (
    <>
      <nav className="hidden md:flex justify-center h-[10vh] items-center text-white bg-sky-700 fixed top-0  w-full m-0 ">
        <div className="flex gap-4">
          <NavItems title="Home" href="/" />
          {data ? (
            data.current_status["blog"] ? (
              <NavItems title="Blog" href="/blog" />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          {data ? (
            data.current_status["video"] ? (
              <NavItems title="Video" href="/video" />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <NavItems title="Contact" href="/contact" />
          <NavItems title="Admin Panel" href="/admin-panel" />
        </div>
      </nav>
    </>
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
