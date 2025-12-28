import { useEffect, useState } from "react";
import { Context } from "./Context.jsx";
import { toast } from "react-hot-toast";

const notify = (message) => toast(message);

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

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

  const addToCart = (product) => {
    let savedCart = [...cart];
    let matchingIndex = savedCart.findIndex((item) => item.id === product._id);

    if (matchingIndex !== -1) {
      savedCart[matchingIndex] = {
        ...savedCart[matchingIndex],
        quantity: savedCart[matchingIndex].quantity + 1,
      };

      setCart(savedCart);
      notify("Product quantity updated");
      return;
    }

    const newCartItem = {
      id: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    savedCart = [...savedCart, newCartItem];
    setCart(savedCart);
    notify("Product added to cart");
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      return [...prev].filter((item) => item.id !== itemId);
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    cart,
    addToCart,
    removeFromCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
