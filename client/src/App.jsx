import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Details from "./pages/Details.jsx";
import Checkout from "./pages/Checkout.jsx";
import Thanks from "./pages/Thanks.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productId" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
