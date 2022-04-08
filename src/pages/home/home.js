import React from "react";
import Company from "../about/company";
import { useNavigate } from "react-router-dom";
import Introduction from "../about/introduction_home";
import Slider from "../tools/slider/slider";
import { devices } from "../../constant/constant";
import { MoreOutlined } from "@ant-design/icons";
import _img from "../image/img";
import "./home.css";
import Factory_env from "./factory_env";
import { Tabs } from "antd";
import Production_demo from "./production_demo";

const { TabPane } = Tabs;

const factory_env = [
  _img.SMT_chejian,
  _img.SMT_chejian_2,
  _img.SMT_chejian_3,
  _img.SMT_chejian_4,
  _img.chanxian,
  _img.chanxianzijian,
];

const qiche_product = [
  { src: _img.product_1 },
  { src: _img.product_2 },
  { src: _img.product_3 },
  { src: _img.product_4 },
  { src: _img.product_5 },
  { src: _img.product_6 },
];

const zhihui_product = [
  { src: _img.SMT_chejian },
  { src: _img.SMT_chejian_2 },
  { src: _img.SMT_chejian_3 },
  { src: _img.SMT_chejian_4 },
  { src: _img.chanxian },
  { src: _img.chanxianzijian },
];

const category = [
  { name: "汽车电子", img: qiche_product },
  { name: "工业终端", img: qiche_product },
  { name: "民用智能", img: qiche_product },
  { name: "智慧医疗", img: zhihui_product },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <Company img={[_img.about_us, _img.yewu]} />
      <div style={{ height: 30 }} />
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <div
          style={{
            fontWeight: "bold",
            marginTop: 50,
            fontSize: 22,
            paddingTop: 20,
            color: "#1a338f",
          }}
        >
          关于安微兴申
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.4 }} />
          <div
            style={{
              flex: 0.2,
              fontWeight: "bold",
              fontSize: 22,
              color: "#1a338f",
              textAlign: "right",
            }}
          >
            About Us
          </div>
          <div style={{ flex: 0.4 }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.4 }} />
          <div style={{ flex: 0.2, backgroundColor: "gray", height: 1 }} />
          <div style={{ flex: 0.4 }} />
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ width: "20%" }} />
          <Introduction />
          <div style={{ width: "20%" }} />
        </div>
      </div>
      <div style={{ height: 30 }} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }} />
        <div
          style={{
            flex: "0.8",
            border: "2px solid #f0f0f0",
            width: 200,
          }}
        >
          <div
            style={{
              backgroundColor: "#fafafa",
              display: "flex",
              marginBottom: 10,
              width: "100%",
            }}
          >
            <Tabs type="card" tabPosition={"top"}>
              {category.map((p, index) => {
                return (
                  <TabPane
                    tab={p.name}
                    key={`${index}`}
                    style={{ padding: 30 }}
                  >
                    <Production_demo img={p.img.map((p) => p.src)} />
                  </TabPane>
                );
              })}
            </Tabs>
            <div
              className="more_style"
              onClick={() => {
                navigate("/production");
              }}
              style={{ width: 200, position: "absolute", right: "8%" }}
            >
              <MoreOutlined className="more_icon" />
              MORE
            </div>
          </div>
          {/*<Factory_env img={qiche_product.map((p) => p.src)} />*/}
        </div>
      </div>
      <div style={{ height: 80 }} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }} />
        <div
          style={{
            flex: "0.8",
            border: "2px solid #f0f0f0",
            width: 200,
          }}
        >
          <div
            style={{
              backgroundColor: "#fafafa",
              display: "flex",
              marginBottom: 10,
            }}
          >
            <div className="title" style={{ flex: "0.98" }}>
              工厂环境
            </div>
            <div
              className="more_style"
              onClick={() => {
                navigate("/factory/env");
              }}
            >
              <MoreOutlined className="more_icon" />
              MORE
            </div>
          </div>
          <Factory_env img={factory_env} />
        </div>
      </div>
      <div style={{ height: "100px" }} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }} />
        <div
          style={{
            flex: 0.8,
            border: "2px solid #f0f0f0",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div style={{ backgroundColor: "#fafafa", display: "flex" }}>
            <div className="title" style={{ flex: "0.98" }}>
              设备展示
            </div>
            <div
              className="more_style"
              onClick={() => {
                navigate("/factory/device");
              }}
            >
              <MoreOutlined className="more_icon" />
              MORE
            </div>
          </div>
          <Slider img={devices} navigate={"/factory/device"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
