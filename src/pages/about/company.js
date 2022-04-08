import React, { useState } from "react";
import { Carousel, Image } from "antd";

const sing_shen = require("../../img/xingshen.jpeg");
const qiantai = require("../../img/qiantai.jpg");
const office = require("../../img/office.jpg");
const office_corner = require("../../img/office_corner.jpg");
const office_bar = require("../../img/office_fore_bar.jpg");
const contentStyle = {
  height: "320px",
  color: "#fff",
  lineHeight: "320px",
  textAlign: "center",
  background: "#364d79",
};

function Company() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Carousel autoplay autoplaySpeed={5000}>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={qiantai}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={office}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={office_corner}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={office_bar}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </h3>
        </div>
      </Carousel>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={qiantai} />
          <Image src={office} />
          <Image src={office_corner} />
          <Image src={office_bar} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Company;
