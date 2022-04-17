import React, { useState } from "react";
import { Image } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { getIntl } from "../../core/intl";

function Production_Info(props) {
  const [info, setInfo] = useState({});
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
                // textAlign: "center",
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
              {/*<div*/}
              {/*  style={{*/}
              {/*    fontSize: 16,*/}
              {/*    fontWeight: "200",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {getIntl("product_name")}*/}
              {/*</div>*/}
              {/*<div*/}
              {/*  style={{*/}
              {/*    display: "flex",*/}
              {/*    marginBottom: 10,*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <div className="title" style={{ flex: "0.98" }} />*/}
              {/*  <div*/}
              {/*    className="more_style"*/}
              {/*    onClick={() => {}}*/}
              {/*    style={{ margin: 10 }}*/}
              {/*  >*/}
              {/*    <MoreOutlined className="more_icon" />*/}
              {/*    MORE*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Production_Info;
