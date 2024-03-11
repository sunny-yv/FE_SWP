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

import axios from "axios";
import { useNavigate } from "react-router-dom";
function ReadDrink() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);
  const handleEdit = (drinkID) => {
    navigate(`/updatedrink/${drinkID}`);
  };

  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Drinks/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredData = apiData.filter(
      (data) => !deletedIds.includes(data.drinkID)
    );
    setApiData(filteredData);
  }, [deletedIds]);

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://thecoffeeshopstore.azurewebsites.net/api/Drinks/${id}`
      );
      setDeletedIds([...deletedIds, id]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Tên</TableHeaderCell>
          <TableHeaderCell>Giá</TableHeaderCell>

          <TableHeaderCell>Sửa</TableHeaderCell>
          <TableHeaderCell>Xóa</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {apiData.map((data) => {
          return (
            <TableRow key={data.drinkID}>
              <TableCell>{data.drinkName}</TableCell>
              <TableCell>{data.unitPrice}</TableCell>

              <TableCell>
                <Button color="blue" onClick={() => handleEdit(data.drinkID)}>
                  Sửa
                </Button>
              </TableCell>

              <TableCell>
                <Button color="red" onClick={() => onDelete(data.drinkID)}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ReadDrink;
