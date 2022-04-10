import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Image, Layout, Menu, Space } from "antd";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Production from "./pages/production/production";
import history from "./route/my-history";
import Env from "./pages/factory/env";
import Device from "./pages/factory/device";
import Contact from "./pages/contact-us/contact";
import _img from "./pages/image/img";
import FooterDs from "./pages/footer/footer-ds";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const logo = require("./img/xingshen.png");

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname);
  useEffect(() => {
    const unHistory = history.listen(({ location, action }) => {
      setCurrent(location.pathname);
    });
    return unHistory;
  }, [history]);
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header
        style={{
          position: "fixed",
          width: "100%",
          height: 120,
          zIndex: 100,
          background: "#ebf6fb",
          paddingTop: 0,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%", height: 120 }}>
          <img
            src={logo}
            className="img_shadow"
            style={{
              height: 100,
              paddingTop: 0,
              marginLeft: 50,
              marginTop: 0,
              alignSelf: "center",
            }}
          />
          <strong
            style={{
              color: "#1A338F",
              width: "300px",
              fontSize: 17,
              marginTop: 30,
              marginLeft: -50,
            }}
          >
            安徽兴申科技有限公司
          </strong>
          <Menu
            theme={"light"}
            mode={"horizontal"}
            style={{
              marginRight: 100,
              width: "60%",
              height: 70,
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#ebf6fb",
            }}
            selectedKeys={[current]}
            onClick={(e) => navigate(e.key)}
          >
            <Menu.Item key={"/"}>首页</Menu.Item>
            <SubMenu key={"/factory"} title={"工厂和设备"}>
              <Menu.Item key={"/factory/env"} className="sub_item">
                <div
                  className={
                    current === "/factory/env" ? "sub_item_select" : "sub_item"
                  }
                  style={{
                    marginLeft: -20,
                    marginRight: -20,
                    padding: 10,
                    paddingLeft: 20,
                    marginTop: -10,
                    marginBottom: -10,
                  }}
                >
                  工厂环境
                </div>
              </Menu.Item>
              <Menu.Item key={"/factory/device"} className="sub_item">
                <div
                  className={
                    current === "/factory/device"
                      ? "sub_item_select"
                      : "sub_item"
                  }
                  style={{
                    marginLeft: -20,
                    marginRight: -20,
                    padding: 10,
                    paddingLeft: 20,
                    marginTop: -10,
                    marginBottom: -10,
                  }}
                >
                  设备展示
                </div>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key={"/production"}>产品演示</Menu.Item>
            <Menu.Item key={"/about"}>公司介绍</Menu.Item>
            <Menu.Item key={"/contact_us"}>联系我们</Menu.Item>
          </Menu>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 0,
              marginRight: "5%",
              height: 100,
              paddingTop: 10,
            }}
          >
            <Image
              src={_img.lianxifangshi}
              preview={false}
              className="img_shadow"
            />
            <div style={{ height: 100, marginLeft: 20 }}>
              <div className="font_shadow">全国咨询热线</div>
              <div style={{ marginTop: -30 }} className="font_shadow_3D">
                18069673763
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: 0.5, backgroundColor: "gray" }} />
      </Header>
      <Content
        style={{
          backgroundColor: "#f0f0f0",
          marginTop: 100,
          width: window.innerWidth,
        }}
      >
        <div
          style={{
            background: "#f0f0f0",
            padding: 24,
            paddingTop: 10,
            minHeight: 280,
          }}
          className="App"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/production"} element={<Production />} />
            <Route path={"/factory/env"} element={<Env />} />
            <Route path={"/factory/device"} element={<Device />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact_us"} element={<Contact />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{ textAlign: "center", backgroundColor: "#448ef7", flex: 1 }}
      >
        <div style={{ display: "flex", position: "absolute", left: "5%" }}>
          <img
            src={logo}
            className="img_shadow"
            style={{ height: 80, paddingTop: "10px", marginTop: -3 }}
          />
          <FooterDs />
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: 20,
            backgroundColor: "#1a338f",
            color: "white",
            marginLeft: -200,
            marginRight: -50,
            marginBottom: -40,
            marginTop: 100,
            paddingLeft: 200,
          }}
        >
          版权所有：安徽兴申科技有限公司
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
