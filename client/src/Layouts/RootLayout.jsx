// react-router-dom
import { Navigate, Outlet } from "react-router-dom";

// components
import NavBar from "../components/Customer/NavBar";
import Footer from "../components/Customer/Footer";
import LoginForm from "../components/Universal/LoginForm.jsx";
import Loading from "../components/Universal/Loading.jsx";

// context
import { useAppContext } from "../context/AppContext.jsx";

const RootLayout = () => {
  const { showLogin, user, loadingUser } = useAppContext();

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <div>
      {user?.person?.role === "admin" ? (
        <Navigate to="/seller" />
      ) : (
        <>
          {showLogin && <LoginForm />}
          <NavBar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
