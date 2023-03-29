import React from 'react'
import { Link } from "react-router-dom";
import './heading-page.css'

const HeadingPage = ({page,pageCurrent,linkPage}) => {
  return (
    <div className="product-page-header">
          <p>
            <Link className="currented" to="/">Home</Link> / <Link className="current" to={`/${linkPage}`}>{pageCurrent}</Link>
          </p>
          <h3>{page}</h3>
        </div>
  )
}

export default HeadingPage