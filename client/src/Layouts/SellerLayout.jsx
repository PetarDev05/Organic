// components
import NavBarSideBar from "../components/Seller/NavBarSideBar.jsx";
import ProductList from "../components/Seller/ProductList.jsx";
import NewProductForm from "../components/Seller/NewProductForm.jsx";
import OrderList from "../components/Seller/OrderList.jsx";

// react-router-dom
import { Routes, Route } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div className="">
      <NavBarSideBar />

      <div className="pt-20 pl-22 md:pl-70">
        <Routes>
          <Route path="/seller" element={<ProductList />} />
          <Route path="/seller/new" element={<NewProductForm />} />
          <Route path="/seller/orders" element={<OrderList />} />
        </Routes>
      </div>
    </div>
  );
};

export default SellerLayout;
