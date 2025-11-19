// components


// layouts
import CustomerLayout from "./Layouts/CustomerLayout.jsx";
import SellerLayout from "./Layouts/SellerLayout.jsx";

// react-router-dom
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CustomerLayout />
      {/* <SellerLayout /> */}
    </div>
  );
};

export default App;
