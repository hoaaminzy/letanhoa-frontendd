import React from "react";
import logoDark from "../../../images/logo-light.svg";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="f1 df">
              <img src={logoDark} alt="" />
            <p>
              Cras gravida bibendum dolor eu varius morbi fermentum velit eget
              vehicula lorem sodales donec quis volutpat orci.
            </p>
            <ul className="icon-footer">
              <li>
                <a>
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitch"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="f1">
            <span className="footer-title">USEFUL LINKS</span>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>

              <li>
                <a href="#">Login</a>
              </li>

              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="f1">
            <span className="footer-title">CUSTOM AREA</span>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Tracking List</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Orders</a>
              </li>

              <li>
                <a href="#">My Cart</a>
              </li>
            </ul>
          </div>
          <div className="f1">
            <span className="footer-title">MORE INFORMATION</span>
            <p>
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
