import React from "react";
import Company from "../about/company";
import _img from "../image/img";
import "./business.css";
import RightPic from "./rightPic";
import LeftPic from "./leftPic";

const business_all = [
  {
    index: "1",
    title: "smt_patch_title",
    img: _img.SMT_tiepian,
    content: "smt_patch_content",
  },
  {
    index: "2",
    title: "pcba_processing_title",
    img: _img.PCBA_daigong,
    content: "pcba_processing_content",
  },
  {
    index: "3",
    title: "pcba_quality_inspection_title",
    img: _img.PCBA_zhijian,
    content: "pcba_quality_inspection_content",
  },
  {
    index: "4",
    title: "oem_service_title",
    img: _img.OEM_jiagong,
    content: "oem_service_content",
  },
  {
    index: "5",
    title: "odm_service_title",
    img: _img.ODM_zhizao,
    content: "odm_service_content",
  },
];

function Business() {
  return (
    <div style={{ marginBottom: 50 }}>
      <Company img={[_img.yewufanwei]} />
      {business_all.map((p, index) => {
        if (index % 2 === 0) {
          return <RightPic business={p} key={`${index}`} />;
        }
        return <LeftPic business={p} key={`${index}`} />;
      })}
    </div>
  );
}

export default Business;
