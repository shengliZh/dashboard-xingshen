import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Company from "../about/company";
import _img from "../image/img";
import Production_Info from "./production_info";
import "./product.css";
import { useLocation } from "react-router-dom";
import { getIntl } from "../../core/intl";

const qiche_product = [
  { src: _img.product_1 },
  { src: _img.product_2 },
  { src: _img.product_3 },
  { src: _img.product_4 },
  { src: _img.product_5 },
  { src: _img.product_6 },
];

const category = [
  { name: "all_categories", img: qiche_product },
  { name: "vehicle_electronics", img: qiche_product },
  { name: "industrial_terminal", img: qiche_product },
  { name: "civil_intelligence", img: qiche_product },
  { name: "smart_healthcare", img: qiche_product },
  { name: "internet_of_things", img: qiche_product },
];

const { TabPane } = Tabs;

function Production(props) {
  let location = useLocation();
  useEffect(() => {
    let server_id = location.state;
    if (server_id) {
      onTabChange(server_id.key);
    }
  }, [location]);
  const [tabKey, setTabKey] = useState("all_categories");
  const onTabChange = (key) => {
    console.log("key: ", key);
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
                    marginTop: index === 0 ? -7 : -20,
                    marginBottom: -10,
                    padding: 20,
                  }}
                  className={tabKey === p.name ? "tab_bar_select" : "tab_bar"}
                >
                  {getIntl(p.name)}
                </div>
              }
              key={p.name}
            >
              <div>
                <Production_Info
                  name={tabKey}
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
