// react-router-dom
import { Link, NavLink } from "react-router-dom";

// icons
import { ImLeaf } from "react-icons/im";

// components
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuCircleFadingPlus } from "react-icons/lu";
import { PiPackageBold } from "react-icons/pi";

const NavBarSideBar = () => {
  const dashboardIcon = <HiOutlineRocketLaunch className="text-2xl" />;

  const newProductsIcon = <LuCircleFadingPlus className="text-2xl" />;

  const orderIcon = <PiPackageBold className="text-2xl" />;

  const sidebarLinks = [
    { name: "Dashboard", path: "/seller", icon: dashboardIcon },
    { name: "New Product", path: "/seller/new", icon: newProductsIcon },
    { name: "Orders List", path: "/seller/orders", icon: orderIcon },
  ];

  return (
    <>
      <div className="fixed w-full top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-20 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <NavLink
          to="/seller"
          className="w-fit text-2xl sm:text-3xl flex flex-row items-center gap-3"
        >
          <ImLeaf className="text-(--primary)" />
          <p className="font-bold text-(--text)">Organic</p>
        </NavLink>
        <div className="flex items-center gap-5 text-gray-500">
          <p className="max-sm:hidden">Hi! Admin</p>
          <button className="cursor-pointer px-5 py-1.5 sm:px-8 sm:py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full">
            Log out
          </button>
        </div>
      </div>
      <div className="fixed h-screen pt-20 z-10 md:w-64 w-16 border-r  text-base border-gray-300 flex flex-col transition-all duration-300">
        {sidebarLinks.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center py-3 px-4 gap-3 
            ${
              index === 0
                ? "border-r-4 md:border-r-[6px] bg-(--light-green) border-(--primary) text-(--primary)"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`}
          >
            {item.icon}
            <p className="md:block hidden text-center">{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBarSideBar;
