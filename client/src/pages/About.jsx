import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="p-5 sm:p-10 w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 max-w-150">
        <h2 className="w-full text-(--text) text-3xl font-semibold text-start">
          About us
        </h2>
        <p className="">
          We are a small, locally driven project created with a simple goal in
          mind — to make fresh fruits and vegetables easily accessible while
          keeping the experience straightforward and transparent. Our focus is
          on quality, clarity, and usability, rather than complexity. This
          platform was designed as a modern, minimal online store that
          emphasizes functionality and user experience.
        </p>
        <div className="relative w-full min-[400px]:w-90 min-[400px]:h-90 rounded-full aspect-square bg-(--light-green)">
          <img
            src="/basket.png"
            alt="basket-with-fruits"
            className="absolute w-full min-[400px]:w-100 lg: "
          />
        </div>
        <p className="">
          From browsing products to placing an order, the process is
          intentionally simple and intuitive. While this is not a large
          commercial system, it reflects real-world e-commerce concepts built
          with scalability and clean architecture in mind.
        </p>
        <Link to="/products" className="w-full text-(--primary) flex items-center gap-3">
          <FaArrowLeftLong /> Continue shopping!
        </Link>
      </div>
    </div>
  );
};

export default About;
