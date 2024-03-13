import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CartState } from "../../contexts/cart";
import { ADD_TO_CART } from "../../contexts/reducer/cartReducer";
const ProductItem = ({ card, key }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="menu-1" key={key}>
      <Card sx={{ maxWidth: 300, height: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            // image={imageUrls[index]}
            image={card.image}
            alt="đồ uống"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.drinkName}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              {card.unitPrice}
            </Typography>
            <button
              onClick={() =>
                dispatch({
                  type: ADD_TO_CART,
                  payload: card,
                })
              }
            >
              Add to cart
            </button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductItem;
