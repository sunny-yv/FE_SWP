import React from "react";
import "./style.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Giới thiệu</h4>
            <ui className="list-unstyled">
              <li>
                <a href="/">Sản Phẩm</a>
              </li>
              <li>
                <a href="/location">Cửa hàng</a>
              </li>
            </ui>
          </div>

          <div className="col">
            <h4>Liên hệ</h4>
            <ui className="list-unstyled">
              <li>0987570351</li>
              <li>hanhnguyen@gmail.com</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} COFFEE CAT | Mọi quyền được bảo lưu
            | Điều khoản Dịch vụ | Quyền riêng tư
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
