import React, { useState } from "react";
import _ from "lodash";
import "./recruitment.css";
import { getIntl, getIntlHtml } from "../../core/intl";

const title = [
  "recruitment_job",
  "recruitment_salary",
  "recruitment_count",
  "recruitment_start",
  "recruitment_detail",
];
const content = [
  {
    job: "general_workers",
    salary: "negotiable",
    count: "count",
    start_time: "2022-04-10",
    address: "address",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: "general_workers_job_requirements",
  },
  {
    job: "pcb_repairer",
    salary: "negotiable",
    count: "count",
    start_time: "2022-04-10",
    address: "address",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: "pcb_repairer_job_requirements",
  },
  {
    job: "smt_operator",
    salary: "negotiable",
    count: "count",
    start_time: "2022-04-10",
    address: "address",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: "smt_operator_job_requirements",
  },
  {
    job: "sales",
    salary: "negotiable",
    count: "count",
    start_time: "2022-04-10",
    address: "address",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: "sales_job_requirements",
  },
  {
    job: "quality_inspector",
    salary: "negotiable",
    count: "count",
    start_time: "2022-04-10",
    address: "address",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: "quality_inspector_job_requirements",
  },
];
function Recruitment_info() {
  const [row, setRow] = useState(null);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: 20,
          backgroundColor: "#1a338f",
          padding: 10,
          width: window.innerWidth / 1.6,
        }}
      >
        <strong style={{ fontSize: 20, color: "white" }}>
          {getIntl("menu_recruitment")}
        </strong>
      </div>
      <div
        style={{
          textAlign: "left",
          margin: 20,
          marginBottom: 0,
          backgroundColor: "#1a338f",
          paddingTop: 10,
          paddingBottom: 10,
          width: window.innerWidth / 1.6,
          display: "flex",
        }}
      >
        {title.map((p, index) => (
          <div
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              textAlign: "center",
              width: window.innerWidth / 8,
            }}
            key={`${index}`}
          >
            {getIntl(p)}
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "left",
          margin: 20,
          marginTop: 0,
          backgroundColor: "#ebf6fb",
          paddingTop: 10,
          paddingBottom: 10,
          width: window.innerWidth / 1.6,
        }}
      >
        {content.map((p, index) => (
          <div>
            <div
              key={`${index}`}
              style={{ display: "flex", paddingTop: 10, paddingBottom: 10 }}
            >
              {[p.job, p.salary, p.count, p.start_time].map((t) => (
                <div
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    width: window.innerWidth / 8,
                    color: row === `${index}` ? "#1a338f" : "#000",
                  }}
                >
                  {getIntl(t) || t}
                </div>
              ))}
              <div
                style={{ width: window.innerWidth / 8 }}
                className="view_detail"
                onClick={() => {
                  row === `${index}` ? setRow(null) : setRow(`${index}`);
                }}
              >
                {_.isEqual(row, `${index}`)
                  ? getIntl("collapse")
                  : getIntl("view_detail")}
              </div>
            </div>
            <div
              style={{
                display: _.isEqual(row, `${index}`) ? "block" : "none",
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
                backgroundColor: "#f0f0f0",
                padding: 20,
              }}
              className="device_bg"
            >
              <div style={{ margin: 20, color: "#1a338f" }}>
                {getIntl("job_name")}：{getIntl(p.job)}
              </div>
              <div style={{ margin: 20, color: "#1a338f" }}>
                {getIntl("work_address")}：{getIntl(p.address)}
              </div>
              <div style={{ margin: 20, color: "#1a338f", display: "flex" }}>
                <div>{getIntl("job_requirements")}：</div>
                {getIntlHtml(p.responsibility)}
              </div>
              <div style={{ margin: 20, color: "#1a338f", display: "flex" }}>
                <div>{getIntl("contact")}：</div>
                <div>
                  <div> </div>
                  <div>
                    - {getIntl("phone_title")}：{p.phone}
                  </div>
                  <div>
                    - {getIntl("email_title")}：{p.email}
                  </div>
                </div>
              </div>
            </div>
            {index < content.length - 1 && (
              <div style={{ backgroundColor: "#fff", height: 1 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recruitment_info;
