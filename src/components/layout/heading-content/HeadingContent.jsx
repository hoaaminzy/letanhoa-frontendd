import React from "react";
import "./heading-content.css";
import { Link } from "react-router-dom";
const HeadingContent = ({ title, description, view}) => {
  return (
    <div className="featured-product-container">
      <div>
        <span className="title-featured">{title}</span>
        <p>{description}</p>
      </div>
      <Link to={`/all-product/${view}`}>
        <div className="btn">
          <button>View All</button>
        </div>
      </Link>
    </div>
  );
};

export default HeadingContent;
