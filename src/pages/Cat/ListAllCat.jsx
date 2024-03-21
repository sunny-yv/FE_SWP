import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
function ListAllCat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      axios
        .get(`https://thecoffeeshopstore.azurewebsites.net/api/Cats`)
        .then(function (response) {
          console.log(response.data);
          setCardData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoaded(true);
        });
    } else {
      axios
        .get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats/search?searchValue=${searchTerm}`
        )
        .then(function (response) {
          console.log(response.data);
          setCardData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoaded(true);
        });
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="cat-page">
      <Header />
      <div className="cat-text-1">
        <h1>Tất cả các bé mèo của Donna Cat Coffee</h1>
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
                        Chi nhánh 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))
          : [...Array(12)].map((_, index) => {
              return (
                <div className="card-1" key={index}>
                  <Card sx={{ maxWidth: 500, height: 550 }}>
                    <Skeleton key={index} width={500} height={500} />;
                  </Card>
                </div>
              );
            })}
      </div>
      <Footer />
    </div>
  );
}

export default ListAllCat;
