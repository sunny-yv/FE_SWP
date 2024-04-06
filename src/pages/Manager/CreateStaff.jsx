import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Import đúng cách

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { TextField } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function CreateStaff() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [coffeeID, setCoffeeID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);

  const [dob, setDob] = useState("");

  const handleIDChange = (event) => {
    setCoffeeID(event.target.value);
  };
  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);

    const emailRegex = /^[^\s@]+@gmail\.com$/;
    const isValidEmail = emailRegex.test(emailInput);

    if (!isValidEmail) {
      console.log("Email không hợp lệ");
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassChange = (event) => {
    const confirmPass = event.target.value;
    setConfirmPass(confirmPass);

    if (confirmPass !== password) {
      setError("Mật khẩu không khớp");
    } else {
      setError("");
    }
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGOBack = () => {
    navigate("/admin");
  };

  const coffeeShopIds = [
    "9c305019-b38f-431a-835f-7b29d4351bc7",
    "ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc",
    "f9d87ddc-c7ea-4178-ba3b-d30efa6f426c",
    "e54cb065-8ef4-4041-8822-e2ecf294c281",
    "4ff4a000-9b2a-4409-92c5-f9cf01947609",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!fullName || !phoneNumber || !address || !dob || !coffeeID) {
        console.error("Vui lòng điền đầy đủ thông tin nhân viên.");
        return;
      }

      const requestData = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address,
        dob: dob,
        coffeeID: coffeeID,
        email: email,
        password: password,
        confirmPass: confirmPass,
      };

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Staffs",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent successfully");
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
        navigate("/manager");
      }, 1000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="manager">
          <h1>Thêm Nhân Viên Mới</h1>
          <p>Điền thông tin chi tiết để thêm một nhân viên mới vào hệ thống.</p>
          <Form onSubmit={handleSubmit}>
            <FormField style={{ marginBottom: "20px" }}>
              <label>Họ và Tên</label>
              <input
                placeholder="Họ và Tên"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label
                style={{ color: "#333", marginBottom: "5px", fontSize: "15px" }}
              >
                Số điện thoại
              </label>
              <input
                placeholder="Số điện thoại"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label>Địa chỉ</label>
              <input
                placeholder="Địa chỉ"
                value={address}
                onChange={handleAddressChange}
              />
            </FormField>
            <FormField style={{ marginBottom: "20px" }}>
              <label>Ngày sinh</label>
              <input
                placeholder="Ngày sinh"
                value={dob}
                onChange={handleDobChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label>Email</label>
              <input
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label>Mật khẩu</label>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label>Xác nhận mật khẩu</label>
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={confirmPass}
                onChange={handleConfirmPassChange}
              />
            </FormField>

            <InputLabel id="demo-simple-select-label">
              <b>Chi nhánh</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coffeeID}
              label="Age"
              onChange={handleIDChange}
              style={{ width: "310px", backgroundColor: "#fff" }}
            >
              {coffeeShopIds.map((id) => (
                <MenuItem key={id} value={id}>
                  Chi nhánh {coffeeShopIds.indexOf(id) + 1}
                </MenuItem>
              ))}
            </Select>

            <FormField>
              <Checkbox label="Tôi đồng ý với các Điều khoản và Điều kiện" />
            </FormField>
            {isCreated && (
              <p style={{ color: "green" }}>Thêm nhân viên thành công!</p>
            )}
            <Button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "#fff",
                marginRight: "20px",
              }}
            >
              Thêm
            </Button>
            <Button onClick={handleGOBack}>Quay lại</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateStaff;
