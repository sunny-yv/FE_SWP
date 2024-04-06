import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from "victory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import axiosInstance from "../../lib/axios";

function Dashboard() {
  const [dataState, setDataState] = useState({});

  const getReport = async () => {
    try {
      const CalculateTotalOrderPrice = await axiosInstance.get(
        "https://thecoffeeshopstore.azurewebsites.net/CalculateTotalOrderPrice"
      );
      const CalculateTotalItems = await axiosInstance.get(
        "https://thecoffeeshopstore.azurewebsites.net/CalculateTotalItems"
      );
      const CountDrinks = await axiosInstance.get(
        "https://thecoffeeshopstore.azurewebsites.net/CountDrinks"
      );
      const GetMonthlyTotalPrices = await axiosInstance.get(
        "https://thecoffeeshopstore.azurewebsites.net/GetMonthlyTotalPrices"
      );

      setDataState((pre) => ({
        ...pre,
        tongDoanhThu: CalculateTotalOrderPrice?.data,
        itemDaBan: CalculateTotalItems?.data,
        tongDoUong: CountDrinks?.data,
        dataChart: GetMonthlyTotalPrices?.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReport();
  }, []);
  return (
    <div style={{ marginTop: 100 }}>
      <Grid container spacing={1}>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={"GrayText"}
                  >
                    Doanh thu
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>
                      {dataState?.tongDoanhThu?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </b>
                  </Typography>
                </div>
                <Avatar sx={{ width: 56, height: 56, bgcolor: "red" }}>
                  <AttachMoneyIcon sx={{ fontSize: "25px" }} />
                </Avatar>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"red"}
              >
                <KeyboardDoubleArrowUpIcon /> Tăng
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={"GrayText"}
                  >
                    Sản phẩm đã bán
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{dataState?.itemDaBan}</b>
                  </Typography>
                </div>
                <Avatar sx={{ width: 56, height: 56, bgcolor: "orange" }}>
                  <InventoryIcon sx={{ fontSize: "25px" }} />
                </Avatar>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"orange"}
              >
                <KeyboardDoubleArrowUpIcon /> Sản phẩm
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={"GrayText"}
                  >
                    Tổng đồ uống
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{dataState?.tongDoUong}</b>
                  </Typography>
                </div>
                <Avatar sx={{ width: 56, height: 56, bgcolor: "blue" }}>
                  <LocalBarIcon sx={{ fontSize: "25px" }} />
                </Avatar>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"blue"}
              >
                <KeyboardDoubleArrowUpIcon /> Đồ uống
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography gutterBottom variant="h4" component="div" sx={{ mt: 10 }}>
        Sơ đồ doanh thu
      </Typography>
      {/* style={{ width: "700" }} */}
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            width={1200}
            height={500}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              tickFormat={[
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12",
              ]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000}k`} />
            <VictoryBar
              data={dataState?.dataChart}
              x="month"
              y="totalPrice"
              barWidth={30}
              style={{
                data: {
                  fill: ({ datum }) => (datum.x === 3 ? "#000000" : "#c43a31"),
                  stroke: ({ index }) =>
                    +index % 2 === 0 ? "#000000" : "#c43a31",
                  fillOpacity: 0.7,
                  strokeWidth: 3,
                },
                labels: {
                  fontSize: 15,
                  fill: ({ datum }) => (datum.x === 3 ? "#000000" : "#c43a31"),
                },
              }}
            />
          </VictoryChart>
        </div>
      </Box>
    </div>
  );
}

export default Dashboard;
