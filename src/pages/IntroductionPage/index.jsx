import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomerReviews from "../../components/CustomerReview";
function Introduction() {
  return (
    <div className="introduction">
      <Header />
      <div className="body-top">
        <div className="title-body-top-left">
          <h1>VỀ CHÚNG TÔI</h1>
          <p style={{ fontSize: "25px" }}>
            Donna Coffee - điểm đến thú vị tại TPHCM không chỉ dành cho những ai
            yêu thích cafe mèo, mà còn cho những người muốn trải nghiệm không
            gian độc đáo và ấm cúng của quán.
          </p>
          <br />
          <p style={{ fontSize: "25px" }}>
            Chúng tôi hiểu rằng bạn là một người độc đáo và sành điệu, vì vậy
            chúng tôi mang đến cho bạn một không gian thư giãn và thú vị tại
            cafe mèo của chúng tôi. Tại đây, bạn có thể thưởng thức những ly cà
            phê thơm ngon cùng với những chú mèo đáng yêu, tạo nên một trải
            nghiệm độc đáo và thú vị.
          </p>
          <br />
          <p style={{ fontSize: "25px" }}>
            Hãy ghé thăm Donna Coffee tại TPHCM để tận hưởng không gian ấm áp và
            thư giãn cùng với những chú mèo đáng yêu nhất!
          </p>
        </div>
        <div className="title-body-top-right">
          <img src="../asset/cat1.jpg" alt="" />
        </div>
      </div>

      <div className="body-mid">
        <div className="title-body-mid-left">
          <img src="../asset/cat2.jpg" alt="" />
        </div>
        <div className="title-body-mid-right">
          <h1>TẦM NHÌN VÀ SỨ MỆNH</h1>
          <p style={{ fontSize: "25px" }}>
            Tầm nhìn của cafe mèo Donna Coffee tại TPHCM là tạo ra một không
            gian độc đáo và thân thiện, nơi mọi người có thể tận hưởng cà phê
            ngon và tương tác với những chú mèo đáng yêu.
          </p>
          <br />
          <p style={{ fontSize: "25px" }}>
            Sứ mệnh của chúng tôi là mang lại niềm vui và sự thoải mái cho khách
            hàng thông qua trải nghiệm độc đáo này, đồng thời cũng tạo điều kiện
            cho các chú mèo tìm được mái nhà yêu thương và ấm áp.
          </p>
          <br />
        </div>
      </div>

      <div className="body-bottom">
        <div className="title-body-bottom-left" style={{ width: 1800 }}>
          <h1 style={{ textAlign: "center" }}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
          <CustomerReviews />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Introduction;
