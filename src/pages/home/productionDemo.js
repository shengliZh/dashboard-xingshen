import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductionDemo(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Slider {...settings}>
        {props.img.map((p, index) => {
          return (
            <div key={`${index}`}>
              <Image
                src={p}
                preview={false}
                style={{ margin: 10, height: 300, width: 200 }}
                className="device_bg"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductionDemo;
