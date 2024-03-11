import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateCatProduct() {
  const { catProductID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [catProductData, setCatProductData] = useState({
    catProductName: "",
    catProductType: "",
    price: "",
    image: null,
    status: false,
  });

  const [originalCatProductData, setOriginalCatProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCatProductData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/CatProducts/${catProductID}`
        );
        const catProductData = response.data;
        setCatProductData(catProductData);
        setOriginalCatProductData(catProductData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cat product data:", error);
      }
    };

    fetchCatProductData();
  }, [catProductID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCatProductData({ ...catProductData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setCatProductData({ ...catProductData, status: !catProductData.status });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(catProductData) !== JSON.stringify(originalCatData)) {
        const formData = new FormData();
        formData.append("catProductName", catProductData.catProductName);
        formData.append("catProductType", catProductData.catProductType);
        formData.append("price", catProductData.price);

        formData.append("status", catData.status);

        if (catProductData.image) {
          formData.append("image", catProductData.image);
        }

        await axios.put(
          `https://thecoffeeshopstore.azurewebsites.net/api/CatProducts/${catProductID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Updated cat product data sent successfully");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readcatproduct");
        }, 1000);
      } else {
        console.log("Cat product data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readcatproduct");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating cat product data:", error);
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
                name="catProductName"
                value={catProductData.catProductName}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Thể loại</label>
              <input
                placeholder="Thể loại"
                name="catProductType"
                value={catProductData.type}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Giá</label>
              <input
                placeholder="Giá"
                name="price"
                value={catProductData.price}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Ảnh</label>
              <input
                accept="image/*"
                type="file"
                onChange={(event) =>
                  setCatData({
                    ...catProductData,
                    image: event.target.files[0],
                  })
                }
              />
            </FormField>

            <FormField>
              <Checkbox
                checked={catProductData.status}
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
                {JSON.stringify(originalCatProductData) ===
                JSON.stringify(catProductData)
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

export default UpdateCatProduct;
