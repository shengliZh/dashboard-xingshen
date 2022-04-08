import React, { useState } from "react";
import { Button, Card, Image, Tabs } from "antd";
import Company from "../about/company";
import _img from "../image/img";
import { MoreOutlined } from "@ant-design/icons";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const { TabPane } = Tabs;

function Production_Info(props) {
  const [info, setInfo] = useState({});
  return (
    <div>
      <Card
        title={props.name ?? "汽车电子"}
        style={{
          marginTop: 0,
          backgroundColor: "#f1eff0",
          border: "1px solid #fafafa",
          padding: 20,
        }}
      >
        {props.img.map((p) => {
          return (
            <Card.Grid style={gridStyle}>
              <div style={{ backgroundColor: "#fff", textAlign: "center" }}>
                <Image
                  src={p.src}
                  style={{ height: 300, marginTop: 20 }}
                  preview={false}
                />
                <div
                  style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: "200",
                    color: "#1a338f",
                  }}
                >
                  {p.name ?? "元器件"}
                </div>

                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <div className="title" style={{ flex: "0.98" }} />
                  <div
                    className="more_style"
                    onClick={() => {}}
                    style={{ margin: 10 }}
                  >
                    <MoreOutlined className="more_icon" />
                    MORE
                  </div>
                </div>
              </div>
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
}

export default Production_Info;
