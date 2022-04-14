import React from "react";
import { Image, Space } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../img/xingshen.png";
import { getIntl } from "../../core/intl";
import { useSelector } from "react-redux";

function FooterDs() {
  const locale = useSelector((state) => state.localeStore.currentLocale);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", padding: 20 }}>
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
                {getIntl("sub_menu_factory")}
              </div>
              <div
                className="foot_menu"
                onClick={() => navigate("/factory/device")}
              >
                {getIntl("sub_menu_device")}
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "all_categories" } })
                }
              >
                {getIntl("all_categories")}
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "vehicle_electronics" } })
                }
              >
                {getIntl("vehicle_electronics")}
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "industrial_terminal" } })
                }
              >
                {getIntl("industrial_terminal")}
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "civil_intelligence" } })
                }
              >
                {getIntl("civil_intelligence")}
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "smart_healthcare" } })
                }
              >
                {getIntl("smart_healthcare")}
              </div>
              <div
                className="foot_menu"
                onClick={() =>
                  navigate("/production", { state: { key: "internet_of_things" } })
                }
              >
                {getIntl("internet_of_things")}
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div className="foot_menu" onClick={() => navigate("/about")}>
                {getIntl("menu_about")}
              </div>
              <div
                className="foot_menu"
                onClick={() => navigate("/contact_us")}
              >
                {getIntl("menu_contact")}
              </div>
            </Space>
            <Space direction={"vertical"} size={20}>
              <div className="foot_menu" onClick={() => navigate("/business")}>
                {getIntl("menu_business")}
              </div>
              <div
                className="foot_menu"
                onClick={() => navigate("/recruitment")}
              >
                {getIntl("menu_recruitment")}
              </div>
            </Space>
          </Space>
          <div
            style={{
              height: 100,
              paddingTop: 20,
              marginLeft: 50,
              marginRight: 50,
            }}
          >
            {/*<div style={{ height: 100, marginLeft: 20, marginTop: 0 }}>*/}
            <div
              className={locale === "zh-CN" && "font_shadow_3D"}
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: locale === "zh-CN" ? 0 : "bold",
              }}
            >
              {getIntl("support_hotline")}: 18069673763
            </div>
            <div
              style={{
                color: "white",
                marginTop: 10,
                fontSize: 14,
                fontWeight: "bold",
              }}
              className={locale === "zh-CN" && "font_shadow_3D"}
            >
              {getIntl("address")}
            </div>
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDs;
