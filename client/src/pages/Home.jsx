import BigBanner from "../components/BigBanner.jsx";
import SmallBanner from "../components/SmallBanner.jsx";
import Features from "../components/Features.jsx";
import Newsletter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <div className="w-full px-5 py-10 flex flex-col items-center gap-15">
      <BigBanner />
      <SmallBanner />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
