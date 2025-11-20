// react
import { useEffect } from "react";

// components

// layouts
import CustomerLayout from "./Layouts/CustomerLayout.jsx";
import SellerLayout from "./Layouts/SellerLayout.jsx";

// hooks
import { useAppContext } from "./context/AppContext.jsx";
import useAuthFetch from "./hooks/useAuthFetch.jsx";

const App = () => {
  const { dispatch: dispatchProducts } = useAppContext();
  const authFetch = useAuthFetch();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const url = "http://localhost:8000/api/products/all";
      const data = await authFetch(url);
      dispatchProducts({
        type: "GET_ALL_PRODUCTS",
        payload: data.dispatchValue,
      });
    };

    fetchAllProducts();
  }, []);

  return (
    <div>
      <CustomerLayout />
      {/* <SellerLayout /> */}
    </div>
  );
};

export default App;
