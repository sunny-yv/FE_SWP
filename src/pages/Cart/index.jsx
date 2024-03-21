import React, { useCallback } from "react";
import Header from "../../components/Header";
import { CartState } from "../../contexts/cart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  CHANGE_CART_QUANTITY,
  giam,
  tang,
} from "../../contexts/reducer/cartReducer";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const handleChangeItem = useCallback((event, drinkID) => {
    console.log(1);
    dispatch({
      type: CHANGE_CART_QUANTITY,
      payload: { event, drinkID },
    });
  }, []);
  const handleChangeItem1 = useCallback((event, catProductID) => {
    console.log(1);
    dispatch({
      type: CHANGE_CART_QUANTITY,
      payload: { event, catProductID },
    });
  }, []);
  return (
    <div className="container">
      <Header />

      <Grid container spacing={2} sx={{ paddingTop: "10%" }}>
        {cart && cart.length > 0 ? (
          <>
            <Grid xs={8}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Giỏ hàng
              </Typography>
              <Stack spacing={2}>
                {cart.map((item) => {
                  return (
                    <Card sx={{ display: "flex" }} key={item.drinkID}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100 }}
                        image={item.image}
                        alt="Live from space album cover"
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flex: "1 0 auto",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {item.drinkName}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.unitPrice)}
                          </Typography>
                        </CardContent>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="outlined"
                            onClick={() => handleChangeItem(giam, item.drinkID)}
                          >
                            {" "}
                            -{" "}
                          </Button>
                          <Button variant="contained"> {item.qty} </Button>
                          <Button
                            variant="outlined"
                            onClick={() => handleChangeItem(tang, item.drinkID)}
                          >
                            {" "}
                            +{" "}
                          </Button>
                        </Stack>
                      </Box>
                    </Card>
                  );
                })}
              </Stack>
            </Grid>
            <Grid xs={4} sx={{ maxHeight: 300 }}>
              <Stack spacing={2}>
                <Divider />
                <Box sx={{ display: "flex", gap: "0.2rem" }}>
                  <TextField fullWidth label="Nhập Voucher" size="small" />
                  <Button>Apply</Button>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "gray",
                  }}
                >
                  <Typography variant="h5">Subtotal</Typography>
                  <Typography variant="h5">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      cart &&
                        cart.length > 0 &&
                        cart.reduce((a, b) => {
                          return a + b.unitPrice * b.qty;
                        }, 0)
                    )}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "gray",
                  }}
                >
                  <Typography variant="h6">Shipping</Typography>
                  <Typography variant="h6">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(0)}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">Total</Typography>
                  <Typography variant="h4">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      cart &&
                        cart.length > 0 &&
                        cart.reduce((a, b) => {
                          return a + b.unitPrice * b.qty;
                        }, 0)
                    )}
                  </Typography>
                </Box>
                <Divider />
                <Button variant="contained" color="success" size="large">
                  Complete Order
                </Button>
              </Stack>
            </Grid>
          </>
        ) : (
          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="mt-5">
              Giỏ hàng trống
            </Typography>
            <Link to="/drinks" className="mt-2">
              CHuyển sang trang đồ uống
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Cart;
