import React, { useEffect, useState } from "react";
import "./checkout.css";
import { auth } from "../../firebase.config";
import useAuth from "../../useAuth";
import { useParams } from "react-router-dom";
import useGetUser from "../../useGetUser";
import { db } from "../../firebase.config";
import { doc, getDoc, or } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const { currentUser } = useAuth();
  const [user, setUser] = useState({});
  const { id } = useParams();

  const { data: users } = useGetUser("users");
  const docRef = doc(db, "users", id);
  useEffect(() => {
    const getUser = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No user");
      }
    };
    getUser();
  }, []);

  const { address, displayName, phone, email } = user || {};
  const [order, setOder] = useState({
    fullName: "",
    address: "",
    phone: "",
    products: "",
    // totalPrice: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setOder((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, address, phone, email } = order;

    if (fullName && address && phone && email) {
      const fetchData = await fetch("http://localhost:3001/create-orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      alert(fetchRes.message);

      setOder(() => {
        return {
          fullName: "",
          address: "",
          phone: "",
          email: "",
        };
      });
    } else {
      alert("Enter required Fields");
    }
  };
  return (
    <div className="checkout">
      <div className="checkout-container">
        <Link to="/cart">
          <div
            className="btn"
            style={{
              margin: "20px 0",
            }}
          >
            <button>Trở lại</button>
          </div>
        </Link>
        <h3>Checkout</h3>
        <div className="checkout-content">
          <div className="checkout-left">
            <h4>Billing details</h4>
            <form className="form-checkout" onSubmit={handleSubmit}>
              <div className="first abccccccccc">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={order.fullName}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="abccccccccc">
                <label htmlFor="">Street address </label>
                <input
                  type="text"
                  name="address"
                  value={order.address}
                  onChange={handleOnChange}
                />
              </div>
              <div className="abccccccccc">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={order.phone}
                  onChange={handleOnChange}
                />
              </div>
              <div className="abccccccccc">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={order.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="btn">
                <button className="checkout-btn" type="submit">
                  Place-order
                </button>
              </div>
            </form>
          </div>
          <div className="checkout-right">
            <div className="checkout-right-container">
              <h2>Your order</h2>
              <div className="checkout-info">
                <div className="name-checkout-info">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                <hr />
                {cartItems.length === 0 ? (
                  <>
                    <span
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1.2rem",
                      }}
                    >
                      Không có sản phẩm nào
                    </span>
                  </>
                ) : (
                  <>
                    {cartItems.map((item) => {
                      return (
                        <div className="name-checkout-info">
                          <span>
                            {item.name} - {item.quantityy}
                          </span>
                          <span>{item.quantityy * item.price}</span>
                        </div>
                      );
                    })}
                  </>
                )}

                <div
                  className="name-checkout-info"
                  style={{ borderTop: "1px dotted #ccc", paddingTop: "10px" }}
                >
                  <span>Total</span>
                  <span>{totalAmount}</span>
                </div>
                <p className="pppp">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <div className="btn">
                  <button className="checkout-btn">Place-order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
