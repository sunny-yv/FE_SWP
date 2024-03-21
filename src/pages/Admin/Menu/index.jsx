import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../../lib/axios";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "semantic-ui-react";
import { CartState } from "../../../contexts/cart";

import {
  ADD_TO_CART,
  CHANGE_CART_QUANTITY,
  REMOVE_FROM_CART,
  giam,
  tang,
} from "../../../contexts/reducer/cartReducer";
import { toast } from "react-toastify";

const MenuStaff = () => {
  const [listMenu, setListMenu] = useState([]);
  const i =
    "/Menus/byshopid/ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc?id=ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc";
  useEffect(() => {
    axiosInstance.get(i).then((res) => setListMenu(res.data));
  }, []);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const CreateOrder = useCallback(async () => {
    if (cart?.length > 0) {
      const body = cart.map((item) => {
        const { image, price, name, ...re } = item;
        return re;
      });
      const { status, data } = await axiosInstance.post("/Orders", body);
      if (+status === 200) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        toast(data, { type: "success" });
        dispatch({ type: REMOVE_FROM_CART });
      } else toast("Có biến", { type: "error" });
    }
  }, []);
  const handleChangeItem = useCallback((event, menuID) => {
    dispatch({
      type: CHANGE_CART_QUANTITY,
      payload: { event, menuID },
    });
  }, []);
  return (
    <>
      <Box height={100} />
      <Grid container spacing={2} sx={{ padding: 1 }}>
        <Grid item xs={8} sx={{ overflowY: "auto", height: "100vh" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {" "}
            Menu
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "space-evenly",
              rowGap: "3rem",
            }}
          >
            {listMenu.map((item) => {
              return (
                <Card sx={{ width: 300 }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 275, objectFit: "revert" }}
                    image={item.imageDrink || item.imageCatProduct}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.drinkName || item.catProductName}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.priceDrink || item.priceCatProduct)}
                      </Typography>
                      <Fab
                        color="success"
                        size="small"
                        onClick={() =>
                          dispatch({
                            type: ADD_TO_CART,
                            payload: item,
                          })
                        }
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          size="xs"
                          color="white"
                        />
                      </Fab>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ maxHeight: 300 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Order
          </Typography>
          <Stack spacing={2}>
            <Stack spacing={2}>
              {cart.map((item) => (
                <Grid
                  container
                  spacing={3}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <Avatar variant="square" src={item.image} />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Fab
                        sx={{ height: 20, width: 20, minHeight: 20 }}
                        onClick={() => handleChangeItem(giam, item.menuID)}
                      >
                        -
                      </Fab>
                      <Typography variant="h6">{item.quantity}</Typography>
                      <Fab
                        sx={{ height: 20, width: 20, minHeight: 20 }}
                        onClick={() => handleChangeItem(tang, item.menuID)}
                      >
                        +
                      </Fab>
                    </Box>
                  </Grid>
                  <Grid item xs={2} sx={{ display: "flex" }}>
                    <Typography>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price)}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Stack>
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
                      return a + b.amount;
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
                      return a + b.amount;
                    }, 0)
                )}
              </Typography>
            </Box>
            <Divider />
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={CreateOrder}
            >
              Complete Order
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuStaff;
