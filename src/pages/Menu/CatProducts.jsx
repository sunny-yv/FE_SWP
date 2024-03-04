import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
function CatProducts() {
  return (
    <div className="menu-page">
      <Header />

      <div className="menu-text-1">
        <h1>Các sản phẩm dành cho Boss tại Donna</h1>
      </div>
      <div className="menus">
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Hạt dinh dưỡng nhỏ.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hạt dinh dưỡng (nhỏ)
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  50.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Hạt dinh duoengx cho mèo ( nhỏ và lớn luôn).jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hạt dinh dưỡng (lớn)
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>

                <Typography gutterBottom variant="h8" component="div">
                  100.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Xúc xích thưởng.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Xúc xích thưởng
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  20.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Pate cá.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pate cá
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  30.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Pate gà.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pate gà
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  30.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Súp thưởng.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Súp thưởng
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  15.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Snack thưởng.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Snack thưởng
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ ăn cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  20.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Bàn cào móng.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bàn cào móng
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  50.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Cá nhồi bông.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cá nhồi bông
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  40.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/cần câu mèo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cần câu mèo
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  30.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Chuột điều khiển từ xa.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chuột điều khiển từ xa
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  50.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Chuột nhồi bông.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chuột nhồi bông
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  30.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Cỏ mèo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cỏ mèo
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  20.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Đèn laze.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Đèn laze
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  40.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="menu-1">
          <Card sx={{ maxWidth: 300, height: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/Gậy lông vũ.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gậy lông vũ
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontStyle: "italic" }}
                >
                  Đồ chơi cho mèo
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  70.000 VNĐ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="clear"></div>
      </div>

      <Footer />
    </div>
  );
}

export default CatProducts;
