import React, { useState } from "react";
import { Card, Image } from "antd";

const device = require("../../img/device.jpg");
const device_1 = require("../../img/device_1.jpg");
const device_2 = require("../../img/device_2.jpg");
const device_3 = require("../../img/device_3.jpg");
const device_4 = require("../../img/device_4.jpg");
const device_5 = require("../../img/device_5.jpg");
const device_6 = require("../../img/device_6.jpg");
const device_7 = require("../../img/device_7.jpg");

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

function Device() {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "10%" }} />
      <div style={{ width: "80%" }}>
        <Card
          title={
            <div style={{ fontSize: 24, fontWeight: "bold" }}>车间设备</div>
          }
          style={{ marginTop: 30, backgroundColor: "#f1eff0" }}
        >
          <Card.Grid style={gridStyle}>
            <Image
              src={device}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_1}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_2}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_3}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_4}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_5}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_6}
              style={{ height: 300 }}
              preview={visible}
              onClick={() => setVisible(true)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Image
              src={device_7}
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
            <Image src={device} />
            <Image src={device_1} />
            <Image src={device_2} />
            <Image src={device_3} />
            <Image src={device_4} />
            <Image src={device_5} />
            <Image src={device_6} />
            <Image src={device_7} />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
}

export default Device;
