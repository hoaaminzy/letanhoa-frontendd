import React from 'react'
import HeadingPage from '../../components/layout/heading-page/HeadingPage'
import './blog.css'
import articial from "../../images/article-image-4.webp";
import articial2 from "../../images/article-image-5.webp";
const Blog = () => {
  return (
    <div className='blog'>
        <div className='blog-page-container'>
            <HeadingPage page='Blog' linkPage='blog' pageCurrent='Blog'/>
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
  )
}

export default Blog