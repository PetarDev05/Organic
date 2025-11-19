// icons
import { FaBasketShopping, FaS } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { ImLeaf } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";

// react
import { useState } from "react";
import { NavLink } from "react-router-dom";

// context
import { useAppContext } from "../../context/AppContext.jsx";

const NavBar = () => {
  const { user, setUser, setShowLogin, navigate, cartProducts } =
    useAppContext();
  const [open, setOpen] = useState(false);

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

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
        <NavLink to="/products">All products</NavLink>
        {user && <NavLink to="/orders">My orders</NavLink>}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <HiMiniMagnifyingGlass className="text-lg" />
        </div>

        <div className="relative cursor-pointer">
          <FaBasketShopping
            onClick={() => navigate("/cart")}
            className="text-xl"
          />
          <button className="absolute -top-1 -right-2 text-xs text-white bg-(--primary) w-[18px] h-[18px] rounded-full">
            {cartProducts.length}
          </button>
        </div>
        {user ? (
          <button
            onClick={() => {
              logout;
            }}
            className="cursor-pointer px-8 py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => {
              setShowLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden cursor-pointer text-xl"
      >
        <RiMenu3Fill />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-2 pb-5 text-sm md:hidden`}
      >
        <NavLink
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          to="/"
          className="block w-full hover:bg-(--primary) px-5 py-2 hover:text-(--white)"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          to="/products"
          className="block w-full hover:bg-(--primary) px-5 py-2 hover:text-(--white)"
        >
          All products
        </NavLink>
        <NavLink
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          to="/cart"
          className="block w-full hover:bg-(--primary) px-5 py-2 hover:text-(--white)"
        >
          Cart
        </NavLink>
        {user && (
          <NavLink
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            to="/orders"
            className="block w-full hover:bg-(--primary) px-5 py-2 hover:text-(--white)"
          >
            My orders
          </NavLink>
        )}
        {user ? (
          <button
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
              logout();
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full text-sm ml-4"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full text-sm ml-4"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
