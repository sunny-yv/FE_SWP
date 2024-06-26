import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import "./style.css";

function CatShop2() {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const coffeeID = "f9d87ddc-c7ea-4178-ba3b-d30efa6f426c";

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats/searchbycoffeeid?id=${coffeeID}`
        );
        setCardData(response.data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, [coffeeID]);

  return (
    <div className="cat-page">
      <Header />

      <div className="cat-text-1">
        <h1 style={{ marginTop: "50px" }}>
          Các Boss tại chi nhánh Quận 1 của Donna
        </h1>
      </div>
      <div className="cards">
        {loaded
          ? cardData.map((card, index) => (
              <div className="card-1" key={index}>
                <Card sx={{ maxWidth: 500, height: 550 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image={card.image}
                      alt="mèo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.catName}
                      </Typography>
                      <Typography gutterBottom variant="h8" component="div">
                        {card.age} tuổi
                      </Typography>
                      <Typography gutterBottom variant="h8" component="div">
                        {card.type}
                      </Typography>
                      <Typography gutterBottom variant="h8" component="div">
                        Chi nhánh Quận 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))
          : [...Array(12)].map((_, index) => (
              <div className="card-1" key={index}>
                <Card sx={{ maxWidth: 500, height: 550 }}>
                  <Skeleton key={index} width={500} height={500} />;
                </Card>
              </div>
            ))}
      </div>

      <Footer />
    </div>
  );
}

export default CatShop2;
