import React from "react";
import Company from "../about/company";
import _img from "../image/img";
import "./business.css";
import { Image } from "antd";
import Right_pic from "./right_pic";
import Left_pic from "./left_pic";

const business_all = [
  {
    index: "1",
    title: "SMT贴片",
    img: _img.SMT_tiepian,
    content:
      "我们拥有3条全自动SMT贴片加工生产线及2条专业的插件流水线，贴片能力达到日产300万点，插件可到10万点，现有员工80人左右，其中管理人员在SMT行业都有5-8年的经验，且有团队对设备快速响应维护，让产能损失降到最低。我们在SMT制程工艺方面可贴装20mm*20mm到420mm*500mm尺寸的PCB，最小封装元件0201。SIEMENS HS60多功能高速贴片机、AOI光学检测仪、八温区回流焊、FAI首件自动测试仪等设备支持产能实现及工艺品质，全流程通过ISO 9001:2015质量管理体系&IATF16949:2016汽车质量管理体系认证，并全面导入ERP管理系统，对整个生产管理、物料流转实施跟踪精确管理。",
  },
  {
    index: "2",
    title: "PCBA代工",
    img: _img.PCBA_daigong,
    content:
      "我们提供的PCBA加工服务，从PCB电路板制作开始，精选PCB厂商，注重电路板的品质和PCBA质量管控体系。由于数十年的电子元器件采购经验，与大型品牌商保持长久合作，确保元器件的原品封装和采购渠道。在元器件的封装过程中，选用千住和ALPHA锡膏，确保焊接的可靠性，配合自动印刷机、SIEMENS全自动高速贴片机、劲拓上下八温区回流焊、AOI自动光学检测仪、FAI自动首件测试仪等，能有效保证电子封装过程中的可靠性和质量。",
  },
  {
    index: "3",
    title: "PCBA质检",
    img: _img.PCBA_zhijian,
    content:
      "由于目前SMT技术的不断成熟，PCBA组装加工过程中的组件变得越来越小，使PCBA具有更强大的功能。同时，也为测试和检验带来了巨大的挑战。测试是确保将高质量PCBA产品交付给客户至关重要的步骤，检验和测试可以减轻加工风险。我司按照IPC外观检验标准进行检验，同时按照国际通用的抽样标准进行允收水准抽检，将风险最大程度控制在公司制程内部。",
  },
  {
    index: "4",
    title: "OEM加工",
    img: _img.OEM_jiagong,
    content:
      "在电子产品OEM代工领域，我们跟大型品牌元器件代理商有长期合作关系，保证来料的质量和货源充足，在SMT贴片和DIP插件环节，使用SIEMENS和三星高速贴片机、劲拓八温区回流焊、确保焊接的可靠性和品质。在整个制造过程中，我们有严格的品质体系来管控，确保问题不会发生，整条产线采用自动上板机--自动印刷机--自动贴片--自动回流炉--自动收板的方式做到全程无接触作业，大大提升了产品生产的一致性。",
  },
  {
    index: "5",
    title: "ODM制造",
    img: _img.ODM_zhizao,
    content:
      "我们拥有3条全自动SMT贴片加工生产线及2条专业的插件流水线，贴片能力达到日产300万点，插件可到10万点，现有员工80人左右，其中管理人员在SMT行业都有5-8年的经验，且有团队对设备快速响应维护，让产能损失降到最低。我们在SMT制程工艺方面可贴装20mm*20mm到420mm*500mm尺寸的PCB，最小封装元件0201。SIEMENS HS60多功能高速贴片机、AOI光学检测仪、八温区回流焊、FAI首件自动测试仪等设备支持产能实现及工艺品质，全流程通过ISO 9001:2015质量管理体系&IATF16949:2016汽车质量管理体系认证，并全面导入ERP管理系统，对整个生产管理、物料流转实施跟踪精确管理。",
  },
];

function Business() {
  return (
    <div style={{ marginBottom: 50 }}>
      <Company img={[_img.yewufanwei]} />
      {business_all.map((p, index) => {
        if (index % 2 === 0) {
          return <Right_pic business={p} key={`${index}`} />;
        }
        return <Left_pic business={p} key={`${index}`} />;
      })}
    </div>
  );
}

export default Business;
