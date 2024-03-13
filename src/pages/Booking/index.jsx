import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { size } from "@floating-ui/core";

function Booking() {
  return (
    <div className="booking-page">
      <Header />
      <div className="booking">
        <div className="booking-left">
          <div className="title">
            <h1>Đặt bàn</h1>
            <h2>Chọn địa điểm</h2>
          </div>
          <div className="button-booking-left">
            <div className="button-top">
              <Link
                to="/location"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button class="button">Chi nhánh 1</button>
              </Link>
              <Link
                to="/location"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button class="button">Chi nhánh 2</button>
              </Link>
            </div>
            <div className="button-bottom">
              <Link
                to="/location"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button class="button">Chi nhánh 3</button>
              </Link>
              <Link
                to="/location"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button class="button">Chi nhánh 4</button>
              </Link>
            </div>
          </div>
          <div className="image">
            <img src="../asset/datban.webp" alt="" />
          </div>
        </div>
        <div className="booking-right">
          <div className="title-final">
            <h3>TRƯỚC KHI BẠN ĐẶT</h3>
          </div>
          <div className="context-final">
            <p>
              Để đảm bảo sức khỏe và thể trạng tốt cho mèo của chúng tôi được
              duy trì ở tiêu chuẩn cao nhất, chúng tôi phải trả phí phúc lợi £7
              cho mỗi người lớn và £5 cho mỗi trẻ em. Thời gian đặt chỗ là một
              giờ, nhưng nếu bạn muốn đặt chỗ lâu hơn, vui lòng liên hệ với
              chúng tôi.
            </p>
            <br />
            <p>
              Việc đặt chỗ của bạn sẽ chỉ được xác nhận khi bạn nhận được email
              xác nhận.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
