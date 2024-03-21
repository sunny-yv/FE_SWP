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

function CatShop5() {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const coffeeID = "e54cb065-8ef4-4041-8822-e2ecf294c281";

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
        <h1>Các Boss tại chi nhánh 1 của Donna</h1>
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
                        Chi nhánh Quận 2
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

export default CatShop5;
