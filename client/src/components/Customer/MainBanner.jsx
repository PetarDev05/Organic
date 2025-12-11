import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext.jsx";

const MainBanner = () => {
  const { user } = useAppContext();

  return (
    <div className="max-md:hidden flex flex-row items-center justify-between w-full bg-(--light-green) rounded-xl max-w-[1000px]">
      <div className="p-10 flex flex-col items-start gap-7">
        <h1 className="text-4xl font-bold text-(--text)">
          Freshness at <br /> your fingertips!
        </h1>
        {user && (
          <Link
            to="/products"
            className="cursor-pointer px-8 py-2 bg-(--primary) hover:bg-(--primary-darker) transition text-white rounded-full"
          >
            Shop now
          </Link>
        )}
      </div>
      <img src="/banner-image.png" alt="" className="rounded-tr-xl w-[400px]" />
    </div>
  );
};

export default MainBanner;
