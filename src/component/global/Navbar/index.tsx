import React from "react";
import { getHomePage } from "../../../api/homepage";
import { Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <nav>
        <NavItems title="Home" href="/" />
        {data ? (
          data.homepage.current_status["blog"] ? (
            <NavItems title="Blog" href="/blog" />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {data ? (
          data.homepage.current_status["video"] ? (
            <NavItems title="Video" href="/video" />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}

        <NavItems title="Contact" href="/contact" />
        <NavItems title="Admin Panel" href="/admin-panel" />
      </nav>
    </>
  );
};

export default Navbar;

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
