// react
import { createContext, useContext, useState } from "react";

// react-router-dom
import { useNavigate } from "react-router-dom";

// data
import { products } from "../data/products.js";
import { FavoriteProducts } from "../data/products.js";
import { cart } from "../data/cart.js";
import { useReducer } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const productsReducer = (state, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCTS":
        return {
          products: action.payload,
        };
      default:
        return state;
    }
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [allProducts, setAllProducts] = useState(products);
  const [state, dispatch] = useReducer(productsReducer, { products: [] });
  const [allFavoriteProducts, setAllFavoriteProducts] =
    useState(FavoriteProducts);
  const [cartProducts, setCartProducts] = useState(cart);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showLogin,
    setShowLogin,
    allProducts,
    setAllProducts,
    allFavoriteProducts,
    setAllFavoriteProducts,
    cartProducts,
    setCartProducts,
    ...state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
