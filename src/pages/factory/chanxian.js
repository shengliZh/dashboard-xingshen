import React, { useState } from "react";
import { Card, Image } from "antd";

const chanxian = require("../../img/chanxian.jpg");
const chanxianzijian = require("../../img/chanxianzijian.jpg");
const chanxian_office = require("../../img/chejian_office.jpg");
const chejiantongdao = require("../../img/chejiantongdao.jpg");
const SMT_chejian = require("../../img/SMT_chejian.jpg");
const SMT_chejian_2 = require("../../img/SMT_chejian_2.jpg");
const SMT_chejian_3 = require("../../img/SMT_chejian_3.jpg");
const SMT_chejian_4 = require("../../img/SMT_chejian_4.jpg");

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

function Chanxian(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Card title={props.title} style={{ marginTop: 30 }}>
        <Card.Grid style={gridStyle}>
          <Image
            src={chanxian}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={chanxianzijian}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={chanxian_office}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={chejiantongdao}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={SMT_chejian}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={SMT_chejian_2}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={SMT_chejian_3}
            style={{ height: 300 }}
            preview={visible}
            onClick={() => setVisible(true)}
          />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Image
            src={SMT_chejian_4}
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
          <Image src={chanxian} />
          <Image src={chanxianzijian} />
          <Image src={chanxian_office} />
          <Image src={chejiantongdao} />
          <Image src={SMT_chejian} />
          <Image src={SMT_chejian_2} />
          <Image src={SMT_chejian_3} />
          <Image src={SMT_chejian_4} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Chanxian;
