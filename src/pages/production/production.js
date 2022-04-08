import React, { useState } from "react";
import { Tabs } from "antd";
import Company from "../about/company";
import _img from "../image/img";
import Production_Info from "./production_info";

const qiche_product = [
  { src: _img.product_1 },
  { src: _img.product_2 },
  { src: _img.product_3 },
  { src: _img.product_4 },
  { src: _img.product_5 },
  { src: _img.product_6 },
];

const category = [
  { name: "汽车电子", img: qiche_product },
  { name: "工业终端", img: qiche_product },
  { name: "民用智能", img: qiche_product },
  { name: "智慧医疗", img: qiche_product },
];

const { TabPane } = Tabs;

function Production(props) {
  return (
    <div>
      <Company img={[_img.product]} />
      <div style={{ height: 30 }} />
      <Tabs type="card" tabPosition={"left"} style={{ marginLeft: 20 }}>
        {category.map((p, index) => {
          return (
            <TabPane tab={p.name} key={`${index}`}>
              <Production_Info name={p.name} img={p.img} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Production;
