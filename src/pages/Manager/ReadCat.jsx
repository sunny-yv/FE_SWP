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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
function ReadCat() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const handleConfirmDeleteDialogOpen = (id) => {
    setConfirmDeleteDialogOpen(true);
    setConfirmDeleteId(id);
  };

  const handleConfirmDeleteDialogClose = () => {
    setConfirmDeleteDialogOpen(false);
    setConfirmDeleteId(null);
  };
  const handleEdit = (catID) => {
    navigate(`/updatecat/${catID}`);
  };
  const handleAdd = () => {
    navigate("/createcat");
  };
  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Cats/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredData = apiData.filter(
      (data) => !deletedIds.includes(data.catID)
    );
    setApiData(filteredData);
  }, [deletedIds]);

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://thecoffeeshopstore.azurewebsites.net/api/Cats/${id}`
      );
      setDeletedIds([...deletedIds, id]);
      handleConfirmDeleteDialogClose(); // Ẩn Dialog sau khi xóa thành công
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <Box height={50} />

      <SemanticButton primary onClick={handleAdd}>
        <Icon name="plus" /> Thêm mèo
      </SemanticButton>
      <Table celled>
        <TableHeader>
          <TableRow>
            {/* <TableHeaderCell>ID</TableHeaderCell> */}
            <TableHeaderCell>Tên</TableHeaderCell>
            <TableHeaderCell>Tuổi</TableHeaderCell>
            <TableHeaderCell>Mô tả</TableHeaderCell>
            <TableHeaderCell>Thể loại</TableHeaderCell>
            <TableHeaderCell>Ảnh</TableHeaderCell>
            <TableHeaderCell>Sửa</TableHeaderCell>
            <TableHeaderCell>Xóa</TableHeaderCell>
            {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow key={data.catID}>
                {/* <TableCell>{data.catID}</TableCell> */}
                <TableCell>{data.catName}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell style={{ padding: "10px" }}>
                  <img
                    src={data.image}
                    alt="Cat"
                    style={{ maxWidth: "100px" }}
                  />
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="blue"
                    onClick={() => handleEdit(data.catID)}
                  >
                    Sửa
                  </SemanticButton>
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="red"
                    onClick={() => handleConfirmDeleteDialogOpen(data.catID)}
                  >
                    Xóa
                  </SemanticButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Dialog
        open={confirmDeleteDialogOpen}
        onClose={handleConfirmDeleteDialogClose}
      >
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xóa mục này không?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onDelete(confirmDeleteId)} color="primary">
            Xác nhận
          </Button>
          <Button onClick={handleConfirmDeleteDialogClose} color="primary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReadCat;
