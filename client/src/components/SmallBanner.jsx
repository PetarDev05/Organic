import { Link } from "react-router-dom";

const SmallBanner = () => {
  return (
    <div className="md:hidden flex flex-col items-start justify-between w-full bg-(--light-green) rounded-xl max-w-250 pr-5">
      <div className="w-full p-10 flex flex-col items-center gap-7">
        <h1 className="text-3xl min-[500px]:text-4xl text-center font-bold text-(--text)">
          Freshness at <br /> your fingertips!
        </h1>

        <Link
          to="/products"
          className="cursor-pointer px-8 py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full"
        >
          Shop now
        </Link>
      </div>
      <img src="/small-banner.png" alt="" className="rounded-bl-xl w-100" />
    </div>
  );
};

export default SmallBanner;
