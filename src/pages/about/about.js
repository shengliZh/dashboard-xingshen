import React, { useState } from "react";
import { Image, Menu, Tabs } from "antd";
import "./about.css";
import Introduction from "./introduction";
import Company from "./company";
import Contact from "./contact_us";
import Honor from "./honor";
import _img from "../image/img";

const { TabPane } = Tabs;

function About() {
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
          <TabPane tab={<div>荣誉资质</div>} key="3">
            <Honor />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default About;
