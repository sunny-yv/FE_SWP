import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const App = () => {
  const [tables, setTables] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const coffeeShopId = "f9d87ddc-c7ea-4178-ba3b-d30efa6f426c";
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    fetchUserRole();
    fetchTables();
  }, []);

  const fetchUserRole = async () => {
    try {
      // Thay đường dẫn 'URL để lấy vai trò của người dùng' bằng API hoặc phương thức phù hợp
      const response = await axios.get(
        "https://thecoffeeshopstore.azurewebsites.net/api/Accounts"
      );
      setUserRole(response.data.role); // Gán vai trò của người dùng
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await axios.get(
        `https://thecoffeeshopstore.azurewebsites.net/api/Tables`
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
    // Kiểm tra nếu vai trò của người dùng là 'Staff', mở trang confirmStaff để thay đổi trạng thái
    if (userRole === "Staff") {
      // Chuyển người dùng có vai trò là 'Staff' sang trang confirmStaff
      window.location.href = "/confirmStaff";
    } else {
      // Hiển thị thông báo cho người dùng không có quyền thay đổi trạng thái
      setSnackbarSeverity("warning");
      setSnackbarMessage("Bạn không có quyền thay đổi trạng thái của bàn này.");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg">
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
                cursor: "pointer",
                opacity: 1,
              }}
              onClick={() => handleTableClick(table)}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {table.name}
              </Typography>
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
  );
};

export default App;
