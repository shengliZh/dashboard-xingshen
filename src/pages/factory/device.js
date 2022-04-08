import React, { useState } from "react";
import { Button, Card, Image, Modal } from "antd";
import {
  ArrowRightOutlined,
  CloseOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { devices } from "../../constant/constant";
import Company from "../about/company";
import _img from "../image/img";

const gridStyle = {
  width: "33%",
  textAlign: "center",
};

function Device() {
  const [visible, setVisible] = useState(false);
  const [info, setInfo] = useState({});

  return (
    <div style={{ marginTop: 30 }}>
      <Modal
        title={info.name}
        centered
        closeIcon={<CloseOutlined onClick={() => setVisible(false)} />}
        visible={visible}
        width={"70%"}
        footer={null}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "40%",
              display: "inline",
              textAlign: "center",
              height: 500,
            }}
          >
            <Image
              src={info.src}
              style={{
                width: "96%",
                height: 400,
                marginTop: 20,
                marginBottom: 20,
              }}
              preview={false}
            />
          </div>
          <div
            style={{
              width: "60%",
              height: 500,
              display: "inline",
              textAlign: "center",
            }}
          >
            <div style={{ textAlign: "left", marginLeft: 50 }}>{info.desc}</div>
            {info.param && (
              <Image
                src={info.param}
                style={{ height: 300, marginTop: 20, marginBottom: 20 }}
                preview={false}
              />
            )}
          </div>
        </div>
      </Modal>
      <Company img={[_img.shebeijieshao]} />
      <div style={{ height: 30 }} />
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "10%" }} />
        <Card
          style={{ marginTop: 30, backgroundColor: "#f1eff0", width: "80%" }}
          title={<strong style={{ fontSize: 24 }}>设备展示</strong>}
        >
          {devices.map((p) => {
            return (
              <Card.Grid style={gridStyle}>
                <div style={{ backgroundColor: "#fff", textAlign: "center" }}>
                  <Image
                    src={p.src}
                    style={{ height: 300, marginTop: 20, marginBottom: 20 }}
                    preview={false}
                  />
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "200",
                    }}
                  >
                    {p.name}
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
                      onClick={() => {
                        setInfo({
                          name: p.name,
                          desc: p.desc,
                          src: p.src,
                          param: p.param,
                        });
                        setVisible(true);
                      }}
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
    </div>
  );
}

export default Device;
