import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
function UpdateStaff() {
  const { staffID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState({
    fullName: "",
    phoneNumer: "",
    address: "",
    dob: "",
    coffeeID: "",
    staffID: "",
  });

  const [originalStaffData, setOriginalStaffData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchstaffData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Staffs/${staffID}`
        );
        const staffData = response.data;
        setStaffData(staffData);
        setOriginalStaffData(staffData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching staff data:", error);
        setIsLoading(false);
      }
    };

    fetchstaffData();
  }, [staffID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "coffeeID") {
      setStaffData({ ...staffData, coffeeID: value });
    } else {
      setStaffData({ ...staffData, [name]: value });
    }
  };

  const handleGOBack = () => {
    navigate("/manager");
  };
  const coffeeShopIds = [
    "9c305019-b38f-431a-835f-7b29d4351bc7",
    "ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc",
    "f9d87ddc-c7ea-4178-ba3b-d30efa6f426c",
    "e54cb065-8ef4-4041-8822-e2ecf294c281",
    "4ff4a000-9b2a-4409-92c5-f9cf01947609",
  ];

  const handleCoffeeIDChange = (event) => {
    const value = event.target.value;
    setStaffData({ ...staffData, coffeeID: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        staffID: staffData.staffID,
        fullName: staffData.fullName,
        phoneNumber: staffData.phoneNumber,
        address: staffData.address,
        dob: staffData.dob,
        coffeeID: staffData.coffeeID,
      };

      await axios.put(
        `https://thecoffeeshopstore.azurewebsites.net/api/Staffs/${staffID}`,
        formData
      );
      console.log("Updated staff data sent successfully");
      setIsUpdated(true);
      setTimeout(() => {
        setIsUpdated(false);
        navigate("/manager");
      }, 1000);
    } catch (error) {
      console.error("Error updating staff data:", error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="manager">
          <h1>Chỉnh Sửa Thông Tin Nhân Viên</h1>
          <p>
            Điền thông tin chi tiết để chỉnh sửa thông tin nhân viên trên hệ
            thống.
          </p>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {Object.keys(originalStaffData).length === 0 && (
                <p>Không tìm thấy nhân viên.</p>
              )}
              <Form onSubmit={handleSubmit}>
                <FormField>
                  <label>Tên</label>
                  <input
                    placeholder="Tên"
                    name="fullName"
                    value={staffData.fullName}
                    onChange={handleInputChange}
                  />
                </FormField>

                <FormField>
                  <label>Số điện thoại</label>
                  <input
                    placeholder="Số điện thoại"
                    name="phoneNumber"
                    value={staffData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </FormField>

                <FormField>
                  <label>Địa chỉ</label>
                  <input
                    placeholder="address"
                    name="address"
                    value={staffData.address}
                    onChange={handleInputChange}
                  />
                </FormField>

                <FormField>
                  <label>Ngày sinh</label>
                  <input
                    placeholder="dob"
                    name="dob"
                    value={staffData.dob}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <InputLabel id="demo-simple-select-label">
                    <b>Chi nhánh</b>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={staffData.coffeeID}
                    onChange={(event) => handleCoffeeIDChange(event)}
                    label="Age"
                    style={{ width: "310px", backgroundColor: "#fff" }}
                  >
                    {coffeeShopIds.map((id) => (
                      <MenuItem key={id} value={id}>
                        Chi nhánh {coffeeShopIds.indexOf(id) + 1}
                      </MenuItem>
                    ))}
                  </Select>
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
                    {JSON.stringify(originalStaffData) ===
                    JSON.stringify(staffData)
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

export default UpdateStaff;
