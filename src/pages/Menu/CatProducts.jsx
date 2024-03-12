import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
function CatProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    if (searchTerm === "") {
      axios
        .get(`https://thecoffeeshopstore.azurewebsites.net/api/CatProducts`)
        .then(function (response) {
          console.log(response.data);
          setCardData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://thecoffeeshopstore.azurewebsites.net/api/CatProducts/search?name=${searchTerm}`
        )
        .then(function (response) {
          console.log(response.data);
          setCardData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  return (
    <div className="menu-page">
      <Header />

      <div className="menu-text-1">
        <h1>Các sản phẩm dành cho Boss tại Donna</h1>
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
        {cardData.map((card, index) => (
          <div className="menu-1">
            <Card sx={{ maxWidth: 300, height: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300px"
                  image={card.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.catProductName}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    style={{ fontStyle: "italic" }}
                  >
                    {card.catProductType}
                  </Typography>
                  <Typography gutterBottom variant="h8" component="div">
                    {card.price}
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

export default CatProducts;
