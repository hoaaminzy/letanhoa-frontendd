import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
const HeaderAdmin = () => {
  return (
    <div
      className="header-admin"
      style={{ padding: "0px 50px", backgroundColor: "#ccc", height: "100px" }}
    >
      <div className="header-admin-container" style={{ height: "100%" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <li>
            <Link to="/">Client</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/all-product">AllProduct</Link>
          </li>
          <li>
            <Link to="/admin/add-product">AddProduct</Link>
          </li>
          <li>
            <Link to="/">User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAdmin;
