import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateCat() {
  const { catID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [catData, setCatData] = useState({
    age: "",
    catName: "",
    description: "",
    image: null,
    status: false,
    coffeeID: "",
    type: "",
  });

  const [originalCatData, setOriginalCatData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats/${catID}`
        );
        const catData = response.data;
        setCatData(catData);
        setOriginalCatData(catData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCatData();
  }, [catID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCatData({ ...catData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setCatData({ ...catData, status: !catData.status });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(catData) !== JSON.stringify(originalCatData)) {
        const formData = new FormData();
        formData.append("catName", catData.catName);
        formData.append("age", catData.age);
        formData.append("description", catData.description);
        formData.append("type", catData.type);
        formData.append("status", catData.status);
        formData.append("coffeeID", catData.coffeeID);
        if (catData.image) {
          formData.append("image", catData.image);
        }

        await axios.put(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats/${catID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Updated cat data sent successfully");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readcat");
        }, 1000);
      } else {
        console.log("Cat data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readcat");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating cat data:", error);
    }
  };

  return (
    <div className="manager">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <label>Tên</label>
              <input
                placeholder="Tên"
                name="catName"
                value={catData.catName}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <label>Tuổi</label>
              <input
                placeholder="Tuổi"
                name="age"
                value={catData.age}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <label>Mô tả</label>
              <textarea
                
                placeholder="Mô tả"
                name="description"
                value={catData.description}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <label>Thể loại</label>
              <input
                placeholder="Thể loại"
                name="type"
                value={catData.type}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <label>Ảnh</label>
              <input
                accept="image/*"
                type="file"
                onChange={(event) =>
                  setCatData({ ...catData, image: event.target.files[0] })
                }
              />
            </FormField>
            <FormField>
              <label>Chi nhánh</label>
              <input
                placeholder="Chi nhánh"
                name="coffeeID"
                value={catData.coffeeID}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <Checkbox
                checked={catData.status}
                onChange={handleCheckboxChange}
                label="Trạng thái"
              />
            </FormField>
            {isUpdated && (
              <p
                style={{
                  color: "green",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "30px",
                }}
              >
                {JSON.stringify(originalCatData) === JSON.stringify(catData)
                  ? "Không có sự thay đổi"
                  : "Sửa đổi đã được lưu thành công!"}
              </p>
            )}
            <Button type="submit">Cập nhật</Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default UpdateCat;
