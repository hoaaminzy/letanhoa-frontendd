import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import logoDark from "../../../images/logo-light.svg";
import { Link } from "react-router-dom";
import useAuth from "../../../useAuth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { db } from "../../../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [data, setData] = useState([]);
  const [admin, setAdmin] = useState({});
  const collectionRef = collection(db, "users");
  useEffect(() => {
    const getData = async () => {
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };

    getData();
  }, []);
  const findAdmin = data?.filter(
    (item) => item.email === "letanhoa1234@gmail.com"
  );
  const checkUser = findAdmin.map((item) => item.email);
  const { currentUser } = useAuth();
  const yourName = useRef(null);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        currentUser = false;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigateAdmin = () => {
    navigate("/admin");
  };
  const toggleYourName = () => {
    yourName.current.classList.toggle("hide");
  };
  return (
    <header>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={logoDark} alt="" />
          </div>
        </Link>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="offtions">
          <Link to="/products">
            <div className="of">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Link>
          <div>
            <div ref={yourName} className="show" onClick={toggleYourName}>
              {currentUser && currentUser.email === "letanhoa1234@gmail.com" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <span onClick={logout}>Đăng xuất</span>
                  <span onClick={navigateAdmin}>Admin</span>
                </div>
              ) : (
                <span onClick={logout}>Đăng xuất</span>
              )}
            </div>
            {currentUser ? (
              <div className="name-user">
                <span onClick={toggleYourName}>{currentUser.displayName}</span>
              </div>
            ) : (
              <Link to="/login">
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
          </div>
          <Link to="/cart">
            <div className="cart-item">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="cart-length">{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
