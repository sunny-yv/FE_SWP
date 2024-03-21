import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SimpleSlider from "../../components/SimpleSlider";
import { Link } from "react-router-dom";
import { WidthFullTwoTone } from "@mui/icons-material";

function HomePage() {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats`
        );
        setCardData(response.data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <SimpleSlider />
        <div className="location">
          <img src="../asset/dots.png" alt="" />
          <h3>CHI NHÁNH</h3>

          <div className="location-all">
            <div className="location1" style={{ width: 450 }}>
              <Link to="/location">
                <div className="card">
                  <img src="../asset/meochinhanh01.jpg" alt="" width={300} />
                  <div className="text-card">
                    <h4>Chi nhánh Bình Tân</h4>
                    <p>
                      89 Đường số 3, Bình Hưng Hoà B, Bình Tân, Tp. Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="location1" style={{ width: 450 }}>
              <Link to="/location2">
                <div className="card">
                  <img src="../asset/meochinhanh02.jpg" alt="" />
                  <div className="text-card">
                    <h4>Chi nhánh Quận 1</h4>
                    <p>
                      250, Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, Tp. Hồ Chí
                      Minh.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="location1" style={{ width: 450 }}>
              <Link to="/location3">
                <div className="card">
                  <img src="../asset/meochinhanh3.jpg" alt="" />

                  <div className="text-card">
                    <h4>Chi nhánh Tân Bình</h4>
                    <p>
                      135 Hoàng Hoa Thám, Phường 13, Tân Bình, Tp.Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="location1" style={{ width: 450 }}>
              <Link to="/location4">
                <div className="card">
                  <img src="../asset/meochinhanh04.jpg" alt="" />
                  <div className="text-card">
                    <h4>Chi nhánh Quận 8</h4>
                    <p>59 Châu Thị Hóa, Phường 4, Quận 8, Tp.Hồ Chí Minh.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="location1" style={{ width: 450 }}>
              <Link to="/location5">
                <div className="card">
                  <img src="../asset/meochinhanh5.jpg" alt="" />
                  <div className="text-card">
                    <h4>Chi nhánh Đa Kao- Quận 1</h4>
                    <p>48 Đường Phan Liêm, Đa Kao, Quận 1, Tp.Hồ Chí Minh.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="product">
          <img src="../asset/dots.png" alt="" />
          <h3>SẢN PHẨM</h3>
        </div>

        <div className="card-all">
          <Link to={"/drinks"}>
            <div className="card">
              <img src="../asset/douong.jpeg" alt="" />
              <div className="text-card">
                <h4>Đồ uống</h4>
                <p>
                  Đồ uống phong phú, tha hồ mà lựa chọn. Giá cả hợp lí chỉ từ
                  25k.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/catproducts">
            <div className="card">
              <img src="../asset/thucanmeo1.jpg" alt="" />
              <div className="text-card">
                <h4>Thức ăn cho mèo</h4>
                <p>
                  Chọn một vài món ăn để có một buổi vui vẻ bên “hoàng thượng”
                  nào.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/catproducts">
            <div className="card">
              <img src="../asset/dochoimeo1.jpg" alt="" />
              <div className="text-card">
                <h4>Đồ chơi cho mèo</h4>
                <p>
                  Cùng nhau vui đùa với các bé mèo để có những phút giây thật
                  thoải mái nào.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="img-boss">
          <div className="title">
            <Link to="/allcat">HÌNH ẢNH CÁC BOSS TẠI CÁC CHI NHÁNH</Link>
          </div>
          <div className="image-home-page">
            {loaded
              ? cardData.map((card, index) => (
                  <div className="card-1" key={index}>
                    <Card sx={{ maxWidth: 450, height: 450 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="270px"
                          image={card.image}
                          alt="mèo"
                          margin="10px"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {card.catName}
                          </Typography>
                          <Typography gutterBottom variant="h7" component="div">
                            Tuổi:{card.age} tuổi
                          </Typography>
                          <Typography gutterBottom variant="h7" component="div">
                            Chủng loại:{card.type}
                          </Typography>
                          <Typography variant="h7" color="text.secondary">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
