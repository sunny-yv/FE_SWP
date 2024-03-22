import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button as SemanticButton } from "semantic-ui-react";
import CreateCoffeeShop from "../../components/CreateCoffeeShop";
import UpdateManager from "../UpdateCoffeeShop";

import { Icon } from "semantic-ui-react";

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

  const handleAdd = () => {
    navigate("/createcoffeeshop");
  };

  return (
    <>
      <Box height={150} />
      <SemanticButton primary onClick={handleAdd}>
        <Icon name="plus" /> Thêm chi nhánh
      </SemanticButton>
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
                  <SemanticButton
                    color="blue"
                    onClick={() => handleEdit(data.coffeeID)}
                  >
                    Sửa
                  </SemanticButton>
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="red"
                    onClick={() => onDelete(data.coffeeID)}
                  >
                    Xóa
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

export default ReadManager;
