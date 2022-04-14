import React, { useState } from "react";
import { Image } from "antd";
import _img from "../image/img";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getIntlHtml } from "../../core/intl";

const introduction = [
  _img.qiantai,
  _img.office,
  _img.office_corner,
  _img.office_bar,
];

function Introduction_Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <Slider {...settings} style={{ width: 500, marginTop: -50 }}>
        {introduction.map((p, index) => {
          return (
            <div key={`${index}`}>
              <Image
                style={{ height: 500, width: 450 }}
                src={p}
                preview={visible}
                onClick={() => setVisible(true)}
              />
            </div>
          );
        })}
      </Slider>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {introduction.map((p, index) => {
            return <Image src={p} key={`${index}`} />;
          })}
        </Image.PreviewGroup>
      </div>
      <div
        style={{
          paddingLeft: 30,
          textAlign: "left",
          fontSize: 17,
          alignSelf: "center",
          marginBottom: 100,
          color: "#fff",
        }}
      >
        {getIntlHtml("about_company_content")}
      </div>
    </div>
  );
}

export default Introduction_Home;
