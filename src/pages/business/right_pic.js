import React from "react";
import { Image } from "antd";
import _img from "../image/img";

function Right_pic(props) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: props.business.index === "1" ? 0 : "10%",
      }}
    >
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
              paddingLeft: "4%",
              paddingTop: "4%",
              paddingBottom: "4%",
              paddingRight: "13%",
              textAlign: "left",
              lineHeight: "35px",
              width: "70%",
            }}
            className="bg"
          >
            {props.business.content}
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: 60,
              right: "20%",
            }}
          >
            <Image
              src={props.business.img}
              style={{
                width: 300,
              }}
              preview={false}
            />
            <div
              style={{
                position: "absolute",
                marginTop: -160,
                left: "30%",
              }}
            >
              <Image src={_img.company_yy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right_pic;
