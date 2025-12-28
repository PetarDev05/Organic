import { useEffect, useState } from "react";
import { Context } from "./Context.jsx";

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async (category = null, searchTerm = null) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (category) params.append("category", category);
      if (searchTerm) params.append("searchTerm", searchTerm);

      const url = `http://localhost:8000/api/products?${params.toString()}`;

      const response = await fetch(url);
      if (!response.ok) {
        setError("Somtehing went wrong.Try again later");
        return;
      }

      const json = await response.json();
      setProducts(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
    fetchProducts,
    category,
    setCategory,
    loading,
    error,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
