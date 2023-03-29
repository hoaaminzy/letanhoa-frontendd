import React, { useEffect, useState } from "react";
import "./home.css";
import oculus from "../../images/oculus-img.webp";
import Products from "../products/Products";
import DataProduct from "../../DataProducts";
import articial from "../../images/article-image-4.webp";
import articial2 from "../../images/article-image-5.webp";
import axios from "axios";
import airpad from "../../images/home-page-cta-ipad.webp";
import Subscribe from "../subscribe/Subscribe";
import HeadingContent from "../../components/layout/heading-content/HeadingContent";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iphone, setIphone] = useState([]);
  const [tablet, setTablet] = useState([]);
  const [watch, setWatch] = useState([]);
  const [sound, setSound] = useState([]);

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

  useEffect(() => {
    const filterIphone = products.filter((item) => item.category === "iphone");
    const filterTablet = products.filter((item) => item.category === "tablet");
    const filterWatch = products.filter((item) => item.category === "watch");
    const filterSound = products.filter((item) => item.category === "sound");

    setIphone(filterIphone);
    setSound(filterSound);
    setWatch(filterWatch);
    setTablet(filterTablet);
  }, [products]);
  return (
    <>
      <section className="banner">
        <div className="banner-container">
          <div className="banner-infor">
            <div className="heading">
              <span className="banner-price">From &299</span>
              <h3 className="banner-heading">Iphone 12 Pro</h3>
              <div className="btn">
                <button>Buy Now</button>
                <button
                  style={{ backgroundColor: "transparent", color: "#898a8c" }}
                >
                  <i className="fa-regular fa-circle-play"></i> Watch Video
                </button>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="sales">
              <div className="sales-container">
                <div className="ab">
                  <div>
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div>
                    <span className="title-sale">Free Shipping</span>
                    <p className="heading-sale">
                      Free shipping on all US orders
                    </p>
                  </div>
                </div>
                <div className="ab">
                  <div>
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                  </div>
                  <div>
                    <span className="title-sale">100% Money Back</span>
                    <p className="heading-sale">You have 10 days to return</p>
                  </div>
                </div>
                <div className="ab">
                  <div>
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <span className="title-sale">Support 24/7</span>
                    <p className="heading-sale">Contact us 24 hours a day</p>
                  </div>
                </div>
                <div className="ab">
                  <div>
                    <i className="fa-solid fa-money-check-dollar"></i>
                  </div>
                  <div>
                    <span className="title-sale">100% Payment Secure</span>
                    <p className="heading-sale">
                      Your payment are safe with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="products">
        <div className="all-products">
          <div className="all-products-container">
            <div className="product-right">
              <div className="laptop">
                <span className="name-product">Laptops</span>
                <span className="con">245</span>
              </div>
            </div>
            <div className="product-left">
              <div className="abcc">
                <div className="drones">
                  <span className="name-product">Drones</span>
                  <span className="con">245</span>
                </div>
              </div>
              <div className="zxc">
                <div className="double">
                  <div className="smp">
                    <div className="smartphone">
                      <span className="name-product">Smartphone</span>
                      <span className="con">245</span>
                    </div>
                  </div>
                  <div className="gm">
                    <div className="gaming">
                      <span className="name-product">Gaming</span>
                      <span className="con">245</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dont">
          <div className="dont-container">
            <div className="dddd">
              <span className="dont-title">#1 Hacus Habitasse</span>
              <div className="ngang"></div>
              <p className="dont-heading">
                Neque egestas odio nisi congue quisque.
              </p>
            </div>
            <div className="dddd">
              <span className="dont-title">#2 Natoque Penatibus</span>
              <div className="ngang"></div>
              <p className="dont-heading">
                Ultrices tincidunt arcu non sodales vestibulum
              </p>
            </div>
            <div className="dddd">
              <span className="dont-title">#3 Tincidunt Ornare</span>
              <div className="ngang"></div>
              <p className="dont-heading">
                Dignissim diam quis enim lobortis scelerisque
              </p>
            </div>
            <div className="dddd">
              <span className="dont-title">#4 Aliquam Sagittis</span>
              <div className="ngang"></div>
              <p className="dont-heading">
                Venenatis cras sed felis eget aliquet commodo.
              </p>
            </div>
          </div>
        </div>
        <div className="oculus">
          <div className="oculus-container">
            <div className="oculus-image">
              <h3>Ocusus VR</h3>
              <p className="oculus-heading">
                Ullamcorper malesuada proin libero nunc consequat interdum
                varius consequat mauris nunc congue nisi vitae.
              </p>
              <div className="btn">
                <button>View Offer</button>
                <button
                  style={{ backgroundColor: "transparent", color: "#898a8c" }}
                >
                  <i className="fa-regular fa-circle-play"></i> Watch Video
                </button>
              </div>
            </div>
            <div className="image-oculus">
              <img src={oculus} alt="" />
            </div>
          </div>
        </div>
        <div className="featured-products">
          <HeadingContent
            view="iphone"
            title="Iphone Products"
            description="Feugiat pretium nibh ipsum consequat commodo."
          />
          <div className="wrapper-product">
            {loading ? <h3>Loading...</h3> : <Products data={iphone} />}
          </div>
        </div>
        <div className="featured-products">
          <HeadingContent
            view="tablet"
            title="Tablet Products"
            description="Feugiat pretium nibh ipsum consequat commodo."
          />
          <div className="wrapper-product">
            {loading ? <h3>Loading...</h3> : <Products data={tablet} />}
          </div>
        </div>
        <div className="featured-products">
          <HeadingContent
            view="watch"
            title="Watch Products"
            description="Feugiat pretium nibh ipsum consequat commodo."
          />
          <div className="wrapper-product">
            {loading ? <h3>Loading...</h3> : <Products data={watch} />}
          </div>
        </div>
        <div className="featured-products">
          <HeadingContent
            view="sound"
            title="Sound Products"
            description="Feugiat pretium nibh ipsum consequat commodo."
          />
          <div className="wrapper-product">
            {loading ? <h3>Loading...</h3> : <Products data={sound} />}
          </div>
        </div>
      </div>
      <div className="super">
        <div className="super-container">
          <div className="image-super">
            <img src={airpad} alt="" />
          </div>
          <div className="move">
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Super Powerful Chip
            </span>
            <p>Pellentesque pulvinar habitant morbi tristique maecenas.</p>
          </div>
          <div className="infor-super">
            <span className="price-super">From $1099</span>
            <span className="name-supper">Ipad Pro</span>
            <p>
              Libero nunc consequat interdum Varius sitamet mattis vulputate
              Ultricies mieget mauris pharetra
            </p>
            <div className="btn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="learn-more">
        <div className="learn-more-container">
          <div className="learn-more-box">
            <div className="img-learn">
              <i className="fa-solid fa-truck-monster"></i>
            </div>
            <span className="title-learn">Special Offers</span>
            <p>
              Lorem ipsum consectetur adipiscing eiusmod tempor incididunt
              labore dolore magna aliqua.
            </p>
            <div className="btn">
              <button>Learn More</button>
            </div>
          </div>
          <div className="learn-more-box">
            <div className="img-learn">
              <i className="fa-solid fa-mask-ventilator"></i>
            </div>
            <span className="title-learn">Amazing Events</span>
            <p>
              Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit
              turpis cursus commodo sed egestas egestas.
            </p>
            <div className="btn">
              <button>Learn More</button>
            </div>
          </div>
          <div className="learn-more-box">
            <div className="img-learn">
              <i className="fa-solid fa-fingerprint"></i>
            </div>
            <span className="title-learn">Human Reviews</span>
            <p>
              Ullamcorper malesuada proin libero nunc consequat interdum varius
              consequat mauris nunc congue nisi vitae.
            </p>
            <div className="btn learn-hover">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lasted">
        <div className="lasted-container">
          <div className="featured-product-container">
            <div>
              <span className="title-featured">Latest News</span>
              <p>Feugiat pretium nibh ipsum consequat commodo.</p>
            </div>
            <div className="btn">
              <button>View All</button>
            </div>
          </div>
          <div className="feauted-product-box">
            <div className="box box-about">
              <div className="about-me">
                <span>CHƯA PHÂN LOẠI</span>
                <span>Chào tất cả mọi người!</span>
                <p>Cảm ơn vì đã sử dụng WordPress. Đây là bài…</p>
              </div>
              <div className="btn">
                <button>Read more</button>
              </div>
            </div>
            <div className="box">
              <div>
                <img src={articial} alt="" />
              </div>

              <div className="box-infor">
                <span>USEFUL</span>
                <p className="box-heading">
                  Amet Commodo Nulla Facilisi Vehicula Ipsum
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do…
                </p>
                <div className="btn">
                  <button>Read more</button>
                </div>
              </div>
            </div>
            <div className="box">
              <div>
                <img src={articial2} alt="" />
              </div>
              <div className="box-infor">
                <span>GADGETS</span>
                <p className="box-heading">
                  Urnaneque Viverra Justo Ultrices Sapieneget
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do…
                </p>
                <div className="btn">
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub">
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
