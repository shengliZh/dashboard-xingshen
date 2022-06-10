import React from "react";
import { Image } from "antd";
import { getIntl } from "../../core/intl";

function ProductionInfo(props) {
  return (
    <div>
      {props.name && (
        <div
          style={{
            textAlign: "left",
            margin: 20,
            backgroundColor: "#1a338f",
            padding: 10,
          }}
        >
          <strong style={{ fontSize: 20, color: "white" }}>
            {getIntl(props.name)}
          </strong>
        </div>
      )}
      <div
        style={{
          marginTop: 0,
          padding: 20,
          display: "flex",
          // justifyContent: "center",
        }}
      >
        {props.img.map((p) => {
          return (
            <div
              style={{
                width: "26%",
                margin: 20,
              }}
              className="device_bg"
              key={`${p.name}${Math.random()}`}
            >
              <Image
                src={p.src}
                style={{ height: 300, marginTop: 20, marginBottom: 20 }}
                preview={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductionInfo;
