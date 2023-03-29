import React from "react";
import HeaderAdmin from "./admin/HeaderAdmin";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import useAuth from "./useAuth";
import Routers from "./Routers";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Admin from "./admin/Admin";
const Layout = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div>
      {location.pathname.startsWith("/admin") ? (
        <RequireAuth>
          <Admin />
        </RequireAuth>
      ) : (
        <Header />
      )}
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
