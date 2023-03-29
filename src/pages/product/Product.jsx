import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../products/Products";
import axios from "axios";
import "./product.css";
import HeadingPage from "../../components/layout/heading-page/HeadingPage";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const handleFilter = (e) => {
    e.preventDefault();
    const filterData = e.target.value;
    if (filterData === "iphone") {
      const filteredProducts = products?.filter(
        (item) => item?.category === "iphone"
      );
      setProducts(filteredProducts);
    } else if (filterData === "tablet") {
      const filteredProducts = products?.filter(
        (item) => item?.category === "tablet"
      );
      setProducts(filteredProducts);
    } else if (filterData === "watch") {
      const filteredProducts = products?.filter(
        (item) => item?.category === "watch"
      );
      setProducts(filteredProducts);
    } else if (filterData === "sound") {
      const filteredProducts = products?.filter(
        (item) => item?.category === "sound"
      );
      setProducts(filteredProducts);
    } else if (filterData === "all") {
      const filteredProducts = products;
      setProducts(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(searchedProducts);
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
        <HeadingPage
          page="Products"
          pageCurrent="Products"
          linkPage="products"
        />
      </div>
      {loading ? (
        <h3 style={{ padding: "100px" }}>Loading...</h3>
      ) : (
        <div className="products-page-item">
          <div>
            <ul
              style={{
                gap: "20px",
                width: "100px",
                display: "flex",
                paddingBottom: "30px",
              }}
            >
              <li>
                <Link
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  to="/all-product/iphone"
                >
                  Iphone
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  to="/all-product/tablet"
                >
                  Tablet
                </Link>
              </li>
              <li>|</li>

              <li>
                <Link
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  to="/all-product/watch"
                >
                  Watch
                </Link>
              </li>
              <li>|</li>

              <li>
                <Link
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  to="/all-product/sound"
                >
                  Sound
                </Link>
              </li>
            </ul>
          </div>
          <div className="heading-item">
            <p>
              SHOWING ALL{" "}
              <span style={{ fontWeight: "bold" }}>{products.length}</span>{" "}
              RESULTS
            </p>
            <input
              style={{ width: "500px", padding: "10px" }}
              type="text"
              placeholder="Search here..."
              onChange={handleSearch}
            />
            <form action="">
              <select style={{ width: "200px" }} onChange={handleFilter}>
                <option value="all">All</option>
                <option value="iphone">Iphone</option>
                <option value="tablet">Tablet</option>
                <option value="watch">Watch</option>
                <option value="sound">Sound</option>
              </select>
            </form>
          </div>
          <div>
            {products.length === 0 ? (
              <h3>No product are found</h3>
            ) : (
              <Products data={products} display="dfl" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
