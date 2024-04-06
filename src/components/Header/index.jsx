import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../contexts/auth";
import { useAuth } from "../../contexts/auth";
import "./style.css";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  const userData = useUserData();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="headers">
      <div className="header_left">
        <img src="../asset/logo2.png" alt="" />
      </div>
      <div className="header-center">
        <ul className="header-list">
          <Link to="/" style={{ color: "#fff" }}>
            TRANG CHỦ
          </Link>

          <Link
            to="/introduction"
            style={{ marginLeft: "15px", color: "#fff", marginRight: "15px" }}
          >
            GIỚI THIỆU
          </Link>
          <Dropdown style={{ marginLeft: "5px", marginRight: "20px" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              CHI NHÁNH
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/location">Chi nhánh Bình Tân</Dropdown.Item>
              <Dropdown.Item href="/location2">Chi nhánh Quận 1</Dropdown.Item>
              <Dropdown.Item href="/location3">
                Chi nhánh Tân Bình
              </Dropdown.Item>
              <Dropdown.Item href="/location4">Chi nhánh Quận 8</Dropdown.Item>
              <Dropdown.Item href="/location5">
                Chi nhánh Quận Đa Kao- Quận 1
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <li>
            <Dropdown style={{ marginLeft: "5px", marginRight: "20px" }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                THỰC ĐƠN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/allmenu">
                  Tất cả sản phẩm của Shop
                </Dropdown.Item>
                <Dropdown.Item href="/drinks">Đồ uống</Dropdown.Item>
                <Dropdown.Item href="/catproducts">
                  Sản phẩm dành cho các bé mèo
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown style={{ marginLeft: "5px", marginRight: "10px" }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                MÈO
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/allcat">
                  Tất cả các bé mèo của nhà Donna
                </Dropdown.Item>
                <Dropdown.Item href="/catshop1">
                  Các bé mèo ở chi nhánh Bình Tân
                </Dropdown.Item>
                <Dropdown.Item href="/catshop2">
                  Các bé mèo ở chi nhánh Quận 1
                </Dropdown.Item>
                <Dropdown.Item href="/catshop3">
                  Các bé mèo ở chi nhánh Tân Bình
                </Dropdown.Item>
                <Dropdown.Item href="/catshop4">
                  Các bé mèo ở chi nhánh Quận 8
                </Dropdown.Item>
                <Dropdown.Item href="/catshop5">
                  Các bé mèo ở chi nhánh Đa Kao- Quận 1
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <Link
            to="/booking"
            style={{ marginLeft: "10px", color: "#fff", marginRight: "10px" }}
          >
            ĐẶT BÀN
          </Link>

          {userData && userData.roleName === "Admin" ? (
            <Link
              to="/admin"
              style={{ marginLeft: "10px", color: "#fff", marginRight: "10px" }}
            >
              ADMIN
            </Link>
          ) : userData && userData.roleName === "Manager" ? (
            <Link
              to="/manager"
              style={{ marginLeft: "10px", color: "#fff", marginRight: "10px" }}
            >
              MANAGER
            </Link>
          ) : userData && userData.roleName === "Staff" ? (
            <Link
              to="/staff"
              style={{ marginLeft: "10px", color: "#fff", marginRight: "10px" }}
            >
              STAFF
            </Link>
          ) : (
            <Link
              to="#"
              style={{ marginLeft: "10px", color: "#fff", marginRight: "10px" }}
            >
              THẺ
            </Link>
          )}
        </ul>
      </div>
      <div className="header-right">
        <div className="header">
          {userData ? (
            <>
              <Chip label={userData.email} color="primary" />
              <Button onClick={handleLogout}>Đăng xuất</Button>
            </>
          ) : (
            // <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              style={{
                backgroundColor: "#230050",
                color: "white",
                borderColor: "#9e826c",
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đăng nhập
              </Link>
            </Button>
          )}
        </div>

        {/* <div className="input-wrapper">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" /> */}
      </div>
    </div>
  );
}

export default Header;
