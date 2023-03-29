import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Login from "./components/layout/login/Login";
import Signup from "./components/layout/signup/Signup";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import ProductDetails from "./pages/details/ProductDetails";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Footer from "./components/layout/footer/Footer";
import AllProduct from "./admin/AllProduct";
import AddProduct from "./admin/AddProduct";
import DashBoard from "./admin/DashBoard";
import Protected from "./Protected";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";
import ProductsPage from "./pages/all-products/ProductsPage";
const Routers = () => {
  const { currentUser } = useAuth();
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  // const checkOuts = ({ children }) => {
  //   return currentUser && currentUser.email === "letanhoa1234@gmail.com" ? (
  //     children
  //   ) : (
  //     <Navigate to="/" />
  //   );
  // };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/all-product/:category" element={<ProductsPage/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        {/* <Route path="/*" element={<Protected />}> */}
        <Route
          path="admin/all-product"
          element={
            <RequireAuth>
                <AllProduct />
            </RequireAuth>
          }
        />
        <Route
          path="admin/add-product"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="admin/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        />
        {/* </Route> */}
        {/* 
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default Routers;
