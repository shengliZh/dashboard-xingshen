import React, { useEffect, useState } from "react";
import logo from "../../img/xingshen.png";
import { Image, Menu } from "antd";
import _img from "../image/img";
import { useLocation, useNavigate } from "react-router-dom";
import history from "../../route/my-history";

const { SubMenu } = Menu;

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname);
  useEffect(() => {
    const unHistory = history.listen(({ location, action }) => {
      setCurrent(location.pathname);
    });
    return unHistory;
  }, [history]);
  return (
    <div>
      <div style={{ display: "flex", width: "100%", height: 100 }}>
        <img
          src={logo}
          style={{
            height: 90,
            width: 70,
            paddingTop: 20,
            marginTop: 0,
            alignSelf: "center",
          }}
        />
        <strong
          style={{
            color: "#1A338F",
            fontSize: 14,
              marginTop: 47
          }}
        >
          安徽兴申科技有限公司
        </strong>
        <Menu
          theme={"light"}
          mode={"horizontal"}
          style={{
            height: 70,
            marginTop: 30,
            marginLeft: 30,
            backgroundColor: "#ebf6fb",
            borderTop: "1px solid #1a338f",
            borderLeft: "1px solid #1a338f",
            borderRight: "1px solid #1a338f",
          }}
          selectedKeys={[current]}
          onClick={(e) => navigate(e.key)}
        >
          <Menu.Item key={"/"} style={{ padding: 0, margin: 0 }}>
            <div
              style={{
                padding: 20,
                paddingTop: 0,
                paddingBottom: 10,
                textAlign: "center",
                height: 69,
                fontSize: 14,
                borderBottomColor: "#1a338f",
              }}
              className={current === "/" ? "sub_item_select" : "menu_item"}
            >
              首页
            </div>
          </Menu.Item>
          <SubMenu
            key={"/factory"}
            title={
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  height: 69,
                  fontSize: 14,
                }}
                className={
                  current.includes("/factory") ? "sub_item_select" : "menu_item"
                }
              >
                工厂和设备
              </div>
            }
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <Menu.Item key={"/factory/env"}>
              <div
                className={
                  current === "/factory/env" ? "sub_item_select" : "sub_item"
                }
                style={{
                  marginLeft: -20,
                  marginRight: -20,
                  padding: 10,
                  paddingLeft: 20,
                  marginTop: -10,
                  marginBottom: -10,
                  fontSize: 14,
                }}
              >
                工厂环境
              </div>
            </Menu.Item>
            <Menu.Item key={"/factory/device"}>
              <div
                className={
                  current === "/factory/device" ? "sub_item_select" : "sub_item"
                }
                style={{
                  marginLeft: -20,
                  marginRight: -20,
                  padding: 10,
                  paddingLeft: 20,
                  marginTop: -10,
                  marginBottom: -10,
                  fontSize: 14,
                }}
              >
                设备展示
              </div>
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key={"/production"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              style={{
                padding: 10,
                paddingTop: 0,
                textAlign: "center",
                height: 69,
                fontSize: 14,
              }}
              className={
                current === "/production" ? "sub_item_select" : "menu_item"
              }
            >
              产品演示
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/business"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              style={{
                padding: 10,
                paddingTop: 0,
                textAlign: "center",
                height: 69,
                fontSize: 14,
              }}
              className={
                current === "/business" ? "sub_item_select" : "menu_item"
              }
            >
              业务范围
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/about"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              style={{
                padding: 10,
                paddingTop: 0,
                textAlign: "center",
                height: 69,
                fontSize: 14,
              }}
              className={current === "/about" ? "sub_item_select" : "menu_item"}
            >
              公司介绍
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/recruitment"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              style={{
                padding: 10,
                paddingTop: 0,
                textAlign: "center",
                height: 69,
                fontSize: 14,
              }}
              className={
                current === "/recruitment" ? "sub_item_select" : "menu_item"
              }
            >
              人才招聘
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/contact_us"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              style={{
                padding: 10,
                paddingTop: 0,
                textAlign: "center",
                height: 69,
              }}
              className={
                current === "/contact_us" ? "sub_item_select" : "menu_item"
              }
            >
              联系我们
            </div>
          </Menu.Item>
        </Menu>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 0,
            marginRight: "5%",
            height: 100,
            paddingTop: 10,
          }}
        >
          <Image
            src={_img.lianxifangshi}
            preview={false}
            className="img_shadow"
          />
          <div style={{ height: 100, marginLeft: 20 }}>
            <div className="font_shadow" style={{ fontSize: 16 }}>
              全国咨询热线
            </div>
            <div
              className="font_shadow_3D"
              style={{ marginTop: -30, fontSize: 16 }}
            >
              18069673763
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 1, backgroundColor: "#1a338f" }} />
    </div>
  );
}

export default Header;
