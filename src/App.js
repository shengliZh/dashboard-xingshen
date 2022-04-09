import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import moment from "moment";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Production from "./pages/production/production";
import history from "./route/my-history";
import Env from "./pages/factory/env";
import Device from "./pages/factory/device";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const logo = require("./img/xingshen.jpeg");

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
          height: 100,
          zIndex: 100,
          background: "#fff",
          paddingTop: 0,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%", height: 100 }}>
          <img
            src={logo}
            style={{
              height: 100,
              paddingTop: 7,
              marginLeft: 50,
              alignSelf: "center",
            }}
            // className="App-logo"
          />
          <strong
            style={{
              color: "#1A338F",
              width: "300px",
              fontSize: 17,
              marginTop: 20,
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
            }}
            selectedKeys={[current]}
            onClick={(e) => navigate(e.key)}
          >
            <Menu.Item key={"/"}>首页</Menu.Item>
            <SubMenu key={"/factory"} title={"工厂和设备"}>
              <Menu.Item key={"/factory/env"} className="sub_item">
                工厂环境
              </Menu.Item>
              <Menu.Item key={"/factory/device"} className="sub_item">
                设备展示
              </Menu.Item>
            </SubMenu>
            <Menu.Item key={"/production"}>产品演示</Menu.Item>
            <Menu.Item key={"/about"}>公司介绍</Menu.Item>
          </Menu>
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
          </Routes>
        </div>
      </Content>
      <Footer
        style={{ textAlign: "center", backgroundColor: "white", flex: 1 }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} style={{ height: 60, paddingTop: "20px" }} />
          <div style={{ textAlign: "center", paddingTop: 30, marginLeft: 20 }}>
            © {moment().format("YYYY")} 安徽兴申科技有限公司
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
