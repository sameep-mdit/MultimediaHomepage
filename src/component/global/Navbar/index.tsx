import React from "react";
import { HomeContext } from "../../../store/Context/HomeContext";
import { Link, NavLink } from "react-router-dom";
import { Button, Drawer, Title } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useDisclosure } from "@mantine/hooks";

// ? assets
import logo from "../../../assets/icons/logo.png";

interface INavItems {
  title: string;
  href: string;
}

export const NavItems = ({ title, href }: INavItems) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      `${isActive ? "text-gray-100" : "text-gray-400"}`
    }
  >
    {title}
  </NavLink>
);
export const NavBarHamburger = () => {
  const HbCtx = React.useContext(HomeContext);
  React.useEffect(() => {
    console.log(HbCtx.data, "navbar");
  }, [HbCtx]);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={true}
        title={<Title order={3}>Menu</Title>}
      >
        <div className="grid gap-6 text-2xl my-6">
          <NavLink to={"/"}>Home</NavLink>
          {!false ? <NavLink to={"/blogs"}>Blogs</NavLink> : <></>}
          {!false ? <NavLink to={"/Videos"}>Videos</NavLink> : <></>}
          <a href="#contact-section" className="text-gray-400">
            Contact
          </a>
          <Link to={"/login"}>
            <div className="text-white  ">Login </div>
          </Link>
        </div>
      </Drawer>
      <Button onClick={open}>
        <Icon icon="pajamas:hamburger" className="flex  md:hidden " />
      </Button>
    </>
  );
};

const NavBar = () => {
  const homepageData = React.useContext(HomeContext);
  console.log(homepageData.data, "navbar");
  React.useEffect(() => {
    console.log(homepageData.isLoading);
  }, [homepageData]);

  return (
    <div className="flex-1 px-4 py-1 text-orange-800 flex justify-between font-bold md:px-[20vh]   items-center bg-black sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="" className="h-10" />
      </Link>
      <div className="md:flex hidden gap-4 font-semibold   md:justify-between">
        <NavItems href="/" title="Home" />
        {homepageData.data?.homepage.current_status.blog ? (
          <NavItems href="/blogs" title="Blogs" />
        ) : (
          <></>
        )}
        {homepageData.data?.homepage.current_status.video ? (
          <NavItems href="/videos" title="Videos" />
        ) : (
          <></>
        )}

        <NavItems href="/login" title="Login" />
      </div>
      <div></div>

      <nav className="flex  md:hidden ">
        <NavBarHamburger />
      </nav>
    </div>
  );
};

export default NavBar;
