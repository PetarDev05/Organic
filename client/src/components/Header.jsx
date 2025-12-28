import { NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { ImLeaf } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink
        to="/"
        className="w-fit text-3xl flex flex-row items-center gap-3"
      >
        <ImLeaf className="text-(--primary)" />
        <p className="font-bold text-(--text)">Organic</p>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/products">Products</NavLink>

        <NavLink to="/checkout">
          <LuShoppingCart className="text-2xl cursor-pointer" />
        </NavLink>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        className="sm:hidden"
      >
        <RiMenu3Fill className="text-xl" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm sm:hidden`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
};

export default Header;
