// react
import { useEffect } from "react";

// components
import LoginForm from "./components/Universal/LoginForm.jsx";
import Loading from "./components/Universal/Loading.jsx";

// layouts
import CustomerLayout from "./Layouts/CustomerLayout.jsx";
import SellerLayout from "./Layouts/SellerLayout.jsx";

// pages
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AddressForm from "./pages/ShippingAddress.jsx";
import Checkout from "./pages/Checkout.jsx";
import Orders from "./pages/Orders.jsx";
import ProductList from "./components/Seller/ProductList.jsx";
import OrderList from "./components/Seller/OrderList.jsx";
import NewProductForm from "./components/Seller/NewProductForm.jsx";

// hooks
import { useAppContext } from "./context/AppContext.jsx";
import useAuthFetch from "./hooks/useAuthFetch.jsx";

// notifications
import { toast, Toaster } from "react-hot-toast";

// react-router-dom
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NoUserPage from "./pages/NoUserPage.jsx";
import NoUserLayout from "./Layouts/NoUserLayout.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import NavBar from "./components/Customer/NavBar.jsx";

const notify = (message) => toast(message);

const App = () => {
  const { dispatchProducts, showLogin, dispatchUser, user, setLoadingUser } = useAppContext();
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

    extendSession();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Shop />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="address" element={<AddressForm />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<ProductList />} />
          <Route path="new" element={<NewProductForm />} />
          <Route path="orders" element={<OrderList />} />
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
