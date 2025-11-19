// components
import Tabs from "../components/Customer/Tabs.jsx";
import ProductCard from "../components/Customer/ProductCard.jsx";

// context
import { useAppContext } from "../context/AppContext.jsx";

const Shop = () => {
  const { allProducts } = useAppContext();

  return (
    <div className="w-full min-h-[65vh] flex flex-col items-center justify-start gap-10 px-10 py-20">
      <Tabs />

      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 place-items-center gap-7">
        {allProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
