import React from "react";
import { Image } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Company(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.img.map((p, index) => {
          return (
            <div key={`${index}`}>
              <Image
                src={p}
                preview={false}
                style={{ margin: 10, height: 300, width: window.innerWidth }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Company;
