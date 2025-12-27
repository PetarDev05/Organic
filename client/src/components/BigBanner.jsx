import { Link } from "react-router-dom";

const BigBanner = () => {
  return (
    <div className="max-md:hidden flex flex-row items-center justify-between w-full bg-(--light-green) rounded-xl max-w-250">
      <div className="p-10 flex flex-col items-start gap-7">
        <h1 className="text-4xl font-bold text-(--text)">
          Freshness at <br /> your fingertips!
        </h1>
        <Link
          to="/products"
          className="cursor-pointer px-8 py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full"
        >
          Shop now
        </Link>
      </div>
      <img src="/banner-image.png" alt="banner" className="rounded-tr-xl w-100" />
    </div>
  );
};

export default BigBanner;
