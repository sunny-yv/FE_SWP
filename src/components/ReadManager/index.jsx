import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import UpdateManager from "../../components/UpdateManager";
function ReadManager() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);

  const handleEdit = (coffeeID) => {
    navigate(`/updatemanager/${coffeeID}`);
  };

  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredData = apiData.filter(
      (data) => !deletedIds.includes(data.coffeeID)
    );
    setApiData(filteredData);
  }, [deletedIds]);

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops/${id}`
      );
      setDeletedIds([...deletedIds, id]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <Box height={100} />
      <Table celled>
        <TableHeader>
          <TableRow>
            {/* <TableHeaderCell>ID</TableHeaderCell> */}
            <TableHeaderCell>Tên</TableHeaderCell>
            <TableHeaderCell>Giờ đóng cửa</TableHeaderCell>
            <TableHeaderCell>Giờ mở cửa</TableHeaderCell>
            <TableHeaderCell>Số điện thoại</TableHeaderCell>
            {/* <TableHeaderCell>Ảnh</TableHeaderCell> */}
            <TableHeaderCell>Sửa</TableHeaderCell>
            <TableHeaderCell>Xóa</TableHeaderCell>
            {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow key={data.coffeeID}>
                {/* <TableCell>{data.catID}</TableCell> */}
                <TableCell>{data.coffeeName}</TableCell>
                <TableCell>{data.openTime}</TableCell>
                <TableCell>{data.closeTime}</TableCell>
                <TableCell>{data.phoneNumber}</TableCell>
                {/* <TableCell>{data.image}</TableCell> */}

                <TableCell>
                  <Button
                    color="blue"
                    onClick={() => handleEdit(data.coffeeID)}
                  >
                    Sửa
                  </Button>
                </TableCell>

                <TableCell>
                  <Button color="red" onClick={() => onDelete(data.coffeeID)}>
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default ReadManager;
