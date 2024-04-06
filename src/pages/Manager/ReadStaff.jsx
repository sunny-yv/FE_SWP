import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Icon } from "semantic-ui-react";
import { Button as SemanticButton } from "semantic-ui-react";
function ReadStaff() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const handleEdit = (staffID) => {
    navigate(`/updatestaff/${staffID}`);
  };
  const handleAdd = () => {
    navigate("/createstaff");
  };
  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Staffs/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Box height={50} />

      <SemanticButton primary onClick={handleAdd}>
        <Icon name="plus" /> Thêm nhân viên
      </SemanticButton>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Tên</TableHeaderCell>
            <TableHeaderCell>Số điện thoại</TableHeaderCell>
            <TableHeaderCell>Địa chỉ</TableHeaderCell>
            <TableHeaderCell>Ngày sinh</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Sửa</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow key={data.staffID}>
                <TableCell>{data.fullName}</TableCell>
                <TableCell>{data.phoneNumber}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.dob}</TableCell>
                <TableCell>{data.email}</TableCell>

                <TableCell>
                  <SemanticButton
                    color="blue"
                    onClick={() => handleEdit(data.staffID)}
                  >
                    Sửa
                  </SemanticButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default ReadStaff;
