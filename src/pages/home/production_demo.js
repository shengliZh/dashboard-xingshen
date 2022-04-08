import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#1a338f",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#1a338f",
        paddingTop: "2px",
      }}
      onClick={onClick}
    />
  );
}

function Production_demo(props) {
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
        {props.img.map((p) => {
          return (
            <div>
              <Image
                src={p}
                preview={false}
                style={{ margin: 10, height: 300, width: 200 }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Production_demo;
