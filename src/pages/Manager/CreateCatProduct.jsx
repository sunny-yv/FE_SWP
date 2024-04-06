import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { event } from "jquery";

function CreateCatProduct() {
  const [catProductName, setCatProductName] = useState("");
  const [catProductType, setCatProductType] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleNameChange = (event) => {
    setCatProductName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setCatProductType(event.target.value);
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleStatusChange = () => {
    setStatus(!status);
  };

  const handleGOBack = () => {
    navigate("/manager");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!catProductName || !catProductType || !price || !image) {
        console.error("Vui lòng điền đầy đủ thông tin sản phẩm cho mèo.");
        return;
      }

      const formData = new FormData();
      formData.append("catProductName", catProductName);
      formData.append("catProductType", catProductType);
      formData.append("price", price);
      formData.append("status", status);
      formData.append("image", image);

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/CatProducts",
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
          <h1>Thêm Sản Phẩm Mới</h1>
          <p>Điền thông tin chi tiết để thêm một sản phẩm mới vào hệ thống.</p>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <label>Tên</label>
              <input
                placeholder="Tên"
                value={catProductName}
                onChange={handleNameChange}
              />
            </FormField>

            <FormField>
              <label>Thể loại</label>
              <input
                placeholder="Thể loại"
                value={catProductType}
                onChange={handleTypeChange}
              />
            </FormField>

            <FormField>
              <label>Giá</label>
              <input placeholder="Giá" value={price} onChange={handleChange} />
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
            {isCreated && (
              <p style={{ color: "green" }}>Thêm sản phẩm thành công!</p>
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

export default CreateCatProduct;
