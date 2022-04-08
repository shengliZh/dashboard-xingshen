import React, { useState } from "react";
import { Card, Image } from "antd";
import Company from "../about/company";
import _img from "../image/img";

const product_1 = require("../../img/product_1.jpg");
const product_2 = require("../../img/product_2.jpg");
const product_3 = require("../../img/product_3.jpg");
const product_4 = require("../../img/product_4.jpg");
const product_5 = require("../../img/product_5.jpg");
const product_6 = require("../../img/product_6.jpg");

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

function Production(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Company img={[_img.product]} />
      <div style={{ height: 30 }} />
      <Card title={props.title ?? "产品演示"} style={{ marginTop: 30 }}>
        <Card.Grid style={gridStyle}>
          <Image
            src={product_1}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={product_2}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {" "}
          <Image
            src={product_3}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {" "}
          <Image
            src={product_4}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {" "}
          <Image
            src={product_5}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {" "}
          <Image
            src={product_6}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
      </Card>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={product_1} />
          <Image src={product_2} />
          <Image src={product_3} />
          <Image src={product_4} />
          <Image src={product_5} />
          <Image src={product_6} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Production;
