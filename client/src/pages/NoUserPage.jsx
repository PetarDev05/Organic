// components
import Features from "../components/Customer/Features";
import MainBanner from "../components/Customer/MainBanner";
import Newsletter from "../components/Customer/Newsletter";
import SmallBanner from "../components/Customer/SmallBanner";

const NoUserPage = () => {
  return (
    <div className="w-full px-5 py-10 flex flex-col items-center gap-15">
      <MainBanner />
      <SmallBanner />
      <Features />
      <Newsletter />
    </div>
  );
};

export default NoUserPage;
