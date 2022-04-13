import React from "react";
import { Image, Space } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../img/xingshen.png";

function FooterDs() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", marginLeft: 50 }}>
      <img
        src={logo}
        className="img_shadow"
        style={{ height: 80, paddingTop: "10px", marginTop: 10 }}
      />
      <div style={{ marginLeft: 50 }}>
        <div style={{ display: "flex" }}>
          <Space size={20}>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() => navigate("/factory/env")}
              >
                工厂环境
              </div>
              <div
                className="foot_menu"
                onClick={() => navigate("/factory/device")}
              >
                设备类型
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "全部分类" } })
                }
              >
                全部分类
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "汽车电子" } })
                }
              >
                汽车电子
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "工业终端" } })
                }
              >
                工业终端
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "民用智能" } })
                }
              >
                民用智能
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "智慧医疗" } })
                }
              >
                智慧医疗
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "物联网" } })
                }
              >
                物联网
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div className="foot_menu" onClick={() => navigate("/about")}>
                公司简介
              </div>
              <div
                className="foot_menu"
                onClick={() => navigate("/contact_us")}
              >
                联系我们
              </div>
            </Space>
          </Space>
          <div
            style={{
              display: "flex",
              height: 100,
              paddingTop: 20,
              marginLeft: 100,
            }}
          >
            <div style={{ height: 100, marginLeft: 20, marginTop: 0 }}>
              <div
                className="font_shadow_3D"
                style={{ color: "white", fontSize: 12 }}
              >
                全国咨询热线: 18069673763
              </div>
              <div
                style={{ color: "white", marginTop: 10, fontSize: 12 }}
                className="font_shadow_3D"
              >
                安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDs;
