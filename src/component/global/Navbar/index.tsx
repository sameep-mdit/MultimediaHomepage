const Navbar = () => {
  return (
    <>
      <ul className="flex">
        <li>Home</li>
        <li>Blog</li>
        <li>Video</li>
        <li>Contact</li>
      </ul>
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
