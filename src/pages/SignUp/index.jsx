import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  const handleRegister = async () => {
    try {
      if (!passwordMatch) {
        setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
      }
      console.log(email, password, confirmPassword);
      setLoading(true);
      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Accounts/Register",
        { email, password, confirmPass: confirmPassword }
      );

      toast("Đăng ký thành công", { type: "success" });
      navigate("/");
    } catch (error) {
      toast("Đăng ký thất bại", { type: "error" }); //Đăng kí tb show cho ng dùng biết lý do
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center signup-container">
      <Header />
      <div className="col-10 row g-0 align-items-center">
        <div className="d-none d-md-block col-6">
          <img
            src="../asset/signup.png"
            alt=""
            className="img-fluid w-100 mt-4"
          />
        </div>

        <form className="col-12 col-md-6 py-4 px-3">
          <h4 className="signup-title text-center py-2 mb-3">Đăng ký</h4>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${!passwordMatch && "is-invalid"}`}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
            {!passwordMatch && (
              <div className="invalid-feedback">
                Mật khẩu và xác nhận mật khẩu không khớp
              </div>
            )}
          </div>

          <div className="text-center">
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <LoadingButton
              className="login-btn rounded-3"
              color="inherit"
              loading={loading}
              onClick={handleRegister}
              disabled={!passwordMatch}
            >
              Đăng ký
            </LoadingButton>
          </div>
          <div className="text-center mt-3">
            Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
