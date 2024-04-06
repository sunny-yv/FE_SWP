import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListAllCat from "../Cat/ListAllCat";
import { Link, useParams } from "react-router-dom";

import "./style.css";

function Cat() {
  const cardStyles = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageStyles = {
    maxWidth: "100%",
    height: "260px",
    marginBottom: "10px",
    cursor: "pointer",
  };
  const linkStyles = {
    textDecoration: "none",
    // padding: "8px 16px",
    borderRadius: "5px",
    display: "inline-block",
    transition: "background-color 0.3s",
    color: "black",
  };
  return (
    <div className="cat-page">
      <Header />
      <Link to="/cat">Cat</Link>
      <div className="cat-text-1">
        <h1>Donna Coffee</h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div style={cardStyles}>
          <a href="/allcat" style={linkStyles}>
            <img
              src="asset/meotatcachinhanh.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/allcat" style={linkStyles}>
            Boss của nhà Donna
          </a>
        </div>
        <div style={cardStyles}>
          <a href="/catshop1" style={linkStyles}>
            <img
              src="asset/meochinhanh1.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/catshop1" style={linkStyles}>
            Boss của chi nhánh Bình Tân nhà Donna
          </a>
        </div>
        <div style={cardStyles}>
          <a href="/catshop2" style={linkStyles}>
            <img
              src="asset/meochinhanh2.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/catshop2" style={linkStyles}>
            Boss của chi nhánh Quận 1 nhà Donna
          </a>
        </div>
        <div style={cardStyles}>
          <a href="/catshop3" style={linkStyles}>
            <img
              src="asset/meochinhanh3.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/catshop3" style={linkStyles}>
            Boss của chi nhánh Tân Bình nhà Donna
          </a>
        </div>
        <div style={cardStyles}>
          <a href="/catshop4" style={linkStyles}>
            <img
              src="asset/meochinhanh4.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/catshop4" style={linkStyles}>
            Boss của chi nhánh Quận 8 nhà Donna
          </a>
        </div>
        <div style={cardStyles}>
          <a href="/catshop4" style={linkStyles}>
            <img
              src="asset/meochinhanh5.jpg"
              alt="Image 1"
              style={imageStyles}
            />
          </a>

          <a href="/catshop4" style={linkStyles}>
            Boss của chi nhánh Đa Kao- Quận 1 nhà Donna
          </a>
        </div>
      </div>

      <div className="clear"></div>
      <Footer />
    </div>
  );
}

export default Cat;
