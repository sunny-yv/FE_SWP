import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateDrink() {
  const { drinkID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [drinkData, setDrinkData] = useState({
    drinkName: "",
    unitPrice: "",
    image: null,
    status: false,
  });

  const [originalDrinkData, setOriginalDrinkData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Drinks/${drinkID}`
        );
        const drinkData = response.data;
        setDrinkData(drinkData);
        setOriginalDrinkData(drinkData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching drink data:", error);
      }
    };

    fetchDrinkData();
  }, [drinkID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDrinkData({ ...drinkData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setDrinkData({ ...drinkData, status: !drinkData.status });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(drinkData) !== JSON.stringify(originalDrinkData)) {
        const formData = new FormData();
        formData.append("drinkName", drinkData.drinkName);
        formData.append("unitPrice", drinkData.unitPrice);

        formData.append("status", drinkData.status);

        if (drinkData.image) {
          formData.append("image", drinkData.image);
        }

        await axios.put(
          `https://thecoffeeshopstore.azurewebsites.net/api/Drinks/${drinkID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Updated drink data sent successfully");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readdrink");
        }, 1000);
      } else {
        console.log("Drink data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readdrink");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating drink data:", error);
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
                name="drinkName"
                value={drinkData.drinkName}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField>
              <label>Giá</label>
              <input
                placeholder="Giá"
                name="unitprice"
                value={drinkData.unitPrice}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Ảnh</label>
              <input
                accept="image/*"
                type="file"
                onChange={(event) =>
                  setDrinkData({ ...drinkData, image: event.target.files[0] })
                }
              />
            </FormField>

            <FormField>
              <Checkbox
                checked={drinkData.status}
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
                {JSON.stringify(originalDrinkData) === JSON.stringify(drinkData)
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

export default UpdateDrink;
