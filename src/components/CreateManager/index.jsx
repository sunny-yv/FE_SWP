import React, { useState, useEffect } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateCoffee() {
  const [coffeeName, setCoffeeName] = useState("");
  const [openHour, setOpenHour] = useState("");
  const [openMinute, setOpenMinute] = useState("");
  const [openPeriod, setOpenPeriod] = useState("AM");
  const [closeHour, setCloseHour] = useState("");
  const [closeMinute, setCloseMinute] = useState("");
  const [closePeriod, setClosePeriod] = useState("AM");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [coffeeID, setCoffeeID] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    setIsCreated(false);
  }, [coffeeName, openHour, openMinute, openPeriod, closeHour, closeMinute, closePeriod, address, phoneNumber, description, image, status, coffeeID]);

  const handleIDChange = (event) => {
    setCoffeeID(event.target.value);
  };

  const handleOpenHourChange = (event) => {
    setOpenHour(event.target.value);
  };

  const handleOpenMinuteChange = (event) => {
    setOpenMinute(event.target.value);
  };

  const handleOpenPeriodChange = (event) => {
    setOpenPeriod(event.target.value);
  };

  const handleCloseHourChange = (event) => {
    setCloseHour(event.target.value);
  };

  const handleCloseMinuteChange = (event) => {
    setCloseMinute(event.target.value);
  };

  const handleClosePeriodChange = (event) => {
    setClosePeriod(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setCoffeeName(event.target.value);
  };
  
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleStatusChange = () => {
    setStatus(!status);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!coffeeName || !openHour || !openMinute || !openPeriod || !closeHour || !closeMinute || !closePeriod || !address || !phoneNumber || !description || !image) {
        console.error("Vui lòng điền đầy đủ thông tin quán.");
        return;
      }

      const openTime = `${openHour}:${openMinute} ${openPeriod}`;
      const closeTime = `${closeHour}:${closeMinute} ${closePeriod}`;

      const formData = new FormData();
      formData.append("coffeeName", coffeeName);
      formData.append("openTime", openTime);
      formData.append("closeTime", closeTime);
      formData.append("address", address);
      formData.append("phoneNumber", phoneNumber);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("image", image);
      formData.append("coffeeID", coffeeID);

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data sent successfully");
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
        navigate("/admin");
      }, 1000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
    <Box height={40}/>
    <div className="manager">
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Tên</label>
          <input
            placeholder="Tên"
            value={coffeeName}
            onChange={handleNameChange}
          />
        </FormField>

        <FormField>
          <label>Giờ mở cửa</label>
          <div style={{ display: "flex" }}>
            <Select
              value={openHour}
              onChange={handleOpenHourChange}
              style={{ marginRight: "5px" }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
              ))}
            </Select>
            <Select
              value={openMinute}
              onChange={handleOpenMinuteChange}
              style={{ marginRight: "5px" }}
            >
              <MenuItem value="00">00</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="45">45</MenuItem>
            </Select>
            <Select
              value={openPeriod}
              onChange={handleOpenPeriodChange}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </div>
        </FormField>

        <FormField>
          <label>Giờ đóng cửa</label>
          <div style={{ display: "flex" }}>
            <Select
              value={closeHour}
              onChange={handleCloseHourChange}
              style={{ marginRight: "5px" }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
              ))}
            </Select>
            <Select
              value={closeMinute}
              onChange={handleCloseMinuteChange}
              style={{ marginRight: "5px" }}
            >
              <MenuItem value="00">00</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="45">45</MenuItem>
            </Select>
            <Select
              value={closePeriod}
              onChange={handleClosePeriodChange}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </div>
        </FormField>
        
        <FormField>
          <label>Địa chỉ</label>
          <input
            placeholder="Địa chỉ"
            value={address}
            onChange={handleAddress}
          />
        </FormField>

        <FormField>
          <label>Số điện thoại</label>
          <input
            placeholder="Số điện thoại"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
        </FormField>

        <FormField>
          <label>Mô tả</label>
          <input
            placeholder="Mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Ảnh</label>
          <input
            accept="image/*"
            type="file"
            placeholder="Last Name"
            onChange={handleImageChange}
          />
        </FormField>

        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={
              <Switch
                checked={status}
                onChange={handleStatusChange}
                color="primary"
              />
            }
            label="Trạng thái"
            labelPlacement="start"
            style={{ marginLeft: "0px" }}
          />
        </FormGroup>
        <FormField>
          <Checkbox label="Tôi đồng ý với các Điều khoản và Điều kiện" />
        </FormField>
        {isCreated && <p style={{ color: "green" }}>Thêm thành công!</p>}
        <Button type="submit">Thêm</Button>
      </Form>
    </div>
    </>
  );
}

export default CreateCoffee;
