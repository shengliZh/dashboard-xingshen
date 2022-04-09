import React, { useState } from "react";
import { Image } from "antd";
import _img from "../image/img";

const img = [_img.zhengshu1, _img.zhengshu2];

function Honor() {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        width: window.innerWidth / 1.6,
        marginLeft: 50,
      }}
    >
      {img.map((p, index) => {
        return (
          <div
            style={{
              padding: 30,
              backgroundColor: "#fff",
              width: "50%",
              marginLeft: 30,
            }}
            key={`${index}`}
          >
            <Image
              src={p}
              style={{ height: 500, cursor: "pointer" }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </div>
        );
      })}
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {img.map((p, index) => (
            <Image src={p} key={`${index}`} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Honor;
