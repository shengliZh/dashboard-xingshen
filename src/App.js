import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
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
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";
import LocaleResourceLoader from "./core/locale-resource-loader";
import { getIntl } from "./core/intl";

const { Header, Content, Footer } = Layout;

function App() {
  const locale = useSelector((state) => state.localeStore.currentLocale);
  const initDone = useSelector((state) => state.localeStore.initDone);
  LocaleResourceLoader(locale);

  return (
    initDone && (
      <ConfigProvider locale={locale === "en-US" ? enUS : zhCN}>
        <Layout style={{ backgroundColor: "white" }}>
          <Header
            style={{
              position: "fixed",
              width: "100%",
              height: 120,
              zIndex: 100,
              background: "#ebf6fb",
              paddingTop: 0,
            }}
          >
            <CusHeader />
          </Header>
          <Content
            style={{
              backgroundColor: "#f0f0f0",
              marginTop: 100,
              width: "100%",
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
              }}
            >
              {getIntl("copy_right")}：{getIntl("company_name")}
            </div>
          </Footer>
        </Layout>
      </ConfigProvider>
    )
  );
}

export default App;
