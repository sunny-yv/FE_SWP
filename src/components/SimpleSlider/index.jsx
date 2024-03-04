import React from "react";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="../asset/meotrangchu.png" alt="" className="w-50" />
        </div>
        <div>
          <img src="../asset/meotrangchu2.png" alt="" className="w-50" />
        </div>
        <div>
          <img src="../asset/meotrangchu3.png" alt="" className="w-50" />
        </div>
        <div>
          <img src="../asset/meotrangchu4.1.png" alt="" className="w-50" />
        </div>
        <div>
          <img src="../asset/meotrangchu5.1.png" alt="" className="w-50" />
        </div>
        <div>
          <img src="../asset/meotrangchu6.1.png" alt="" className="w-50" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
