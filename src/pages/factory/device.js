import React, { useState } from "react";
import { Image, Modal } from "antd";
import { CloseOutlined, MoreOutlined } from "@ant-design/icons";
import { devices } from "../../constant/constant";
import Company from "../about/company";
import _img from "../image/img";
import "./factory.css";
import { getIntl, getIntlHtml } from "../../core/intl";

const device1 = [devices[0], devices[1], devices[2]];
const device2 = [devices[3], devices[4], devices[5]];
const device3 = [devices[6], devices[7], devices[8]];
const device4 = [devices[9], devices[10], devices[11]];
const device5 = [devices[12], devices[13], devices[14]];
const device6 = [devices[15]];
const allDevices = [device1, device2, device3, device4, device5, device6];

function Device() {
  const [visible, setVisible] = useState(false);
  const [info, setInfo] = useState({});

  return (
    <div>
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
      <div style={{ backgroundColor: "#1a338f", padding: 10 }}>
        <strong style={{ fontSize: 24, color: "white" }}>
          {getIntl("sub_menu_device")}
        </strong>
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "10%" }} />
        <div style={{ backgroundColor: "#f1eff0", width: "80%" }}>
          {allDevices.map((device, i) => {
            return (
              <div
                style={{ marginTop: 30, display: "flex" }}
                key={`device${i}`}
              >
                {device.map((p, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        width: "30%",
                        marginLeft: 20,
                      }}
                      className="device_bg"
                      key={`device${i}${index}`}
                    >
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
                        {getIntl(p.name)}
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
                              name: getIntl(p.name),
                              desc: getIntlHtml(p.desc),
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
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Device;
