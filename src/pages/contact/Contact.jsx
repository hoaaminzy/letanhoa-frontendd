import React from "react";
import HeadingPage from "../../components/layout/heading-page/HeadingPage";
import Products from "../products/Products";
import "./contact.css";
import DataProduct from "../../DataProducts";
import Subscribe from "../subscribe/Subscribe";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-page-container">
        <HeadingPage
          page="Contact Us"
          linkPage="contact"
          pageCurrent="Contact"
        />
      </div>
      <div className="contact-container">
        <div className="contacts">
          <div className="contacts-box">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="box-address">
              <p>Physical Address​</p>
              <div>
                <span>304 North Cardinal St.</span>
                <span>Dorchester Center, MA 02124</span>
              </div>
            </div>
          </div>
          <div className="contacts-box">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="box-address">
              <p>Physical Address​</p>
              <div>
                <span>304 North Cardinal St.</span>
                <span>Dorchester Center, MA 02124</span>
              </div>
            </div>
          </div>
          <div className="contacts-box">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="box-address">
              <p>Physical Address​</p>
              <div>
                <span>304 North Cardinal St.</span>
                <span>Dorchester Center, MA 02124</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="form">
        <div className="form-container">
          <div>
            <h3>Send us a message</h3>
            <p>
              Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu
              nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus
              gravida quis blandit turpis cursus in.
            </p>
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Number Phone" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
            </form>
            <div className="btn">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding:' 50px'}}>
        <div className="featured-product-container">
          <div>
            <span className="title-featured">Trending Now</span>
            <p>Feugiat pretium nibh ipsum consequat commodo.</p>
          </div>
          <div className="btn">
            <button>View All</button>
          </div>
        </div>
        <div style={{marginTop:'50px'}}>
            <Products data={DataProduct}/>
        </div>
      </div>
        <Subscribe/>
    </div>
  );
};

export default Contact;
