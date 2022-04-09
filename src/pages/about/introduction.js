import React, { useState } from "react";
import { Image } from "antd";
import _img from "../image/img";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const introduction = [
  _img.qiantai,
  _img.office,
  _img.office_bar,
  _img.office_corner,
];

function Introduction() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        width: window.innerWidth / 1.6,
        backgroundColor: "#fff",
        marginLeft: 50,
      }}
    >
      <Slider
        {...settings}
        style={{ width: 400, margin: 20, marginBottom: 50 }}
      >
        {introduction.map((p, index) => {
          return (
            <div style={{ padding: 20 }} key={`${index}`}>
              <Image
                style={{ height: 400 }}
                src={p}
                preview={visible}
                onClick={() => setVisible(true)}
              />
            </div>
          );
        })}
      </Slider>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {introduction.map((p, index) => (
            <Image src={p} key={`${index}`} />
          ))}
        </Image.PreviewGroup>
      </div>
      <div style={{ padding: 30, textAlign: "left" }}>
        安徽兴申科技有限公司成立于2021年，是一家专业PCB设计，PCB生产，元器件采购，SMT贴片加工，产品组装测试，致力于为客户提供样品，中小批量，量产一站式电子制造服务的政府扶持企业。公司的服务客户遍及各行业的知名大型企业，且正在通过优良的性价比获得越来越多的客户青睐。
        <br />
        <br />
        公司主要服务领域有：新能源汽车、工业控制、信息通讯、物联网、医疗设备、智能家居、智能仪表、航天军工等行业。公司专业的工厂由SAP系统保障成本、计划；由MES系统保障生产、品质、追溯；以行业最高标准IPC610A的三级标准作为产品的生产标准；并有ISO9001及IATF16949体系进行保驾护航。
        <br />
        <br />
        公司依托于安徽省重点开发区马鞍山市郑蒲港新区现代产业园区，是园区的标杆企业。
      </div>
    </div>
  );
}

export default Introduction;
