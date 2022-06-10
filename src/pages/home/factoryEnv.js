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

function FactoryEnv(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                style={{ margin: 10, height: 300 }}
                className="device_bg"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FactoryEnv;
