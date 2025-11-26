// pages
import NoUserPage from "../pages/NoUserPage.jsx"

// components
import Footer from "../components/Customer/Footer.jsx";
import NavBar from "../components/Customer/NavBar";

// react-router-dom
import { Routes, Route } from "react-router-dom";

const NoUserLayout = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<NoUserPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default NoUserLayout