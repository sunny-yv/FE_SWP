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
import { Icon } from "semantic-ui-react";
import { Button as SemanticButton } from "semantic-ui-react";
function ReadDrink() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);
  const handleEdit = (drinkID) => {
    navigate(`/updatedrink/${drinkID}`);
  };
  const handleAdd = () => {
    navigate("/createdrink");
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
    <>
      <Box height={50} />

      <SemanticButton primary onClick={handleAdd}>
        <Icon name="plus" /> Thêm đồ uống
      </SemanticButton>
      <Table celled>
        <TableHeader>
          <TableRow>
            {/* <TableHeaderCell>ID</TableHeaderCell> */}
            <TableHeaderCell>Tên</TableHeaderCell>

            <TableHeaderCell>Giá</TableHeaderCell>
            <TableHeaderCell>Ảnh</TableHeaderCell>
            <TableHeaderCell>Sửa</TableHeaderCell>
            <TableHeaderCell>Xóa</TableHeaderCell>
            {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow key={data.drinkID}>
                {/* <TableCell>{data.drinkID}</TableCell> */}
                <TableCell>{data.drinkName}</TableCell>
                <TableCell>{data.unitPrice}</TableCell>

                <TableCell style={{ padding: "10px" }}>
                  <img
                    src={data.image}
                    alt="drink"
                    style={{ maxWidth: "100px" }}
                  />
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="blue"
                    onClick={() => handleEdit(data.drinkID)}
                  >
                    Sửa
                  </SemanticButton>
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="red"
                    onClick={() => onDelete(data.drinkID)}
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

export default ReadDrink;
