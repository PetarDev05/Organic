// components
import ProductCard from "./ProductCard.jsx";

// context
import { useAppContext } from "../../context/AppContext.jsx";

const BestSellers = () => {
  const { allFavoriteProducts } = useAppContext();

  return (
    <div className=" w-full flex flex-col items-center gap-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-(--text) text-center">
        Best selling products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10 gap-5">
        {allFavoriteProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
