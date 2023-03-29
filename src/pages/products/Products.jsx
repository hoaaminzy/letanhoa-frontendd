import React, {useState, useEffect} from "react";
import "./products.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = ({ data, display }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };


 
  return (
    <div className="products-data">
      {display ? (
        <div className="dfl">
          {data?.map((product) => {
            return (
              <div
                className="products-data-container box-shadow"
                key={product._id}
              >
                <div className="products-data-img">
                  <img src={product.image} alt="" />
                </div>
                <div className="info-product">
                  <Link to={`/product/${product._id}`}>
                    <span className="products-data-name">{product.name}</span>
                  </Link>
                  <span className="price">{product.price} VND</span>
                  <span>Mã sản phẩm: {product._id}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Slider {...settings}>
          {data?.map((product) => {
            return (
              <div
                className="products-data-container box-shadow"
                key={product._id}
              >
                <div className="products-data-img">
                  <img src={product.image} alt="" />
                </div>
                <div className="info-product">
                  <Link to={`/product/${product._id}`}>
                    <span className="products-data-name">{product.name}</span>
                  </Link>
                  <span className="price">{product.price} VND</span>
                  <span>Mã sản phẩm: {product._id}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Products;
