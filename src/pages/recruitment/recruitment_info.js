import React, { useState } from "react";
import _ from "lodash";
import "./recruitment.css";

const title = ["岗 位", "工资待遇", "数 量", "发布时间", "详 情"];
const content = [
  {
    job: "普工",
    salary: "面议",
    count: "若干名",
    start_time: "2022-04-10",
    address: "安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: <div>认识26个英文字母，有责任心。</div>,
  },
  {
    job: "PCB维修员",
    salary: "面议",
    count: "若干名",
    start_time: "2022-04-10",
    address: "安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: (
      <div>
        <strong>一、工作职责：</strong>
        <br />
        负责公司PCB线路板的功能测试与维修
        <br />
        产品故障分析解决
        <br />
        <br />
        <strong>二、任职要求：</strong>
        <br />
        男，25—45岁，中专以上学历，电子类专业最佳， 能看懂线路图
        <br />
        懂电子元器件知识，能熟练操作电烙铁、热风枪等维修工具，懂得鉴别焊点品质问题及简单的电路功能
        <br />
        有一年以上SMT工厂PCB板维修经验，能独立处理生产中产生的各种不良品,并对不良品有一定的判断和改进能力
        <br />
        良好的分析判断和解决设备异常情况的能力
        <br />
        表达沟通能力良好，有责任心，身体健康，品德优良，有较强的责任心和沟通能力，能说吃苦耐劳
      </div>
    ),
  },
  {
    job: "SMT操作员",
    salary: "面议",
    count: "若干名",
    start_time: "2022-04-10",
    address: "安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: (
      <div>
        <strong>职位描述：</strong>
        <br />
        负责日常的生产smt设备的操作、换线、保养
        <br />
        <br />
        <strong>职位要求：</strong>
        <br />
        高中以上学历，两年以上SMT相关工作经验
        <br />
        能独立处理设备的简单故障
        <br />
        熟悉SMT工艺流程及软件
        <br />
        熟悉BOM编制及管理
      </div>
    ),
  },
  {
    job: "销售顾问",
    salary: "面议",
    count: "若干名",
    start_time: "2022-04-10",
    address: "安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: (
      <div>
        <strong>职位描述：</strong>
        <br />
        负责拓展公司的业务
        <br />
        维护客户的关系
        <br />
        协助销售经理营销
        <br />
        <br />
        <strong>任职要求：</strong>
        <br />
        有PCB板贴片、插件、组装的销售经验
        <br />
        熟练操作OFFICE软件，能够有较强的数据分析能力
        <br />
        善于沟通、掌握丰富的人脉资源者优先
      </div>
    ),
  },
  {
    job: "质检员/测试员",
    salary: "面议",
    count: "若干名",
    start_time: "2022-04-10",
    address: "安徽省马鞍山市郑浦港新区和州大道蒲建标准化厂房1号楼",
    phone: "0555-2963088, 18069673763",
    email: "guangrongchen@ttongjd.cn",
    responsibility: (
      <div>
        <strong>职位描述：</strong>
        <br />
        负责产品的smt首检和dip巡回检验工作
        <br />
        根据工单对成品进行质量检验监督，避免不良品流入客户端
        <br />
        <br />
        <strong>任职要求：</strong>
        <br />
        性别：女
        <br />
        有一年以上SMT品质相关工作经验；
        <br />
        认识电子物料，了解SMT生产流程，电子元器件知识；基本掌握产品检查标准
      </div>
    ),
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
        <strong style={{ fontSize: 20, color: "white" }}>人才招聘</strong>
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
            {p}
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
                  {t}
                </div>
              ))}
              <div
                style={{ width: window.innerWidth / 8 }}
                className="view_detail"
                onClick={() => {
                  row === `${index}` ? setRow(null) : setRow(`${index}`);
                }}
              >
                {_.isEqual(row, `${index}`) ? "收起" : "查看"}
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
                职位名称：{p.job}
              </div>
              <div style={{ margin: 20, color: "#1a338f" }}>
                工作地点：{p.address}
              </div>
              <div style={{ margin: 20, color: "#1a338f", display: "flex" }}>
                <div>主要职责：</div>
                {p.responsibility}
              </div>
              <div style={{ margin: 20, color: "#1a338f", display: "flex" }}>
                <div>联系方式：</div>
                <div>
                  <div> </div>
                  <div>-电话：{p.phone}</div>
                  <div>-邮箱：{p.email}</div>
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
