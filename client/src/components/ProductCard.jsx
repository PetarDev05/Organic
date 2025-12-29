import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
// const notify = (message) => toast(message);
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import useProductsContext from "../hooks/useProductsContext.jsx";

const ProductCard = ({ product }) => {
  const { cart } = useProductsContext();
  const { addToCart } = useProductsContext();

  const inCart = cart.some((item) => item.id === product._id);

  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 p-3 bg-white min-w-56 max-w-56 w-full">
      <Link
        to={`/${product._id}`}
        className="aspect-square group cursor-pointer flex items-center justify-center px-2"
      >
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>
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
        <div className="flex items-center justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-(--primary)">
            ${(product.price / 100).toFixed(2)}
          </p>
          <div className="flex flex-row items-center gap-2">
            <button
              to="/"
              className="py-0.75 px-2 border border-(--primary) text-(--primary) rounded cursor-pointer"
              onClick={() => addToCart(product)}
            >
              {inCart ? "+ 1" : <LuShoppingCart className="text-lg" />}
            </button>
            <Link
              to="/checkout"
              className="py-1 px-3 cursor-pointer rounded bg-(--primary) text-(--white)"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
