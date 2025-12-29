import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";
import { FaArrowLeftLong } from "react-icons/fa6";

const Thanks = () => {
  return (
    <div className="w-full min-h-[95vh] flex items-center justify-center bg-(--white) p-5">
      <div className="w-full max-w-120 p-10 flex flex-col items-center gap-3 rounded-xl border-2 border-(--primary)">
        <div
          to="/"
          className="w-full text-3xl flex flex-row items-center justify-center gap-3 bg-(--white)"
        >
          <ImLeaf className="text-(--primary)" />
          <p className="font-bold text-(--text)">Organic</p>
        </div>
        <h2 className="text-lg sm:text-xl text-center">
          Thanks for creating an order
        </h2>
        <p className="text-sm sm:text-md text-(--text-light) text-center">
          We truly appreciate your trust in us and your decision to choose our
          fresh fruits and vegetables. Your order has been successfully received
          and is now being carefully prepared. Each product is hand-selected to
          ensure the highest quality, freshness, and natural taste, straight
          from local farms.
        </p>
        <p className="text-sm sm:text-md text-(--text-light) text-center">
          Our team is committed to delivering your order promptly and in perfect
          condition, because we believe that healthy living starts with
          reliable, high-quality produce. If you have any questions or special
          requests regarding your order, please do not hesitate to contact us —
          we are always happy to help.
        </p>
        <p className="text-sm sm:text-md text-(--text-light) text-center">
          Thank you for supporting our work and choosing fresh, natural food. We
          look forward to serving you again soon!
        </p>
        <Link
          to="/"
          className="w-full text-(--primary) flex items-center gap-3"
        >
          <FaArrowLeftLong /> Return to home page
        </Link>
        <Link
          to="/products"
          className="w-full text-(--primary) flex items-center gap-3"
        >
          <FaArrowLeftLong /> Continue shopping!
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
