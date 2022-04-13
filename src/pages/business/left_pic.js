import React from "react";
import { Image } from "antd";
import _img from "../image/img";

function Left_pic(props) {
  return (
    <div style={{ display: "flex", marginTop: "10%" }}>
      <div style={{ flex: 0.15 }} />
      <div style={{ flex: 0.8 }}>
        <div style={{ display: "flex" }}>
          <span className="text_font" style={{ textAlign: "left" }}>
            {props.business.index}
          </span>
          <span
            className="text_font1"
            style={{ textAlign: "left", marginTop: 40, marginLeft: 30 }}
          >
            {props.business.title}
          </span>
          <div
            style={{
              width: 100,
              backgroundColor: "orange",
              height: 2,
              marginTop: 56,
              marginLeft: 30,
            }}
          />
        </div>
        <div style={{ display: "flex", marginTop: 40 }}>
          <div
            style={{
              marginTop: 50,
            }}
          >
            <Image
              src={props.business.img}
              style={{
                width: 300,
                height: 150,
              }}
              preview={false}
            />
            <div
              style={{
                position: "absolute",
                marginTop: -165,
                marginLeft: -15,
              }}
            >
              <Image
                src={_img.company_yy}
                preview={false}
                style={{ width: 30 }}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              lineHeight: "35px",
              marginLeft: -150,
              width: "80%",
              paddingTop: "4%",
              paddingBottom: "4%",
              paddingLeft: 200,
              paddingRight: "4%",
              minHeight: 200,
            }}
            className="bg"
          >
            {props.business.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left_pic;
