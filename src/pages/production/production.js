import React, { useState } from "react";
import { Tabs } from "antd";
import Company from "../about/company";
import _img from "../image/img";
import Production_Info from "./production_info";
import "./product.css";

const qiche_product = [
  { src: _img.product_1 },
  { src: _img.product_2 },
  { src: _img.product_3 },
  { src: _img.product_4 },
  { src: _img.product_5 },
  { src: _img.product_6 },
];

const category = [
  { name: "全部分类", img: qiche_product },
  { name: "汽车电子", img: qiche_product },
  { name: "工业终端", img: qiche_product },
  { name: "民用智能", img: qiche_product },
  { name: "智慧医疗", img: qiche_product },
  { name: "物联网", img: qiche_product },
];

const { TabPane } = Tabs;

function Production(props) {
  const [tabKey, setTabKey] = useState("0");
  const onTabChange = (key) => {
    setTabKey(key);
  };

  return (
    <div>
      <Company img={[_img.product]} />
      <div style={{ height: 30 }} />
      <Tabs
        type="card"
        tabPosition={"left"}
        style={{ marginLeft: 20 }}
        size={"large"}
        tabBarGutter={30}
        tabBarStyle={{ width: 200 }}
        onChange={onTabChange}
      >
        {category.map((p, index) => {
          return (
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
                  className={
                    tabKey === `${index}` ? "tab_bar_select" : "tab_bar"
                  }
                >
                  {p.name}
                </div>
              }
              key={`${index}`}
            >
              <div style={{ border: "1px solid #fafafa" }}>
                <Production_Info
                  name={p.name}
                  img={[p.img[0], p.img[1], p.img[2]]}
                />
                <Production_Info img={[p.img[3], p.img[4], p.img[5]]} />
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Production;
