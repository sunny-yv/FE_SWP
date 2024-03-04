import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListAllMenu from "../Menu/ListAllMenu";
import { Link, useParams } from "react-router-dom";

import "./style.css";

function Menu() {
  return (
    <div className="menu-page">
      <Header />
      <Link to="/menu">Menu</Link>
      <div className="Menu-text-1">
        <h1>Menu của Donna</h1>
      </div>

      <div
        className="album"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          className="AllMenu"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/menu.webp"
            alt="Tất cả các sản phẩm tại Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/allmenu"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Menu tại Donna
            </span>
          </a>
        </div>

        <div
          className="Drinks"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/ca-phe-sua.jpg"
            alt="Các đồ uống tại Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/drinks"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Đồ uống tại Donna
            </span>
          </a>
        </div>

        <div
          className="CatProducts"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/cần câu mèo.jpg"
            alt="Các thực phẩm cho Boss tại Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catproducts"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Các thực phẩm cho Boss tại Donna
            </span>
          </a>
        </div>
      </div>

      <div className="clear"></div>
      <Footer />
    </div>
  );
}

export default Menu;
