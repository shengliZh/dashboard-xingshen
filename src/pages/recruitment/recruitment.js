import React, { useState } from "react";
import Company from "../about/company";
import _img from "../image/img";
import { Tabs } from "antd";
import Recruitment_info from "./recruitment_info";

const { TabPane } = Tabs;
function Recruitment() {
  const [tabKey, setTabKey] = useState("1");
  const onTabChange = (key) => {
    setTabKey(key);
  };
  return (
    <div>
      <Company img={[_img.rencaizhaopin]} />
      {/*<Contact_us />*/}
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
                className={tabKey === "1" ? "tab_bar_select" : "tab_bar"}
              >
                人才招聘
              </div>
            }
            key="1"
          >
            <Recruitment_info />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Recruitment;