import React, { useState } from "react";
import { Steps } from "antd";
import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Map, { MapApiLoaderHOC } from "react-bmapgl/Map";
import ZoomControl from "react-bmapgl/Control/ZoomControl";
import Marker from "react-bmapgl/Overlay/Marker";
import InfoWindow from "react-bmapgl/Overlay/InfoWindow";
import { useSelector } from "react-redux";
import { getIntl } from "../../core/intl";

const { Step } = Steps;

function Contact() {
  const locale = useSelector((state) => state.localeStore.currentLocale);
  const [showPop, setShowPop] = useState(true);
  return (
    <div
      style={{
        marginLeft: 50,
        width: window.innerWidth / 1.6,
        marginRight: 50,
        marginBottom: 50,
      }}
    >
      <div style={{ backgroundColor: "#fff" }} className="about_company">
        <div
          style={{
            fontSize: 22,
            paddingTop: 20,
            color: "#1e90ff",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          {getIntl("menu_contact")}
        </div>
        <div
          style={{
            fontSize: 18,
            textAlign: "right",
            color: "#1e90ff",
            marginRight: 20,
          }}
        >
          Contact Us
        </div>
        <div style={{ backgroundColor: "#1e90ff", height: 1 }} />
        <div
          style={{
            marginTop: 30,
            marginBottom: 20,
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          {getIntl("company_name")}
        </div>
        <Steps direction="vertical" style={{ marginLeft: 20 }}>
          <Step
            icon={<HomeOutlined />}
            title={getIntl("address_title")}
            status={"finish"}
            description={getIntl("address")}
          />
          <Step
            title={getIntl("phone_title")}
            description="0555-2963088"
            status={"finish"}
            icon={<PhoneOutlined />}
          />
          <Step
            title={getIntl("email_title")}
            description="guangrongchen@ttongjd.cn"
            status={"finish"}
            icon={<MailOutlined />}
          />
          <Step
            title={getIntl("cell_phone_title")}
            description="18069673763"
            status={"finish"}
            icon={<PhoneOutlined />}
          />
        </Steps>
      </div>
      <div style={{ marginTop: 20 }} className="about_company">
        <Map
          center={new window.BMapGL.Point(118.352155, 31.624036)}
          zoom={12}
          tilt={40}
        >
          <Marker
            position={new window.BMapGL.Point(118.352155, 31.624036)}
            enableDragging
            isTop={true}
            onClick={() => setShowPop(true)}
          />
          {showPop && (
            <InfoWindow
              position={new window.BMapGL.Point(118.352155, 31.624036)}
              title={getIntl("company_name")}
              onClickclose={(e) => {
                setShowPop(false);
              }}
              width={500}
            >
              <div style={{ color: "#1A338F" }}>
                <div
                  style={{
                    backgroundColor: "#1A338F",
                    height: 1,
                    marginRight: 5,
                    marginBottom: 5,
                    paddingRight: 20,
                  }}
                />
                <strong>{getIntl("address_title")}： </strong>
                {getIntl("address")}
              </div>
            </InfoWindow>
          )}
          <ZoomControl />
        </Map>
      </div>
    </div>
  );
}

export default MapApiLoaderHOC({ ak: "fj4G3E5F0GuAG5dokQtuToCwH9IVBFve" })(
  Contact
);
