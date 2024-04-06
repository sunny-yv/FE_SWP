import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

function CustomerReviews() {
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

  const comments = [
    {
      name: "Huỳnh Vy",
      text: "Mèo vừa xinh xắn vừa dễ thương. Sau ngày làm việc mệt mỏi thì chỉ muốn gặp các 'Hoàng Thượng mãi thoai <3'!",
    },

    {
      name: "MyBabyBoo",
      text: "Mèo này có đôi mắt to tròn, lông mịn, chắc chắn sẽ làm say lòng bất kỳ ai!",
    },
    {
      name: "Ngọc Tâm",
      text: "Mèo quá dễ thương, mỗi lần nhìn vào làm lòng người như tan chảy.",
    },
    {
      name: "Sâu",
      text: "Phải ghé thường xuyên thui <3",
    },
  ];

  const getRandomPastDate = () => {
    const today = new Date();
    const pastDate = new Date(
      today.getTime() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    );
    return pastDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const settings = {
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

  return (
    <div className="sticky-slider" style={{ width: "100%" }}>
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={comment.name}
                    src={`https://source.unsplash.com/50x50/?person&sig=${
                      index + 1
                    }`}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <StarIcon />
                  </IconButton>
                }
                title={comment.name}
                subheader={getRandomPastDate()}
              />
              <Typography variant="h5" color="text.secondary">
                {comment.text}
              </Typography>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerReviews;
