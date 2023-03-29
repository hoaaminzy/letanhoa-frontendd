import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../products/Products";
import "./all-product.css";
const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/products");
      const resData = await res.json();
      setProducts(resData);
      setLoading(false);
    })();

    // axios
    //   .get("http://localhost:3001/products")
    //   .then((res) => {
    //     console.log('res',res);
    //     setProducts('resData',res?.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterCategorys = products.filter(
      (item) => item.category === category
    );
    setFilterCategory(filterCategorys);
  }, [products]);
  return (
    <div className="view-all-product">
      <div className="view-all-product-container">
        <div className="heading-view-all">
          <Link to="/">Home</Link> /{" "}
          <Link to={`/all-product/${category}`}>{category.toUpperCase()}</Link>
        </div>
        <div>
          {loading ? (
            <h3 style={{padding:'100px 0'}}>Loading...</h3>
          ) : (
            <>
              <Products data={filterCategory} display="flex" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
