import React, { useEffect, useState } from "react";
import "./product-details.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Products from "../products/Products";
import { cartActions } from "../../redux/slices/cartSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [value, setValue] = useState(1);

  const getProducts = async () => {
    await axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = products.find((item) => item._id === id);
  const { _id, image, name, price, category, description, quantity } =
    filterProduct || {};

  const relatedProduct = products.filter((item) => item.category === category);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image,
        name,
        price,
      })
    );
    alert("Sản phẩm đã được thêm vào giỏ hàng");
  };

  const handleInc = () => {
    setValue(value + 1);
  };
  const handleDec = () => {
    value <= 1 ? alert("Tối đa 1 sản phẩm") : setValue(value - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filterProduct]);

  return (
    <div className="product-details">
      {loading ? (
        <h3 style={{ padding: "100px 0" }}>Loading...</h3>
      ) : (
        <div className="product-details-container">
          <div className="linka">
            <Link to="/">HOME</Link> /{" "}
            <Link to={`/all-product/${category}`}>
              {category.toUpperCase()}
            </Link>{" "}
            / <Link to={`/product/${id}`}>{name.toUpperCase()}</Link>
          </div>
          <div className="product-details-box">
            <div className="image-product">
              <img src={image} alt="" />
            </div>
            <div className="infor-details">
              <h3 className="name-product">{name}</h3>
              <span>Mã sản phẩm : {_id}</span>
              <span className="price-product">Giá: {price}</span>
              <span>Còn: {quantity} sản phẩm</span>
              <hr />
              <div className="addcart" style={{ width: "100%" }}>
                <div style={{ width: "max-content" }}>
                  <button className="des" onClick={handleDec}>
                    -
                  </button>
                  <span>{value}</span>
                  <button className="inc" onClick={handleInc}>
                    +
                  </button>
                </div>
                <div className="btn" style={{ width: "100%" }}>
                  <button
                    className=" btn-details"
                    onClick={addToCart}
                    style={{ width: "100%" }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <hr />
              <span>Category: {category}</span>
              <div className="description-product">
                Mô tả sản phẩm:
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                padding: "50px 0",
                display: "block",
              }}
            >
              Related products
            </span>
            <div>
              <Products data={relatedProduct} display="dfl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
