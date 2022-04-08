import React from "react";
import { Space, Image } from "antd";
import _img from "../image/img";
import Company from "../about/company";

function Env() {
  return (
    <div style={{ marginTop: 30 }}>
      <Company img={[_img.chanpinanli]} />
      <div style={{ height: 30 }} />
      <strong style={{ fontSize: 24 }}>工厂环境</strong>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div style={{ textAlign: "left", margin: 20 }}>
            <strong style={{ fontSize: 20 }}>前台</strong>
          </div>
          <Space size={"large"} style={{ marginBottom: 20 }}>
            <Image src={_img.qiantai} preview={false} style={{ height: 400 }} />
            <Image
              src={_img.office_bar}
              preview={false}
              style={{ height: 400 }}
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div style={{ textAlign: "left", margin: 20 }}>
            <strong style={{ fontSize: 20 }}>办公室</strong>
          </div>
          <Space size={"large"} style={{ marginBottom: 20 }}>
            <Image src={_img.office} preview={false} style={{ height: 300 }} />
            <Image
              src={_img.office_corner}
              preview={false}
              style={{ height: 300 }}
            />
            <Image
              src={_img.chanxian_office}
              preview={false}
              style={{ height: 300 }}
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div style={{ textAlign: "left", margin: 20 }}>
            <strong style={{ fontSize: 20 }}>SMT车间</strong>
          </div>
          <Space size={"large"} style={{ marginBottom: 20 }}>
            <Image
              src={_img.SMT_chejian}
              preview={false}
              style={{ height: 400 }}
            />
            <Image
              src={_img.SMT_chejian_2}
              preview={false}
              style={{ height: 400 }}
            />
            <Image
              src={_img.SMT_chejian_3}
              preview={false}
              style={{ height: 400 }}
            />
            <Image
              src={_img.SMT_chejian_4}
              preview={false}
              style={{ height: 400 }}
            />
          </Space>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <div
          style={{ marginTop: 20, backgroundColor: "#f1eff0", width: "80%" }}
        >
          <div style={{ textAlign: "left", margin: 20 }}>
            <strong style={{ fontSize: 20 }}>产线</strong>
          </div>
          <Space size={"large"} style={{ marginBottom: 20 }}>
            <Image src={_img.chanxian} preview={false} style={{ width: 400 }} />
            <Image
              src={_img.chanxianzijian}
              preview={false}
              style={{ width: 400 }}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Env;
