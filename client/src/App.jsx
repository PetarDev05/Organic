import { useEffect } from "react";
import SellerLayout from "./Layouts/SellerLayout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AddressForm from "./pages/ShippingAddress.jsx";
import Orders from "./pages/Orders.jsx";
import ProductList from "./components/Seller/ProductList.jsx";
import OrderList from "./components/Seller/OrderList.jsx";
import NewProductForm from "./components/Seller/NewProductForm.jsx";
import { useAppContext } from "./context/AppContext.jsx";
import useAuthFetch from "./hooks/useAuthFetch.jsx";
import { toast, Toaster } from "react-hot-toast";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout.jsx";

const notify = (message) => toast(message);

const App = () => {
  const { 
    dispatchProducts, 
    dispatchUser, 
    user, 
    setLoadingUser, 
    loadingUser, 
    setCartLength, 
    cartProducts, 
  } = useAppContext();
  const authFetch = useAuthFetch();

  useEffect(() => {
    const getLength = async () => {
      const url = `http://localhost:8000/api/products/length/${user.person._id}`;
      const options = {
        method: "GET",
      }

      const data = await authFetch(url, options);
      setCartLength(data.cartLength)
    }

    if (!loadingUser && user) {
      getLength();
    }
  }, [loadingUser, user, cartProducts])

  useEffect(() => {
    const fetchAllProducts = async () => {
      const url = "http://localhost:8000/api/products/all";
      const options = {
        method: "GET",
      }
      const data = await authFetch(url, options);
      dispatchProducts({
        type: "GET_ALL_PRODUCTS",
        payload: data.dispatchValue,
      });
    };

    if (!loadingUser && user) {
      fetchAllProducts();
    }
  }, [user, loadingUser]);

  

  useEffect(() => {
    const extendSession = async () => {
      try {
        const url = "http://localhost:8000/api/users/extend";
        const options = {
          method: "POST",
          credentials: "include",
        };
        const response = await fetch(url, options);
        const json = await response.json();
        if (!response.ok) {
          dispatchUser({ type: "LOGOUT" });
          setLoadingUser(false)
          return;
        }
        dispatchUser({ type: "EXTEND_SESSION", payload: json });
        setLoadingUser(false)
      } catch (error) {
        notify(error.message);
        dispatchUser({ type: "LOGOUT" });
        setLoadingUser(false);
      }
    };

    extendSession()
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={!user ? <Navigate to="/" /> : <Cart />} />
          <Route path="products" element={!user ? <Navigate to="/" /> : <Shop />} />
          <Route path="details/:id" element={!user ? <Navigate to="/" /> : <ProductDetails />} />
          <Route path="address" element={!user ? <Navigate to="/" /> : <AddressForm />} />
          <Route path="orders" element={!user ? <Navigate to="/" /> : <Orders />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={!user ? <Navigate to="/" /> : <ProductList />} />
          <Route path="new" element={!user ? <Navigate to="/" /> : <NewProductForm />} />
          <Route path="orders" element={!user ? <Navigate to="/" /> : <OrderList />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  );
};

export default App;
