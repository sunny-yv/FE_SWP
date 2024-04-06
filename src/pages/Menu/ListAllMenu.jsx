import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

function ListAllMenu() {
  const [drinks, setDrinks] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDrinks();
    fetchProducts();
  }, []);

  const fetchDrinks = async () => {
    try {
      const response = await axios.get(
        "https://thecoffeeshopstore.azurewebsites.net/api/Drinks"
      );
      setDrinks(response.data);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://thecoffeeshopstore.azurewebsites.net/api/CatProducts"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="menu-page">
      <Header />
      <div className="menu-text-1">
        <h1>Menu</h1>
      </div>
      <div className="input-cat">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ width: "50%" }}
        />
      </div>
      <div className="menus">
        {drinks
          .filter((drink) =>
            drink.drinkName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((drink) => (
            <div className="menu-1" key={drink.id}>
              <Card sx={{ maxWidth: 300, height: 450 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={drink.image}
                    alt="đồ uống"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {drink.drinkName}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                      {drink.unitPrice}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}

        {products
          .filter((product) =>
            product.catProductName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <div className="menu-1" key={product.id}>
              <Card sx={{ maxWidth: 300, height: 450 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={product.image}
                    alt="sản phẩm"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.catProductName}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="div"
                      style={{ fontStyle: "italic" }}
                    >
                      {product.catProductType}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ListAllMenu;
