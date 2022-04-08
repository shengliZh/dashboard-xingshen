import React, { useState } from "react";
import { Image } from "antd";
import _img from "../image/img";

const img = [_img.zhengshu1, _img.zhengshu2];

function Honor() {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex", width: "80%", marginLeft: 50 }}>
      {img.map((p) => {
        return (
          <div
            style={{
              padding: 30,
              backgroundColor: "#fff",
              width: "50%",
              marginLeft: 30,
            }}
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
          {img.map((p) => (
            <Image src={p} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Honor;
