import { useEffect, useState } from "react";
import { Context } from "./Context.jsx";

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (category = null, searchTerm = null) => {
    try {
      const params = new URLSearchParams();
      if (category) params.append("category", category);
      if (searchTerm) params.append("searchTerm", searchTerm);

      const url = `http://localhost:8000/api/products?${params.toString()}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching products");
      }

      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
    fetchProducts,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
