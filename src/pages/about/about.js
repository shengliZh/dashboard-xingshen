import React, { useState } from "react";
import { Menu, Tabs } from "antd";
import "./about.css";
import Introduction from "./introduction";
import Company from "./company";
import Contact from "./contact_us";
import _img from "../image/img";

const { TabPane } = Tabs;

function About() {
  const [current, setCurrent] = useState("1");
  const [currentContent, setCurrentContent] = useState(<Introduction />);
  const currentKey = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "1":
        setCurrentContent(<Introduction />);
        break;
      case "2":
        setCurrentContent(<Contact />);
        break;
      default:
        setCurrentContent(<Introduction />);
        break;
    }
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Company img={[_img.about_us, _img.contact_us]} />
      <div style={{ display: "flex", marginTop: 70, marginLeft: 30 }}>
        <Tabs
          type="card"
          tabPosition={"left"}
          style={{ width: window.innerWidth / 1.2, marginLeft: "10%" }}
        >
          <TabPane tab={<div>公司简介</div>} key="1">
            <Introduction />
          </TabPane>
          <TabPane tab={<div>联系我们</div>} key="2">
            <Contact />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default About;
