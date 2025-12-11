import NavBarSideBar from "../components/Seller/NavBarSideBar.jsx";
import LoginForm from "../components/Universal/LoginForm.jsx";
import Loading from "../components/Universal/Loading.jsx";
import { Outlet, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

const SellerLayout = () => {
  const { showLogin, user, loadingUser } = useAppContext();

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <div>
      {!user || user?.person?.role !== "admin" ? (
        <Navigate to="/" />
      ) : (
        <>
          {showLogin && <LoginForm />}
          <NavBarSideBar />
          <div className="pt-20 pl-22 md:pl-70">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default SellerLayout;
