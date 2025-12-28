import Tabs from "../components/Tabs.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import useProductsContext from "../hooks/useProductsContext.jsx";

const Products = () => {
  const { products } = useProductsContext();

  return (
    <div className="min-h-[95vh] flex flex-col items-center gap-10 p-5 sm:p-10">
      <div className="w-full flex flex-col items-center gap-5">
        <Tabs />
        <SearchBar />
      </div>
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-7">
        
        {products?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {!products.length && <p className="text-(--text-light) text-xl">No products found</p>}
    </div>
  );
};

export default Products;
