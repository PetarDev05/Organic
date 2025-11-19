// components
import MainBanner from "../components/Customer/MainBanner.jsx";
import SmallBanner from "../components/Customer/SmallBanner.jsx";
import Newsletter from "../components/Customer/Newsletter.jsx";
import BestSellers from "../components/Customer/BestSellers.jsx";
import Features from "../components/Customer/Features.jsx";

// context
import { useAppContext } from "../context/AppContext.jsx";

const Home = () => {
  const { allProducts } = useAppContext();

  return (
    <div className="w-full px-5 py-10 flex flex-col items-center gap-15">
      <MainBanner />
      <SmallBanner />
      <BestSellers />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
