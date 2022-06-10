import React from "react";
import Company from "../about/company";
import { useNavigate } from "react-router-dom";
import Introduction from "../about/introductionHome";
import Slider from "../tools/slider/slider";
import { devices } from "../../constant/constant";
import { MoreOutlined } from "@ant-design/icons";
import _img from "../image/img";
import "./home.css";
import FactoryEnv from "./factoryEnv";
import { Tabs } from "antd";
import ProductionDemo from "./productionDemo";
import { getIntl } from "../../core/intl";

const { TabPane } = Tabs;

const factory_env = [
  _img.SMT_chanxian_1,
  _img.SMT_chanxian_2,
  _img.SMT_chejian,
  _img.chanxian_1,
  _img.chanxian_2,
  _img.chanxian_3,
  _img.chanxian_4,
  _img.chanxian_5,
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

const gongye_product = [
  { src: _img.gongyezhongquan_1 },
  { src: _img.gongyezhongquan_2 },
  { src: _img.gongyezhongquan_3 },
  { src: _img.gongyezhongquan_4 },
  { src: _img.gongyezhongquan_1 },
  { src: _img.gongyezhongquan_2 },
  { src: _img.gongyezhongquan_3 },
  { src: _img.gongyezhongquan_4 },
];

const minyong_product = [
  { src: _img.chanpin_1 },
  { src: _img.chanpin_2 },
  { src: _img.chanpin_3 },
  { src: _img.chanpin_4 },
  { src: _img.chanpin_minyongzhineng_1 },
  { src: _img.chanpin_minyongzhineng_2 },
];

const wulianwang_product = [
  { src: _img.chanpin_5 },
  { src: _img.chanpin_6 },
  { src: _img.chanpin_7 },
  { src: _img.chanpin_8 },
  { src: _img.chanpin_9 },
  { src: _img.chanpin_5 },
  { src: _img.chanpin_6 },
  { src: _img.chanpin_7 },
  { src: _img.chanpin_8 },
  { src: _img.chanpin_9 },
];

const category = [
  { name: "vehicle_electronics", img: qiche_product },
  { name: "industrial_terminal", img: gongye_product },
  { name: "civil_intelligence", img: minyong_product },
  { name: "smart_healthcare", img: qiche_product },
  { name: "internet_of_things", img: wulianwang_product },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <Company img={[_img.about_us, _img.yewu]} />
      <div style={{ height: 30 }} />
      <div style={{ backgroundColor: "#1a338f" }} className="about_company">
        <div
          style={{
            fontWeight: "bold",
            marginTop: 50,
            fontSize: 22,
            paddingTop: 20,
            color: "#fff",
          }}
        >
          {getIntl("about_company_title")}
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.43 }} />
          <div
            style={{
              flex: 0.2,
              fontWeight: "bold",
              fontSize: 22,
              color: "#fff",
              textAlign: "right",
            }}
          >
            About Us
          </div>
          <div style={{ flex: 0.4 }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.43 }} />
          <div style={{ flex: 0.2, backgroundColor: "gray", height: 1 }} />
          <div style={{ flex: 0.4 }} />
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ width: "20%" }} />
          <Introduction />
          <div style={{ width: "20%" }} />
        </div>
        <div style={{ height: 50 }} />
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
                    tab={getIntl(p.name)}
                    key={`${index}`}
                    style={{ padding: 30 }}
                  >
                    <ProductionDemo img={p.img.map((p) => p.src)} />
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
              {getIntl("sub_menu_factory")}
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
          <FactoryEnv img={factory_env} />
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
              {getIntl("sub_menu_device")}
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
