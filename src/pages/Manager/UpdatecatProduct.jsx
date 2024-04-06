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
    menus: "",
  });

  const [originalCatProductData, setOriginalCatProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchcatProductData = async () => {
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

    fetchcatProductData();
  }, [catProductID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCatProductData({ ...catProductData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setCatProductData({ ...catProductData, status: !catProductData.status });
  };
  const handleGOBack = () => {
    navigate("/manager");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        JSON.stringify(catProductData) !==
        JSON.stringify(originalCatProductData)
      ) {
        const formData = new FormData();
        formData.append("catProductName", catProductData.catProductName);
        formData.append("catProductType", catProductData.catProductType);

        formData.append("price", catProductData.price);
        formData.append("status", catProductData.status);

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
      console.error("Error updating cat product data:", error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="manager">
          <h1>Chỉnh Sửa Sản Phẩm Mèo</h1>
          <p>
            Điền thông tin chi tiết để chỉnh sửa sản phẩm mèo trên hệ thống.
          </p>
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
                  <label>Loại</label>
                  <input
                    placeholder="Loại"
                    name="catProductType"
                    value={catProductData.catProductType}
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
                      setCatProductData({
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

export default UpdateCatProduct;
