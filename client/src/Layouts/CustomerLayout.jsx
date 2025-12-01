// components
import NavBar from "../components/Customer/NavBar.jsx";
import Footer from "../components/Customer/Footer.jsx";

//pages
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart.jsx";
import Shop from "../pages/Shop.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import AddressForm from "../pages/ShippingAddress.jsx";
import Orders from "../pages/Orders.jsx";
// react-router-dom
import { Routes, Route } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<AddressForm />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default CustomerLayout;
