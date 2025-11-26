// react
import { createContext, useContext, useState } from "react";

// react-router-dom

// data
import { products } from "../data/products.js";
import { FavoriteProducts } from "../data/products.js";
import { cart } from "../data/cart.js";
import { useReducer } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const productsReducer = (productsState, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCTS":
        return {
          products: action.payload,
        };
      default:
        return productsState;
    }
  };

  const userReducer = (userState, action) => {
    switch (action.type) {
      
      case "LOGIN":
        return {
          user: action.payload,
        };
      case "EXTEND_SESSION":
        return {
          user: action.payload,
        };
      case "LOGOUT":
        return {
          user: null,
        };
      default:
        return userState;
    }
  };

  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [allProducts, setAllProducts] = useState(products);
  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    products: [],
  });
  const [loadingUser, setLoadingUser] = useState(true);
  const [userState, dispatchUser] = useReducer(userReducer, { user: null });
  const [allFavoriteProducts, setAllFavoriteProducts] =
    useState(FavoriteProducts);
  const [cartProducts, setCartProducts] = useState(cart);

  const value = {
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
    ...productsState,
    dispatchProducts,
    ...userState,
    dispatchUser,
    loadingUser,
    setLoadingUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
