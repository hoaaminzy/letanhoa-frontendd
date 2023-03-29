import React from "react";
import "./cart.css";
import cartimage from "../../images/product-3.webp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import useAuth from "../../useAuth";
const Cart = () => {
  const {currentUser} = useAuth()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cart">
      <Link to="/">
        <div className="btn">
          <button style={{ width: "200px" }}>Tiếp tục mua hàng</button>
        </div>
      </Link>
      <h3>CART</h3>
      <div className="cart-container">
        <div className="cart-infor">
          <div className="heading-cart">
            <span className="product-cart">Product</span>
            <span className="quantity-cart">Quantity</span>
            <span className="subtotal-cart">Total Price</span>
          </div>
          <hr style={{ marginTop: "30px" }} />
          {cartItems.length === 0 ? (
            <h3 style={{ textAlign: "center", padding: "100px 0" }}>
              No product to cart
            </h3>
          ) : (
            cartItems.map((item,index) => {
              return (
                <div className="border-b" key={index}>
                  <div className="heading-cart">
                    <span className="product-cart">
                      <div className="abc">
                        <img src={item.image} alt="" />
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            flexDirection: "column",
                          }}
                        >
                          <p>{item.name}</p>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </span>
                    <span className="quantity-cart">
                      <div className="btn-quantity">
                        <button>-</button>
                        <span>{item.quantityy}</span>
                        <button>+</button>
                      </div>
                    </span>
                    <span className="subtotal-cart">
                      <div>
                        <span className="price">
                          {item.price * item.quantityy}
                        </span>
                        <VCLL item={item} />
                      </div>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="total-infor">
          <div className="aaaa">
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Cart totals
            </span>
            <div>
              <div className="bacccc">
                <p>Subtotal</p>
                <span className="subtotal-all">342</span>
              </div>
              <div className="border-bb"></div>
              <div className="bacccc">
                <p>Total</p>
                <span className="total-all">{totalAmount}</span>
              </div>
            </div>
            <Link to={`/checkout/${currentUser.uid}`}>
            
            <div className="btn">
              <button className="btn-cart">Process to checkcart</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const VCLL = ({ item }) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const removeProduct = () => {
    dispatch(cartActions.deleteItem(item.id.id));
  };

  return (
    <span onClick={removeProduct}>
      <i className="fa-solid fa-trash"></i>
    </span>
  );
};
