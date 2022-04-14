import React, { useState } from "react";
import { Image } from "antd";
import _img from "../image/img";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/home.css";
import { getIntlHtml } from "../../core/intl";

const introduction = [
  _img.qiantai,
  _img.office,
  _img.office_bar,
  _img.office_corner,
];

function Introduction() {
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
    <div
      style={{
        display: "flex",
        width: window.innerWidth / 1.6,
        backgroundColor: "#fff",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 50,
      }}
      className="about_company"
    >
      <Slider
        {...settings}
        style={{ width: 400, margin: 20, marginBottom: 50 }}
      >
        {introduction.map((p, index) => {
          return (
            <div style={{ padding: 20 }} key={`${index}`}>
              <Image
                style={{ height: 400 }}
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
          {introduction.map((p, index) => (
            <Image src={p} key={`${index}`} />
          ))}
        </Image.PreviewGroup>
      </div>
      <div style={{ padding: 30, textAlign: "left" }}>
        {getIntlHtml("about_company_content")}
      </div>
    </div>
  );
}

export default Introduction;
