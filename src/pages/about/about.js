import React, { useState } from "react";
import { Menu } from "antd";
import "./about.css";
import Introduction from "./introduction";
import Company from "./company";
import Contact from "./contact_us";
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
      <Company />
      <div style={{ display: "flex", marginTop: 20, marginLeft: 30 }}>
        <div style={{ flex: 0.3, textAlign: "center" }}>
          {/*<Image src={sing_shen} style={{ width: 60, marginLeft: 50 }} />*/}
          <h3 style={{ color: "#1e90ff", marginTop: 30, marginLeft: 20 }}>
            关于安徽兴申
          </h3>
          <div>
            <Menu
              style={{ textAlign: "center" }}
              theme={"dark"}
              onClick={currentKey}
              selectedKeys={[current]}
            >
              <Menu.Item key={"1"}>公司简介</Menu.Item>
              <Menu.Item key={"2"}>联系我们</Menu.Item>
            </Menu>
          </div>
        </div>
        <div
          style={{ textAlign: "left", flex: 0.7, padding: 50, fontSize: 16 }}
        >
          {currentContent}
        </div>
      </div>
    </div>
  );
}

export default About;
