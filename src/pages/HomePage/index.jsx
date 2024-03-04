import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SimpleSlider from "../../components/SimpleSlider";

function HomePage() {
  
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        
         <SimpleSlider/>
        <div className="location">
          <img src="../asset/dots.png" alt="" />
          <h3>CHI NHÁNH</h3>
        </div>
        <div className="image-location">
          <img src="../asset/meochinhanh01.jpg" alt="" />
          <img src="../asset/meochinhanh02.jpg" alt="" />
          <img src="../asset/meochinhanh3.jpg" alt="" />
          <img src="../asset/meochinhanh04.jpg" alt="" />
        </div>
        <div className="product">
          <img src="../asset/dots.png" alt="" />
          <h3>SẢN PHẨM</h3>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="../asset/douong.jpeg" alt="" />
            <div className="text-card">
              <h4>Đồ uống</h4>
              <p>Đồ uống phong phú, tha hồ mà lựa chọn</p>
            </div>
          </div>
          <div className="card">
            <img src="../asset/thucanmeo1.jpg" alt="" />
            <div className="text-card">
              <h4>Thức ăn cho mèo</h4>
              <p>
                Chọn một vài món ăn để có một buổi vui vẻ bên “hoàng thượng” nào
              </p>
            </div>
          </div>
          <div className="card">
            <img src="../asset/dochoimeo1.jpg" alt="" />
            <div className="text-card">
              <h4>Đồ chơi cho mèo</h4>
              <p>
                Cùng nhau vui đùa với các bé mèo để có những phút giây thật
                thoải mái nào
              </p>
            </div>
          </div>
        </div>

        <div className="img-boss">
          <div className="title">
            <h3>HÌNH ẢNH CÁC BOSS TẠI CÁC CHI NHÁNH</h3>
          </div>
          <div className="image-home-page">
            <img src="../asset/cat15.jpg" alt="" />

            <img src="../asset/cat2.jpg" alt="" />

            <img src="../asset/cat3.jpg" alt="" />

            <img src="../asset/cat13.jpg" alt="" />
          </div>
          <div className="image-home-page">
            <img src="../asset/cat6.jpg" alt="" />

            <img src="../asset/cat8.jpg" alt="" />

            <img src="../asset/cat11.jpg" alt="" />

            <img src="../asset/cat12.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
