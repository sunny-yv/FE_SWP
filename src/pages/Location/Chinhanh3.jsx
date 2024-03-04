
import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Location2() {
  return (
    <div class="location">
      <Header />
      <div className="body-location">
        <div class="text-location-left">
          <h3>Chi nhánh</h3>
          <p>
            Chúng tôi tự hào là một địa điểm thân thiện với gia đình, hoàn toàn
            phù hợp cho xe lăn và có đầy đủ tiện nghi thay đồ ngay trong khuôn
            viên.Vì vậy, nếu bạn đang tìm kiếm thời gian dành cho gia đình, thư
            giãn tối đa hay chỉ là một trải nghiệm độc đáo và thú vị thì Kitty
            Café là nơi dành cho bạn!
          </p>

          <br />
          <br />
          <p>Kitty Cafe Nottingham hiện chỉ có THẺ.</p>
          <br />
          <br />
          <p>
            Kitty Cafe có phí phúc lợi chỉ £7/người lớn và £5/trẻ em. Điều này
            cho phép chúng tôi duy trì các tiêu chuẩn cao về phúc lợi động vật
            cho mèo của chúng tôi
          </p>
          <br />
          <br />
          <p> Số giấy phép - 136453</p>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            style={{
              backgroundColor: "red",
              color: "white",
              borderColor: "#9e826c",
              marginLeft: "600px",
              marginBottom: "20px",
              transition:
                "background-color 0.3s, color 0.3s, border-color 0.3s",
              "&:hover": {
                backgroundColor: "#755b47",
                color: "black",
                borderColor: "#755b47",
                opacity: 0.8,
                transform: "scale(1.05)",
              },
            }}
          >
            <Link
              to="/booking"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Đặt bàn
            </Link>
          </Button>
        </div>
        <div class="text-location-right">
          <div className="column">
            <h4>Địa chỉ</h4>
            <p> 120 Nguyễn Thị Minh Khai, P. Bến Thành, Q.1</p>
          </div>
          <div className="column">
            <h4>Giờ mở cửa</h4>
            <p>Thứ 2 : 2:00pm to 9:30pm</p>
            <p>Thứ 3-Thứ 7: 1:00pm to 9:30pm</p>
            <p>Chủ nhật: 9:30 am to 10:00pm</p>
          </div>
          <div className="column">
            <h4>Liên hệ</h4>
            <p>Phone: 0961898942</p>
            <p>Email: CatfeVN@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="comlumn">
        <div class="img-location">
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
        </div>
        <div class="img-location">
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
          <img src="../asset/meo1.png" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Location2;
