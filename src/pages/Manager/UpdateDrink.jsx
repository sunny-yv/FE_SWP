import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateDrink() {
  const { drinkID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [drinkData, setdrinkData] = useState({
    drinkName: "",

    unitPrice: "",

    image: null,
  });

  const [originaldrinkData, setOriginaldrinkData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdrinkData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Drinks/${drinkID}`
        );
        const drinkData = response.data;
        setdrinkData(drinkData);
        setOriginaldrinkData(drinkData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching drink data:", error);
      }
    };

    fetchdrinkData();
  }, [drinkID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setdrinkData({ ...drinkData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setdrinkData({ ...drinkData, status: !drinkData.status });
  };
  const handleGOBack = () => {
    navigate("/manager");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(drinkData) !== JSON.stringify(originaldrinkData)) {
        const formData = new FormData();
        formData.append("drinkName", drinkData.drinkName);

        formData.append("unitPrice", drinkData.unitPrice);

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
          navigate("/manager");
        }, 1000);
      } else {
        console.log("Cat product data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/manager");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating drink data:", error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="manager">
          <h1>Chỉnh Sửa Đồ Uống</h1>
          <p>Điền thông tin chi tiết để chỉnh sửa đồ uống trên hệ thống.</p>
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
                    name="unitPrice"
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
                      setdrinkData({
                        ...drinkData,
                        image: event.target.files[0],
                      })
                    }
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
                    {JSON.stringify(originaldrinkData) ===
                    JSON.stringify(drinkData)
                      ? "Không có sự thay đổi"
                      : "Sửa đổi đã được lưu thành công!"}
                  </p>
                )}
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    marginRight: "20px",
                  }}
                >
                  Cập nhật
                </Button>
                <Button onClick={handleGOBack}>Quay lại</Button>
              </Form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UpdateDrink;
