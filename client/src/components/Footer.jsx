import { ImLeaf } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-6 pt-7 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-(--text) bg-(--light-green)">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1 ">
          <NavLink to="/" className="flex flex-row items-center gap-3">
            <ImLeaf className="text-(--primary) text-3xl" />
            <p className="font-bold text-(--text) text-3xl">Organic</p>
          </NavLink>
          <p className="text-sm/7 mt-6">
            Organic is specialized fruits and vegitables delivary based service,
            made to help you save time and providing premium quality products
            for you and your loved ones.
          </p>
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center text-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-(--text-dark)">Company</h2>
            <Link className="hover:text-slate-600 transition" to="/about">
              About us
            </Link>
            <Link className="hover:text-slate-600 transition" to="/checkout">
              Delivery information
            </Link>
            <Link className="hover:text-slate-600 transition" to="/checkout">
              Payment methods
            </Link>
            <p className="hover:text-slate-600 transition">Privacy policy</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="font-semibold mb-5 text-(--text-dark)">
            Follow us on:
          </h2>
          <div className="flex flex-row items-center gap-3">
            <BsInstagram className="text-xl " />
            <ImFacebook2 className="text-xl " />
            <BsLinkedin className="text-xl " />
            <FaXTwitter className="text-xl " />
          </div>
        </div>
      </div>
      <p className="py-4 text-center border-t mt-6 border-slate-200">
        Copyright 2026 &copy; <a href="https://prebuiltui.com">Organic.</a> All
        Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
