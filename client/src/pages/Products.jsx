import { useEffect, useState } from "react";
import Tabs from "../components/Tabs.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ProductCard from "../components/ProductsCard.jsx";
import useFetch from "../hooks/useFetch.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const send = useFetch();

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:8000/api/products/";
      const products = await send(url);
      setProducts(products);
    };

    fetchProducts();
  }, []);

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
    </div>
  );
};

export default Products;
