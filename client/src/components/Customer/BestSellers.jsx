// react
import { useEffect, useState } from "react";

// components
import ProductCard from "./ProductCard.jsx";

// hooks
import { useAppContext } from "../../context/AppContext.jsx";

const BestSellers = () => {
  const { products } = useAppContext();

  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setBestProducts(() => {
      return products.filter((product) => product.best === true);
    });
  }, [products]);

  return (
    <div className=" w-full flex flex-col items-center gap-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-(--text) text-center">
        Best selling products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10 gap-5">
        {bestProducts?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
