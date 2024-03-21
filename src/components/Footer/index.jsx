import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>ĐỊA CHỈ</h4>
            <ul>
              <li>
                <Link to="/location">
                  89 Đường số 3, Bình Hưng Hoà B, Bình Tân, Thành phố Hồ Chí
                  Minh
                </Link>
              </li>
              <li>
                <Link to="/location2">
                  250, Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, Tp. Hồ Chí Minh
                </Link>
              </li>
              <li>
                <Link to="/location3">
                  135 Hoàng Hoa Thám, Phường 13, Tân Bình, Thành phố Hồ Chí Minh
                </Link>
              </li>
              <li>
                <Link to="/location4">
                  59 Châu Thị Hóa, Phường 4, Quận 8, Thành phố Hồ Chí Minh
                </Link>
              </li>
              <li>
                <Link to="/location5">
                  48 Đường Phan Liêm, Đa Kao, Quận 1, Thành phố Hồ Chí Minh{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>LIÊN HỆ</h4>
            <p>Hotline: 0909 999 999</p>
            <p>Email: info@donnacoffee.com</p>
          </div>

          <div className="footer-col">
            <h4>CHÍNH SÁCH KHÁCH HÀNG</h4>
            <ul>
              <li>
                <Link to="/introduction">Quyền riêng tư</Link>
              </li>
              <li>
                <Link to="/introduction">Quy định chung</Link>
              </li>
              <li>
                <Link to="/introduction">Quy định về thanh toán</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kết nối với chúng tôi</h4>
            <ul
              className="list-unstyled social-icons"
              style={{ marginTop: 10 }}
            >
              <li>
                <a href="https://www.facebook.com/bi.store32">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@meoucoffee?fbclid=IwAR0mUgsHKvPj5TbWWDrU4R8D5rYKBzBNmvVa4XLOKDU1rRX0c9ExTkLYEnE">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size="3x"
                    style={{ marginTop: 20 }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/white_coffee_cat/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    style={{ marginTop: 20 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>
          &copy;{new Date().getFullYear()} Meou Coffee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
