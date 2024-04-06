import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/auth";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login({ email, password });
      toast("Đăng nhập thành công", {
        type: "success",
      });
      if (response.roleName === "Admin") {
        navigate("/admin");
      } else if (response.roleName === "Staff") {
        navigate("/staff");
      } else {
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast("Đăng nhập thất bại", {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
      <Header />
      <div className="col-10 row g-0 align-items-center">
        <div className="d-none d-md-block col-6">
          <img
            src="../asset/login.png"
            alt=""
            className="img-fluid w-100 mt-4"
          />
        </div>

        <form className="col-12 col-md-6 col-6 py-4 px-3">
          <h4 className="login-title text-center py-2 mb-3">Đăng nhập</h4>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <div className="text-center">
            <LoadingButton
              className="login-btn rounded-3"
              color="inherit"
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Đăng nhập
            </LoadingButton>
          </div>
          <div className="text-center mt-3">
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
