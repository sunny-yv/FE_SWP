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

function CreateCat() {
  const [age, setAge] = useState("");
  const [catName, setCatName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [coffeeID, setCoffeeID] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleIDChange = (event) => {
    setCoffeeID(event.target.value);
  };

  const handleNameChange = (event) => {
    setCatName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleStatusChange = () => {
    setStatus(!status);
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
      if (!catName || !age || !description || !type || !image || !coffeeID) {
        console.error("Vui lòng điền đầy đủ thông tin mèo.");
        return;
      }

      const formData = new FormData();
      formData.append("catName", catName);
      formData.append("age", age);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("status", status);
      formData.append("image", image);
      formData.append("coffeeID", coffeeID);

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Cats",
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
        navigate("/readcat");
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
            value={catName}
            onChange={handleNameChange}
          />
        </FormField>

        <InputLabel id="demo-simple-select-label">
          <b>Tuổi</b>
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{ width: "310px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <FormField>
          <label>Mô tả</label>
          <input
            placeholder="Mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Thể loại</label>
          <input
            placeholder="Thể loại"
            value={type}
            onChange={handleTypeChange}
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

        <InputLabel id="demo-simple-select-label">
          <b>Chi nhánh</b>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coffeeID}
          label="Age"
          onChange={handleIDChange}
          style={{ width: "310px" }}
        >
          {coffeeShopIds.map((id) => (
            <MenuItem key={id} value={id}>
              Chi nhánh {coffeeShopIds.indexOf(id) + 1}
            </MenuItem>
          ))}
        </Select>
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
        {isCreated && <p style={{ color: "green" }}>Thêm mèo thành công!</p>}
        <Button className="btcreatecat" type="submit">
          Thêm
        </Button>
      </Form>
    </div>
  );
}

export default CreateCat;
