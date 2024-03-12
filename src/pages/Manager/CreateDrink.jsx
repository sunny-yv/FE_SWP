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

function CreateDrink() {
  const [drinkName, setDrinkName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);
  const handleChange = (event) => {
    setUnitPrice(event.target.value);
  };

  const handleNameChange = (event) => {
    setDrinkName(event.target.value);
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
      if (!drinkName || !unitPrice || !image) {
        console.error("Vui lòng điền đầy đủ thông tin đồ uống.");
        return;
      }

      const formData = new FormData();
      formData.append("drinkName", drinkName);
      formData.append("unitPrice", unitPrice);
      formData.append("status", status);
      formData.append("image", image);

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Drinks",
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
        navigate("/readDrink");
      }, 1000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="manager">
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Tên</label>
          <input
            placeholder="Tên"
            value={drinkName}
            onChange={handleNameChange}
          />
        </FormField>

        <FormField>
          <label>Giá</label>
          <input placeholder="Giá" value={unitPrice} onChange={handleChange} />
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
        {isCreated && <p style={{ color: "green" }}>Thêm món thành công!</p>}
        <Button type="submit">Thêm</Button>
      </Form>
    </div>
  );
}

export default CreateDrink;
