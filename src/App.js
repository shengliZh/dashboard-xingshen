import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Image, Layout, Menu, Space } from "antd";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Production from "./pages/production/production";
import Env from "./pages/factory/env";
import Device from "./pages/factory/device";
import Contact from "./pages/contact-us/contact";
import FooterDs from "./pages/footer/footer-ds";
import CusHeader from "./pages/header/header";
import Recruitment from "./pages/recruitment/recruitment";
import Business from "./pages/business/business";

const { Header, Content, Footer } = Layout;
const logo = require("./img/xingshen.png");

function App() {
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
        <CusHeader />
      </Header>
      <Content
        style={{
          backgroundColor: "#f0f0f0",
          marginTop: 100,
          width: '100%'
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
            <Route path={"/business"} element={<Business />} />
            <Route path={"/recruitment"} element={<Recruitment />} />
            <Route path={"/contact_us"} element={<Contact />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#448ef7",
          flex: 1,
          padding: 0,
        }}
      >
        <FooterDs />
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: 20,
            backgroundColor: "#1a338f",
            color: "white",
            marginTop: 100,
          }}
        >
          版权所有：安徽兴申科技有限公司
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
