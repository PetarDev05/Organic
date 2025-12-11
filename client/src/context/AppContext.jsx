import { createContext, useContext, useState } from "react";
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
  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    products: [],
  });
  const [cartLength, setCartLength] = useState(0);
  const [adminProducts, setAdminProducts] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userState, dispatchUser] = useReducer(userReducer, { user: null });
  const [orders, setOrders] = useState([]);
  
  const [selected, setSelected] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([])
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  });

  const [productFlag, setProductFlag] = useState("fruits");
  

  const value = {
    user,
    setUser,
    isSeller,
    setIsSeller,
    showLogin,
    searchedProducts,
    setSearchedProducts,
    setShowLogin,
    ...productsState,
    dispatchProducts,
    ...userState,
    dispatchUser,
    loadingUser,
    setLoadingUser,
    cartProducts,
    setCartProducts,
    address,
    setAddress,
    orders, 
    setOrders,
    adminProducts,
    setAdminProducts,
    cartLength,
    setCartLength,
    productFlag,
    setProductFlag,
    selected, 
    setSelected,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
