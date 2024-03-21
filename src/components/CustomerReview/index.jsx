import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function CustomerReviews() {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const getLabelText = (value) => {
    return labels[value !== null ? (hover !== -1 ? hover : value) : value];
  };

  return (
    <div className="sticky-slider" style={{ width: "100%" }}>
      <Slider {...settings}>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 20 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Anh Hoàng"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/270961679_10159870536636108_2642967668131478092_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh3q-xNXWxiar0n6odMPUnKmwUhI5YCb0qbBSEjlgJvQ9Cwwp_6CgyOvCw_QbbQC0XlyKeiqrGnsAywt1xcQCL&_nc_ohc=jy4wkjUp0aYAX9FY3f0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC-qHOh7wq-Yu1clFq9KS9HEC7qszv6Jp7FI50pWGr1WA&oe=65FDE3A7"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Anh Hoàng"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Bạn Yến Vân"
                  src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/17/871613/Han-So-Hee-2.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Chị Yến Vân"
              subheader="March 14, 2024"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Tôi đã có một trải nghiệm thú vị tại Quán Cafe Mèo! Không chỉ là
                một nơi để thưởng thức cà phê ngon, mà còn là nơi để tương tác
                và chơi với những chú mèo đáng yêu. Một không gian thư giãn và
                đáng nhớ!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Zen Vũ"
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2023-11/harper-bazaar-phim-cha-eun-woo-dong-eunwo.o_c-2-e1649393714545.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Zen Vũ"
              subheader="Februa14, 2016"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Anh Hoàng"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/270961679_10159870536636108_2642967668131478092_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh3q-xNXWxiar0n6odMPUnKmwUhI5YCb0qbBSEjlgJvQ9Cwwp_6CgyOvCw_QbbQC0XlyKeiqrGnsAywt1xcQCL&_nc_ohc=jy4wkjUp0aYAX9FY3f0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC-qHOh7wq-Yu1clFq9KS9HEC7qszv6Jp7FI50pWGr1WA&oe=65FDE3A7"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Anh Hoàng"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Anh Hoàng"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/270961679_10159870536636108_2642967668131478092_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh3q-xNXWxiar0n6odMPUnKmwUhI5YCb0qbBSEjlgJvQ9Cwwp_6CgyOvCw_QbbQC0XlyKeiqrGnsAywt1xcQCL&_nc_ohc=jy4wkjUp0aYAX9FY3f0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC-qHOh7wq-Yu1clFq9KS9HEC7qszv6Jp7FI50pWGr1WA&oe=65FDE3A7"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Anh Hoàng"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Anh Hoàng"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/270961679_10159870536636108_2642967668131478092_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh3q-xNXWxiar0n6odMPUnKmwUhI5YCb0qbBSEjlgJvQ9Cwwp_6CgyOvCw_QbbQC0XlyKeiqrGnsAywt1xcQCL&_nc_ohc=jy4wkjUp0aYAX9FY3f0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC-qHOh7wq-Yu1clFq9KS9HEC7qszv6Jp7FI50pWGr1WA&oe=65FDE3A7"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Anh Hoàng"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
        <div className="comment">
          <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Anh Hoàng"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/270961679_10159870536636108_2642967668131478092_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh3q-xNXWxiar0n6odMPUnKmwUhI5YCb0qbBSEjlgJvQ9Cwwp_6CgyOvCw_QbbQC0XlyKeiqrGnsAywt1xcQCL&_nc_ohc=jy4wkjUp0aYAX9FY3f0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC-qHOh7wq-Yu1clFq9KS9HEC7qszv6Jp7FI50pWGr1WA&oe=65FDE3A7"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Anh Hoàng"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="h5" color="text.secondary">
                Các boss cưng xỉu, dễ thương lắm luôn, thân thiện với khách. Giá
                nước hạt dẻ quá trời!!!!!
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default CustomerReviews;
