import React, { useEffect, useState } from "react";
import logo from "../../img/xingshen.png";
import { Image, Menu, Select } from "antd";
import _img from "../image/img";
import { useLocation, useNavigate } from "react-router-dom";
import history from "../../route/my-history";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLocale } from "../../action/localeAction";
import { getIntl } from "../../core/intl";

const { SubMenu } = Menu;
const { Option } = Select;

function Header(props) {
  const locale = useSelector((state) => state.localeStore.currentLocale);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname);
  const onLocaleChange = (value) => {
    dispatch(changeLocale(value));
  };
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
            marginLeft: 20,
          }}
        />
        <strong
          style={{
            color: "#1A338F",
            fontSize: 14,
            marginTop: 47,
          }}
        >
          {getIntl("company_name")}
        </strong>
        <Menu
          theme={"light"}
          mode={"horizontal"}
          className="menu_style"
          selectedKeys={[current]}
          onClick={(e) => navigate(e.key)}
        >
          <Menu.Item key={"/"} style={{ padding: 0, margin: 0 }}>
            <div
              className={current === "/" ? "sub_item_select" : "menu_item"}
              style={{ paddingLeft: 24, paddingRight: 24 }}
            >
              {getIntl("menu_home")}
            </div>
          </Menu.Item>
          <SubMenu
            key={"/factory"}
            title={
              <div
                className={
                  current.includes("/factory") ? "sub_item_select" : "menu_item"
                }
              >
                {getIntl("menu_factory_device")}
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
                {getIntl("sub_menu_factory")}
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
                {getIntl("sub_menu_device")}
              </div>
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key={"/production"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              className={
                current === "/production" ? "sub_item_select" : "menu_item"
              }
            >
              {getIntl("menu_product")}
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/business"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              className={
                current === "/business" ? "sub_item_select" : "menu_item"
              }
            >
              {getIntl("menu_business")}
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/about"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              className={current === "/about" ? "sub_item_select" : "menu_item"}
            >
              {getIntl("menu_about")}
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/recruitment"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              className={
                current === "/recruitment" ? "sub_item_select" : "menu_item"
              }
            >
              {getIntl("menu_recruitment")}
            </div>
          </Menu.Item>
          <Menu.Item
            key={"/contact_us"}
            style={{ padding: 0, margin: 0, marginLeft: 10 }}
          >
            <div
              className={
                current === "/contact_us" ? "sub_item_select" : "menu_item"
              }
            >
              {getIntl("menu_contact")}
            </div>
          </Menu.Item>
        </Menu>
        <div
          style={{
            display: "flex",
            right: 0,
            height: 100,
            paddingTop: 10,
            marginLeft: 20,
          }}
        >
          <div style={{ marginRight: 20, marginTop: 30 }}>
            <Select
              size={"large"}
              style={{ width: 150 }}
              value={locale}
              onChange={onLocaleChange}
            >
              <Option value={"zh-CN"}>简体中文</Option>
              <Option value={"en-US"}>English</Option>
            </Select>
          </div>
          {/*<Image*/}
          {/*  src={_img.lianxifangshi}*/}
          {/*  preview={false}*/}
          {/*  className="img_shadow"*/}
          {/*/>*/}
          {/*<div style={{ height: 100, marginLeft: 20 }}>*/}
          {/*  <div className="font_shadow" style={{ fontSize: 16 }}>*/}
          {/*    {getIntl("support_hotline")}*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className="font_shadow_3D"*/}
          {/*    style={{ marginTop: -30, fontSize: 16 }}*/}
          {/*  >*/}
          {/*    18069673763*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div style={{ height: 3, backgroundColor: "#1a338f" }} />
    </div>
  );
}

export default Header;
