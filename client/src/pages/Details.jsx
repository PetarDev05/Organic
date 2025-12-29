import { useParams, Link } from "react-router-dom";
import useProductsContext from "../hooks/useProductsContext";
import { FaRegDotCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Details = () => {
  const { productId } = useParams();
  const { products, addToCart } = useProductsContext();

  if (!products.length) {
    return (
      <div className="w-full h-[95vh] text-2xl flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const product = products?.find((product) => product._id === productId);

  return (
    <div className="w-full min-h-[80vh] p-5 sm:p-10 flex flex-col items-center justify-center gap-10">
      <div className="w-75 min-[500px]:w-112.5 lg:w-225 flex flex-col lg:flex-row  items-center gap-7 ">
        <div className="aspect-square w-[90%] min-[500px]:w-full border border-(--primary) flex items-center justify-center rounded-xl">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-5 px-3">
          <div className="">
            <h2 className="text-3xl md:text-4xl font-semibold text-(--text) text-center">
              {product.name}
            </h2>
            <div className="flex items-center gap-1">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i + 0.5 ? (
                    <BsFillStarFill key={i} className="text-(--primary)" />
                  ) : (
                    <BsStar key={i} className="text-(--primary)" />
                  )
                )}
              <p>({product.rating.toFixed(1)})</p>
            </div>
          </div>
          <div className="">
            <p className="md:text-xl text-base font-medium text-(--primary)">
              ${(product.price / 100).toFixed(2)}
            </p>
            <p className="text-(--text-light)">(Without taxes)</p>
          </div>
          <div className="">
            <p className="text-(--text) font-semibold text-lg">
              About the product:
            </p>
            <ul className="">
              {product.about.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex flex-row items-center gap-3"
                >
                  <FaRegDotCircle className="text-sm text-(--primary)" />
                  <li className="text-(--text-light)">{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <Link
              onClick={() => addToCart(product)}
              to="/checkout"
              className="w-full text-(--white) flex-1 py-2 bg-(--primary) text-center rounded-sm cursor-pointer"
            >
              Buy now
            </Link>
          <Link
            to="/products"
            className="w-full text-(--primary) flex items-center gap-3"
          >
            <FaArrowLeftLong /> Continue shopping!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
