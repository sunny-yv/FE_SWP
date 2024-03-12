import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateManager() {
  const { coffeeID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [coffeeData, setCoffeeData] = useState({
    
    coffeeName: "",
    openTime: "",
    closeTime: "",
    phoneNumber: "",
    description: "",
    image: null,
    status: false,
  });

  const [originalCoffeeData, setOriginalCoffeeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops/${coffeeID}`
        );
        const coffeeData = response.data;
        setCoffeeData(coffeeData);
        setOriginalCoffeeData(coffeeData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCatData();
  }, [coffeeID]);

  const handleInputChange = (event) => {
    const { coffeeName, value } = event.target;
    setCoffeeData({ ...coffeeData, [coffeeName]: value });
  };

  const handleCheckboxChange = () => {
    setCoffeeData({ ...coffeeData, status: !coffeeData.status });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(coffeeData) !== JSON.stringify(originalCoffeeData)) {
        const formData = new FormData();
        formData.append("coffeeName", coffeeData.coffeeName);
        formData.append("openTime", coffeeData.openTime);
        formData.append("closeTime", coffeeData.closeTime);
        formData.append("phoneNumber", coffeeData.phoneNumber);
        formData.append("description", coffeeData.description);
        
        formData.append("status", coffeeData.status);
        
        if (coffeeData.image) {
          formData.append("image", coffeeData.image);
        }

        await axios.put(
          `https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops/${coffeeID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Updated coffee data sent successfully");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/admin");
        }, 1000);
      } else {
        console.log("Coffee data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/admin");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating coffee data:", error);
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
                name="coffeeName"
                value={coffeeData.coffeeName}
                onChange={handleInputChange}
              />
            </FormField>
            
            <FormField>
              <label>Mô tả</label>
              <textarea
                
                placeholder="Mô tả"
                name="description"
                value={coffeeData.description}
                onChange={handleInputChange}
              />
            </FormField>
            
            <FormField>
              <label>Ảnh</label>
              <input
                accept="image/*"
                type="file"
                onChange={(event) =>
                  setCoffeeData({ ...coffeeData, image: event.target.files[0] })
                }
              />
            </FormField>
            
            <FormField>
              <Checkbox
                checked={coffeeData.status}
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
                {JSON.stringify(originalCoffeeData) === JSON.stringify(coffeeData)
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

export default UpdateManager;
