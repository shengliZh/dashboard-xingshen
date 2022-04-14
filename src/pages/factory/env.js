import React from "react";
import { Space, Image } from "antd";
import _img from "../image/img";
import Company from "../about/company";
import "./factory.css";
import { getIntl } from "../../core/intl";

function Env() {
  return (
    <div>
      <Company img={[_img.chanpinanli]} />
      <div style={{ height: 30 }} />
      <div style={{ backgroundColor: "#f0fafa", padding: 10 }}>
        <strong style={{ fontSize: 24 }}>{getIntl("sub_menu_factory")}</strong>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div
            style={{
              textAlign: "left",
              margin: 20,
              backgroundColor: "#1a338f",
              padding: 10,
            }}
          >
            <strong style={{ fontSize: 20, color: "white" }}>
              {getIntl("reception")}
            </strong>
          </div>
          <Space size={100} style={{ marginBottom: 20 }}>
            <Image
              src={_img.qiantai}
              preview={false}
              style={{ height: 400, width: "80%" }}
              className="device_bg"
            />
            <Image
              src={_img.office_bar}
              preview={false}
              style={{ height: 400, width: "80%" }}
              className="device_bg"
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div
            style={{
              textAlign: "left",
              margin: 20,
              backgroundColor: "#1a338f",
              padding: 10,
            }}
          >
            <strong style={{ fontSize: 20, color: "white" }}>
              {getIntl("office")}
            </strong>
          </div>
          <Space size={50} style={{ marginBottom: 20 }}>
            <Image
              src={_img.office}
              preview={false}
              style={{ height: 300 }}
              className="device_bg"
            />
            <Image
              src={_img.office_corner}
              preview={false}
              style={{ height: 300 }}
              className="device_bg"
            />
            <Image
              src={_img.chanxian_office}
              preview={false}
              style={{ height: 300 }}
              className="device_bg"
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div
            style={{
              textAlign: "left",
              margin: 20,
              backgroundColor: "#1a338f",
              padding: 10,
            }}
          >
            <strong style={{ fontSize: 20, color: "white" }}>
              {getIntl("smt_work_shop")}
            </strong>
          </div>
          <Space size={50} style={{ marginBottom: 20 }}>
            <Image
              src={_img.SMT_chejian}
              preview={false}
              style={{ height: 380 }}
              className="device_bg"
            />
            <Image
              src={_img.SMT_chejian_2}
              preview={false}
              style={{ height: 380 }}
              className="device_bg"
            />
            <Image
              src={_img.SMT_chejian_3}
              preview={false}
              style={{ height: 380 }}
              className="device_bg"
            />
            <Image
              src={_img.SMT_chejian_4}
              preview={false}
              style={{ height: 380 }}
              className="device_bg"
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div
            style={{
              textAlign: "left",
              margin: 20,
              backgroundColor: "#1a338f",
              padding: 10,
            }}
          >
            <strong style={{ fontSize: 20, color: "white" }}>
              {getIntl("production_line")}
            </strong>
          </div>
          <Space size={200} style={{ marginBottom: 20 }}>
            <Image
              src={_img.chanxian}
              preview={false}
              style={{ width: 380 }}
              className="device_bg"
            />
            <Image
              src={_img.chanxianzijian}
              preview={false}
              style={{ width: 380 }}
              className="device_bg"
            />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Env;
