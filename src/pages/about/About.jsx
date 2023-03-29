import React, { useRef } from "react";
import HeadingPage from "../../components/layout/heading-page/HeadingPage";
import "./about.css";
import brand1 from "../../images/brand-1.webp";
import brand2 from "../../images/brand-5.webp";
import brand3 from "../../images/brand-3.webp";
import brand4 from "../../images/brand-4.webp";
import brand5 from "../../images/brand-5.webp";
import brand6 from "../../images/brand-6.webp";
import u1 from "../../images/testimonial-user-1.webp";
import u2 from "../../images/testimonial-user-2.webp";
import u3 from "../../images/testimonial-user-3.webp";
import u4 from "../../images/testimonial-user-4.webp";

import CountUp from "react-countup";
import aboutTeam from "../../images/about-us-team-scaled-1.webp";
import Subscribe from "../subscribe/Subscribe";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <HeadingPage
          linkPage="about-us"
          page="About Us"
          pageCurrent="About Us"
        />
        <div className="add"></div>
      </div>
      <div className="aoron">
        <div className="aoron-content">
          <img src={aboutTeam} alt="" />
          <div className="aoron-box">
            <div>
              <h3>Amber Murphy</h3>
              <span>Founder & Directo</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div>
              <h3>Amber Murphy</h3>
              <span>Founder & Directo</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div>
              <h3>Amber Murphy</h3>
              <span>Founder & Directo</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div>
              <h3>Amber Murphy</h3>
              <span>Founder & Directo</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quisque" style={{ marginTop: "-200px" }}>
        <div className="quisque-container">
          <p className="desc">
            Quisque Scelerisque Nisi Sodales Duis Nonrisus Vel Imperdiet
          </p>
          <div className="countup">
            <div>
              <span className="number-count">
                <CountUp end={3000} />
              </span>
              <span>GADGETS SOLD</span>
            </div>
            <div>
              <span className="number-count">
                <CountUp end={2500} />
              </span>
              <span>GADGETS SOLD</span>
            </div>
            <div>
              <span className="number-count">
                <CountUp end={100} />%
              </span>
              <span>GADGETS SOLD</span>
            </div>
          </div>
          <p className="heading-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            donec et odio pellentesque diam volutpat. Ullamcorper malesuada
            proin libero nunc consequat interdum varius.
          </p>
          <div className="btn btn-about">
            <button>Apply Now</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="video-about">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/n9YqRPv-ulM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="brand">
        <div className="brand-container">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-container">
          <span className="title-testimonials">Testimonials</span>
          <div className="testimonials-content">
            <div className="testimonials-box">
              <img src={u1} alt="" />
              <div className="abccccccc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui vivamus arcu felis bibendum ut tristique egestas.
                </p>
                <div>
                  <span>Frank McDonald</span>
                  <span>IT Specialist</span>
                </div>
              </div>
            </div>
            <div className="testimonials-box">
              <img src={u3} alt="" />
              <div className="abccccccc">
                <p>
                  Feugiat pretium nibh ipsum consequat nisl vel pretium.
                  Volutpat commodo sed egestas egestas fringilla phasellus
                  faucibus scelerisque eleifend massa tincidunt nunc pulvinar
                  sapien et ligula.
                </p>
                <div>
                  <span>Kelly Miller</span>
                  <span>Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonials-box">
              <img src={u3} alt="" />
              <div className="abccccccc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui vivamus arcu felis bibendum ut tristique egestas.
                </p>
                <div>
                  <span>Melissa Paterson</span>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonials-box">
              <img src={u4} alt="" />
              <div className="abccccccc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui vivamus arcu felis bibendum ut tristique egestas.
                </p>
                <div>
                  <span>Gregory Tulson</span>
                  <span>Film Maker</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn btn-about">
            <button>See All Review </button>
          </div>
        </div>
      </div>
      <div style={{marginTop:'-150px'}}>
        <Subscribe />
      </div>
    </div>
  );
};

export default About;
