import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

function Location2() {
  const [coffeeShop, setCoffeeShop] = useState(null);

  useEffect(() => {
    fetchCoffeeShop();
  }, []);

  const fetchCoffeeShop = async () => {
    try {
      const response = await axios.get(
        "https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops"
      );
      setCoffeeShop(response.data[3]);
    } catch (error) {
      console.error("Error fetching coffee shop data:", error);
    }
  };

  return (
    <div>
      <Header />
      {coffeeShop && (
        <div className="location">
          <div className="body-location">
            <div className="text-location-left">
              <h3>{coffeeShop.coffeeName}</h3>
              <p style={{ fontSize: "25px" }}>
                Chúng tôi tự hào là một địa điểm thân thiện với gia đình, hoàn
                toàn phù hợp cho xe lăn và có đầy đủ tiện nghi thay đồ ngay
                trong khuôn viên.Vì vậy, nếu bạn đang tìm kiếm thời gian dành
                cho gia đình, thư giãn tối đa hay chỉ là một trải nghiệm độc đáo
                và thú vị thì Kitty Café là nơi dành cho bạn!
              </p>
              <p style={{ fontSize: "25px" }}>{coffeeShop.description}</p>
              <br />
              <p style={{ fontSize: "25px" }}> Số giấy phép - 136453</p>
            </div>
            <div
              className="text-location-right"
              style={{ marginBottom: "25px" }}
            >
              <div className="column">
                <h4 style={{ fontSize: "25px" }}>Giờ mở cửa</h4>
                <p style={{ marginTop: "-15px", fontSize: "20px" }}>
                  Thứ 2-Chủ nhật: 8:00 AM
                </p>
              </div>
              <div className="column" style={{ marginTop: "20px" }}>
                <h4 style={{ fontSize: "25px" }}>Giờ đóng cửa</h4>
                <p style={{ marginTop: "-15px", fontSize: "20px" }}>
                  Thứ 2-Chủ nhật: 20:00 PM
                </p>
              </div>
              <div className="column" style={{ marginTop: "20px" }}>
                <h4 style={{ fontSize: "25px" }}>Địa chỉ</h4>
                <p style={{ marginTop: "-15px", fontSize: "20px" }}>
                  48 Đường Phan Liêm, Đa Kao, Quận 2, Thành phố Hồ Chí Minh
                </p>
              </div>
              <div className="column" style={{ marginTop: "20px" }}>
                <h4 style={{ fontSize: "25px" }}>Liên hệ</h4>
                <p style={{ marginTop: "-15px", fontSize: "20px" }}>
                  Phone: {coffeeShop.phoneNumber}
                </p>
              </div>
              <div style={{ display: "inline-block", marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  style={{
                    background: "linear-gradient(to right, #FFA500, #FF6347)",
                    color: "white",
                    borderColor: "#9e826c",
                    borderRadius: "25px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 7px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Link
                    to="/table"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "25px",
                    }}
                  >
                    Đặt bàn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="img-location">
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
            </div>
          </div>
          <div className="column">
            <div className="img-location">
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Location2;
