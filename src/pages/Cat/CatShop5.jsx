import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
function CatShop5() {
  return (
    <div className="cat-page">
      <Header />

      <div className="cat-text-1">
        <h1>Các Boss tại chi nhánh 5 của Donna</h1>
      </div>
      <div className="cards">
        <div className="card-1">
          <Card sx={{ maxWidth: 500, height: 550 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/meo Abyssinian.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Martin
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  3 tuổi.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Mèo Abyssinian.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Chi nhánh 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mèo Abyssinian nặng 3.5 – 5kg. Màu lông đỏ hồng, xanh da trời,
                  nâu vàng, tai dựng đứng, thân thiện với trẻ em, thú nuôi khác
                  như chó, vẹt. Thích được người nuôi quan tâm.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-1">
          <Card sx={{ maxWidth: 500, height: 550 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/meo bobtail.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lindley
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  2 tuổi.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Mèo Bobtail.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Chi nhánh 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mèo Bobtail nặng từ 6-8kg. Thuộc giống mèo trung bình tới lớn.
                  Lông ngắn, phần đuôi xù, nhiều màu đan xen. Lông rụng vừa
                  phải, cần chải định kỳ hàng tuần, thông minh và thân thiện,
                  hòa đồng với mọi người và thích chơi trốn tìm.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-1">
          <Card sx={{ maxWidth: 500, height: 550 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/meo long xu.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mora
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  4 tuổi.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Mèo lông xoăn.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Chi nhánh 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mèo lông xoăn nặng 3-5-5kg, lông ngắn trung bình, tai vểnh ra
                  sau độc đáo. Ít rụng lông, thân thiện giàu tình cảm.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card-1">
          <Card sx={{ maxWidth: 500, height: 550 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image="asset/mèo lông ngắn.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lovelace
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  5 tuổi.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Mèo lông ngắn.
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Chi nhánh 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mèo lông ngắn nặng 5.5 – 7kg. Màu lông đỏ hồng, xanh da trời,
                  nâu vàng, tai dựng đứng, độc lập, nhưng thích được quan tâm,
                  không thích bị bế trong lòng, hòa thuận với chó và mèo khác,
                  nhưng hiếu động với các loài chim.
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

export default CatShop5;
