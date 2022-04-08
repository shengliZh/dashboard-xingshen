import React from "react";
import Company from "../about/company";
import Production from "../production/production";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Chanxian from "../factory/chanxian";
import Introduction from "../about/introduction_home";
import Slider from "../tools/slider/slider";
import { devices } from "../../constant/constant";
import { MoreOutlined } from "@ant-design/icons";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      {/*<Company />*/}
      {/*<div style={{ height: 30 }} />*/}
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
      <Production title={"产品"} />
      <Button
        type="primary"
        shape="round"
        style={{ marginTop: 30 }}
        onClick={() => {
          navigate("/production");
        }}
      >
        查看更多 <ArrowRightOutlined />
      </Button>
      <div style={{ height: 30 }} />
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
