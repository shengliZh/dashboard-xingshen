import React, { useState } from "react";
import { Tabs } from "antd";
import "./about.css";
import Introduction from "./introduction";
import Company from "./company";
import Contact from "./contactUs";
import Honor from "./honor";
import _img from "../image/img";
import "../production/product.css";
import { getIntl } from "../../core/intl";

const { TabPane } = Tabs;

function About() {
  const [tabKey, setTabKey] = useState("0");
  const onTabChange = (key) => {
    setTabKey(key);
  };
  return (
    <div>
      <Company img={[_img.about_us, _img.contact_us]} />
      <div style={{ display: "flex", marginTop: 70, marginLeft: 30 }}>
        <Tabs
          type="card"
          tabPosition={"left"}
          style={{ marginLeft: 20 }}
          size={"large"}
          tabBarGutter={30}
          tabBarStyle={{ width: 200 }}
          onChange={onTabChange}
        >
          <TabPane
            tab={
              <div
                style={{
                  width: 200,
                  marginLeft: -15,
                  marginTop: -10,
                  marginBottom: -10,
                  padding: 20,
                }}
                className={tabKey === "0" ? "tab_bar_select" : "tab_bar"}
              >
                {getIntl("menu_about")}
              </div>
            }
            key="0"
          >
            <Introduction />
          </TabPane>
          <TabPane
            tab={
              <div
                style={{
                  width: 200,
                  marginLeft: -15,
                  marginTop: -10,
                  marginBottom: -10,
                  padding: 20,
                }}
                className={tabKey === "1" ? "tab_bar_select" : "tab_bar"}
              >
                {getIntl("menu_contact")}
              </div>
            }
            key="1"
          >
            <Contact />
          </TabPane>
          <TabPane
            tab={
              <div
                style={{
                  width: 200,
                  marginLeft: -15,
                  marginTop: -10,
                  marginBottom: -10,
                  padding: 20,
                }}
                className={tabKey === "2" ? "tab_bar_select" : "tab_bar"}
              >
                {getIntl("honor")}
              </div>
            }
            key="2"
          >
            <Honor />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default About;
