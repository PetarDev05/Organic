// icons
import { FaBasketShopping } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { ImLeaf } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";

// react
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// hooks
import { useAppContext } from "../../context/AppContext.jsx";

// dependencies
import toast from "react-hot-toast";

const notify = (message) => toast(message);

const NavBar = () => {
  const { user, dispatchUser, setShowLogin, cartProducts, cartLength } =
    useAppContext();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    const url = "http://localhost:8000/api/users/logout";
    const options = {
      method: "POST",
      credentials: "include"
    };
    const response = await fetch(url, options);
    const json = await response.json();
    dispatchUser({ type: "LOGOUT" });
    notify(json.message);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-300 bg-white relative transition-all">
      <div className="w-full flex flex-col items-center justify-between gap-7">
        <div className="w-full flex flexd-row items-center justify-between">
          <NavLink
            to="/"
            className="w-fit text-3xl flex flex-row items-center gap-3"
          >
            <ImLeaf className="text-(--primary)" />
            <p className="font-bold text-(--text)">Organic</p>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {user && (
              <NavLink className="max-lg:hidden" to="/">
                Home
              </NavLink>
            )}
            {user && (
              <NavLink className="max-lg:hidden" to="/orders">
                My orders
              </NavLink>
            )}
            {user && (
              <NavLink className="max-lg:hidden" to="/products">
                All products
              </NavLink>
            )}

            <div className="hidden md:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
              <input
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
              />
              <HiMiniMagnifyingGlass className="text-lg" />
            </div>

            {user && (
              <Link to="/cart" className="relative cursor-pointer max-lg:hidden">
                <FaBasketShopping
                  
                  className="text-xl"
                />
                <button className="absolute -top-1 -right-2 text-xs text-white bg-(--primary) w-[18px] h-[18px] rounded-full">
                  {cartLength}
                </button>
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
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
            className="md:hidden cursor-pointer text-xl"
          >
            <RiMenu3Fill />
          </button>
        </div>

        {user && (
          <div className="w-full hidden md:flex flex-row items-center gap-15 justify-center lg:hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/orders">My orders</NavLink>
            <NavLink to="/products">All products</NavLink>
            <Link to="/cart" className="relative cursor-pointer">
              <FaBasketShopping
                className="text-xl"
              />
              <button className="absolute -top-1 -right-2 text-xs text-white bg-(--primary) w-[18px] h-[18px] rounded-full">
                {cartProducts.length}
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-2 text-sm md:hidden`}
      >
        {user && (
          <div className="w-full">
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
            <NavLink
              onClick={() => (open ? setOpen(false) : setOpen(true))}
              to="/orders"
              className="block w-full hover:bg-(--primary) px-5 py-2 hover:text-(--white)"
            >
              My orders
            </NavLink>
          </div>
        )}
        <div className="w-full p-5 flex flex-row items-center gap-3">
          {user ? (
            <button
              onClick={() => {
                open ? setOpen(false) : setOpen(true);
                handleLogout();
              }}
              className="cursor-pointer px-6 py-2  bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full text-sm"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                setShowLogin(true);
              }}
              className="cursor-pointer px-6 py-2  bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full text-sm"
            >
              Login
            </button>
          )}
          <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <HiMiniMagnifyingGlass className="text-lg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
