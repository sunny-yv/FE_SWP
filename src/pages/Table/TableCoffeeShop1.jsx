import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useAuth, useUserData } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";
const App = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [changeStatusDialogOpen, setChangeStatusDialogOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const coffeeShopId = "ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc";
  const navigate = useNavigate();
  const userData = useUserData();

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await axios.get(
        `https://65e74f0253d564627a8e7c9f.mockapi.io/table`
      );
      const filteredTables = response.data.filter(
        (table) => table.coffeeID === coffeeShopId
      );
      setTables(filteredTables);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  const handleTableClick = (table) => {
    if (userData && userData.roleName === "Staff") {
      setSelectedTable(table);
      setChangeStatusDialogOpen(true);
    } else if (
      userData &&
      (userData.roleName === "Admin" || userData.roleName === "Manager")
    ) {
      // Không cho phép cập nhật bàn cho Admin và Manager
      setSnackbarSeverity("error");
      setSnackbarMessage("Bạn không có quyền cập nhật trạng thái của bàn.");
      setSnackbarOpen(true);
    } else {
      if (table.status === "Trống") {
        setSelectedTable(table);
        setConfirmDialogOpen(true);
      } else {
        // Chỉ cho phép đặt bàn khi trạng thái là "Trống" cho các vai trò khác
        setSnackbarSeverity("error");
        setSnackbarMessage("Bạn chỉ có thể đặt bàn khi trạng thái là 'Trống'.");
        setSnackbarOpen(true);
      }
    }
  };

  const handleConfirmDialogClose = async (confirmed) => {
    console.log("Confirm dialog closed with confirmed value:", confirmed);
    setConfirmDialogOpen(false);
    if (confirmed) {
      try {
        confirmBooking(selectedTable.tableID);
        console.log(selectedTable.tableID);
        await fetchTables();

        setSnackbarSeverity("success");
        setSnackbarMessage("Đặt hàng thành công!");
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Error confirming booking:", error);
        setSnackbarSeverity("error");
        setSnackbarMessage("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại sau.");
        setSnackbarOpen(true);
      }
    }
  };

  const confirmBooking = async (tableID) => {
    console.log("Calling confirmBooking function");
    const updateTables = tables.map((table) => {
      if (table.tableID === tableID) {
        return { ...table, status: "Yêu cầu đặt" };
      }
      return table;
    });
    console.log(updateTables);
    await axios
      .put(`https://65e74f0253d564627a8e7c9f.mockapi.io/table/${tableID}`, {
        status: "Yêu cầu đặt",
      })
      .then((response) => console.log(response.status));
    fetchTables();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      await axios.put(
        `https://65e74f0253d564627a8e7c9f.mockapi.io/table/${selectedTable.tableID}`,
        {
          status: selectedStatus,
        }
      );
      setTables((prevTables) =>
        prevTables.map((table) =>
          table.tableID === selectedTable.tableID
            ? { ...table, status: selectedStatus }
            : table
        )
      );
      setSnackbarSeverity("success");
      setSnackbarMessage("Cập nhật trạng thái thành công!");
      setSnackbarOpen(true);
      setChangeStatusDialogOpen(false);
    } catch (error) {
      console.error("Error updating status:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Đã xảy ra lỗi khi cập nhật trạng thái. Vui lòng thử lại sau."
      );
      setSnackbarOpen(true);
    }
  };
  const handleGOBack = () => {
    navigate("/booking");
  };
  useEffect(() => {
    console.log("userData:", userData);
    fetchTables();
  }, []);
  return (
    <div className="table-booking">
      <Header />
      <>
        <Box height={250} />
        <Container maxWidth="lg">
          <IconButton
            onClick={handleGOBack}
            style={{ position: "absolute", top: 100, left: 20 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Danh sách bàn
          </Typography>
          <Grid container spacing={3}>
            {tables.map((table) => (
              <Grid item xs={12} sm={6} md={4} key={table.tableID}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    backgroundColor:
                      table.status === "Trống"
                        ? "green"
                        : table.status === "Đã đặt"
                        ? "yellow"
                        : "red",
                    cursor:
                      userData.roleName === "Staff" ||
                      userData.roleName === "Manager" ||
                      userData.roleName === "Admin" ||
                      table.status === "Trống"
                        ? "pointer"
                        : "not-allowed",
                    opacity:
                      userData.roleName === "Staff" ||
                      userData.roleName === "Manager" ||
                      userData.roleName === "Admin"
                        ? 1
                        : table.status === "Trống"
                        ? 1
                        : 0.5,
                  }}
                  onClick={() => {
                    if (
                      userData.roleName === "Staff" ||
                      userData.roleName === "Admin" ||
                      userData.roleName === "Manager" ||
                      table.status === "Trống"
                    ) {
                      handleTableClick(table);
                    }
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    Trạng thái: {table.status}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Thể loại: {table.type}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Dialog
            open={confirmDialogOpen}
            onClose={() => setConfirmDialogOpen(false)}
          >
            <DialogTitle>Xác nhận đặt hàng</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Bạn có chắc chắn muốn đặt bàn này?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => handleConfirmDialogClose(false)}
                color="primary"
              >
                Hủy
              </Button>
              <Button
                onClick={() => handleConfirmDialogClose(true)}
                color="primary"
              >
                Xác nhận
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={changeStatusDialogOpen}
            onClose={() => setChangeStatusDialogOpen(false)}
          >
            <DialogTitle>Chọn trạng thái mới</DialogTitle>
            <DialogContent>
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Trạng thái</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={selectedStatus}
                  onChange={handleChangeStatus}
                  fullWidth
                >
                  <MenuItem value={"Trống"}>Trống</MenuItem>
                  <MenuItem value={"Đã đặt"}>Đã đặt</MenuItem>
                  <MenuItem value={"Yêu cầu đặt"}>Yêu cầu đặt</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleUpdateStatus()} color="primary">
                Cập nhật
              </Button>
              <Button
                onClick={() => setChangeStatusDialogOpen(false)}
                color="primary"
              >
                Hủy
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Container>
      </>

      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
