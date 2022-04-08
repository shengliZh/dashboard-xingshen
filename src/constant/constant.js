import _img from "../pages/image/img";
import React from "react";

export const devices = [
  {
    src: _img.yinshuaji,
    name: "全自动锡膏印刷机  G5",
    key: "yinshuaji",
    param: _img.yinshuajicanshu,
    desc: (
      <div>
        G5全自动锡膏印刷机是高精度和高稳定性的全自动视觉印刷机，高分辨率的视觉处理，高精度的传动系统，悬浮式自适应刮刀，精确的板定位处理和灵巧的网框夹紧结构，结构紧凑，兼具准确性和高度的灵活性，提供给客户高效，精确印刷所需的功能。
      </div>
    ),
  },
  {
    src: _img.jianceshebei_spi_3d,
    name: "3D-SPI检测设备",
    key: "jianceshebei_spi_3d",
    param: _img.jianceshebeicanshu_spi_3d,
    desc: (
      <div>
        具有如下特点：
        <br />
        ●动态Mark点识别
        <br />
        ●胶水检测
        <br />
        ●坏板飞行识别功能
        <br />
        ●多样化的条码识别功能
        <br />
        ●配合印刷机闭环控制
        <br />
        ●MES智能制造接入
      </div>
    ),
  },
  {
    src: _img.jianceshebei,
    name: "检测设备  YBER PTICS",
    key: "jianceshebei",
    desc: (
      <div>
        YBER PTICS SE300
        快速提供了准确的、可靠的重复性的结果，满足了日益提高的生产线周期要求。
        <br />
        SE 300 经过实地验证的技术和可靠的功能改善了编程时间和检测设置;
        <br />
        操作用户界面中提供了SPC图表；
        <br />
        选配的光学系统，扩大了高度检测范围，可以测量高达24 mils (610 μm)的高度。
      </div>
    ),
  },
  {
    src: _img.tiepianji,
    name: "日立高速贴片机  HITACH ∑-G5S",
    key: "tiepianji",
    param: _img.tiepianjicanshu,
    desc: (
      <div>
        日立高速贴片机具备体积小，兼容性高，超高速，双臂联动，跨区取料，电子供料，双面操作，适应范围广，精度高等特点，尤其适合SMT大规模的生产。
      </div>
    ),
  },
  {
    src: _img.jianceshebei_aoi_3d,
    name: "3D-AOI检测设备",
    key: "jianceshebei_aoi_3d",
    param: _img.jianceshebeicanshu_aoi_3d,
    desc: (
      <div>
        YAMAHA YSi-V 3D-AOI具有如下特点：
        ●2D高速、高分辨率2维检查，1200万像素的高分辨率成像
        <br />
        ●3D高度、倾斜面3维检查，可以检查出对象物的倾斜度与方向，准确判定形状是否正确
        <br />●
        4D4方向斜视相机，采用了独创的摄像技术，可从4个方向对错误位置以及视野内的所有元件进行一次性斜向拍摄，精确跟踪元件
      </div>
    ),
  },
  {
    src: _img.jianceshebei_1,
    name: "检测设备",
    key: "jianceshebei_1",
    param: _img.jianceshebeicanshu_1,
    desc: (
      <div>
        ●独创使用DISP（动态图幅无缝拼接技术）实现了全板多幅图像的动态无缝拼接。
        <br />
        ●首次运用GPU并行运算技术代替传统CPU运算模式
        <br />
        ●启用超高分辨率图像采集系统与高精度机械传动系统之完美结合确保了对01005微型片式元件及0.3mm密引脚间距IC的精确和稳定的检测能力，充分保障了产品的检测效率和重复精度。
      </div>
    ),
  },
  {
    src: _img.jianceshebei_gex_ray,
    name: "X射线检测设备  GEX-RAY",
    key: "jianceshebei_gex_ray",
    param: _img.jianceshebeicanshu_gex_ray,
    desc: (
      <div>
        GEX-RAY具有如下特点：
        <br />
        ●自主冷却和温度稳定控制的数字DXR平板探测器局域高动态响应进行实时成像；
        <br />
        ●细节分辨率达0.5微米的180KV/20W高功率；
        <br />
        ●具有CAD文件导入的软件可编程和自动检测；
        <br />
        ●采用金刚石靶材在同等质量影像条件下数据截取速度可快2倍；
        <br />
        ●可选三维CT扫描功能，实现10秒的快速扫描。
      </div>
    ),
  },
  {
    src: _img.huiliuhan,
    name: "日东波峰焊",
    key: "huiliuhan",
    param: _img.huiliuhancanshu,
    desc: (
      <div>
        日东波峰焊具有如下特点：
        <br />
        ● 传输系统：直联式入板结构，有效防止导轨变形。
        <br />
        ● 预热系统：抽屉式模组节能设计，红外、热风任意组合。
        <br />
        ● 喷雾系统：精密型调节阀数字化调节，助焊剂自动稳压供给。
        <br />● 强制式冷却系统，保证冷却速度在4~6℃/s（可调）。
      </div>
    ),
  },
  {
    src: _img.huiliuhan_danqi,
    name: "氮气回流焊",
    key: "huiliuhan_danqi",
    param: _img.huiliuhancanshu_danqi,
    desc: (
      <div>
        劲拓氮气回流焊具有如下特点：
        <br />
        1，多层保温炉膛设计，有效降低工作环境温度
        <br />
        2，15%热传递效率的提升从容应对更复杂更大型焊接产品
        <br />
        3，炉膛内使用全面保护的密闭式设计，有效保护氮气不易流失
      </div>
    ),
  },
  {
    src: _img.bofenghan,
    name: "SMART-450回流焊  ",
    key: "bofenghan",
    param: _img.bofenghancanshu,
    desc: (
      <div>
        喷雾外置结合内置和独立两种喷雾方式的优点，可以一体控制将喷雾远离预热区
        <br />
        炉体内部免受助焊剂干扰，电箱安全清洁
        <br />
        外置喷雾导轨角度可调，代替入口接驳功能
        <br />
        内部强化隔热加上可选外部保温措施，有效降低热损耗
        <br />
        喷口端面固定,喷口快速拆装。
      </div>
    ),
  },
  {
    src: _img.bofenghan_1,
    name: "回流焊",
    key: "bofenghan_1",
    param: _img.bofenghancanshu_1,
    desc: (
      <div>{`回流焊具有制程稳定性高、环保式资源管理、睡眠模式下显著降低能源等特点，氮气和冷却用水消耗、外壳温度最多高出室温15℃、噪音级降低 <70分贝、通过监测全面控制冷却操作中电力、氮气和能源消耗可持续性保温，大大降低环境热能耗，更低维护费用，高效焊渣管理，多种软件工具提供出色的制程跟踪能力使得REHM具有独特的技术优势。`}</div>
    ),
  },
  {
    src: _img.bofenghan_xuanzexing,
    name: "选择性波峰焊  ZSW",
    key: "bofenghan_xuanzexing",
    param: _img.bofenghancanshu_xuanzexing,
    desc: (
      <div>
        ZSW选择性波峰焊具有如下特点：
        <br />
        ● 传输系统：直联式入板结构，有效防止导轨变形。
        <br />
        ● 预热系统：抽屉式模组节能设计，红外、热风任意组合。
        <br />
        ● 喷雾系统：精密型调节阀数字化调节，助焊剂自动稳压供给。
        <br />● 强制式冷却系统，保证冷却速度在4~6℃/s（可调）。
      </div>
    ),
  },
  {
    src: _img.sanfangtufushebei,
    name: "三防涂覆设备",
    key: "sanfangtufushebei",
    param: _img.sanfangtufushebeicanshu,
    desc: (
      <div>
        HaiPai三防涂覆机具有如下特点：
        <br />
        ●准确实现各种电路板避开连接器等非涂覆区域的选择性喷涂工艺
        <br />
        ●准确实现各种电路板选择性区域喷涂
        <br />
        ●可以实现点涂、线状喷涂、曲线喷涂等多轨迹喷涂
        <br />
        ●可以有效均匀涂覆器件边沿，可以消除喷涂阴影效应
        <br />
        ●具有高速、高可靠性、高稳定性的传动和控制系统
      </div>
    ),
  },
  {
    src: _img.weixiushebei,
    name: "维修设备",
    key: "weixiushebei",
    param: _img.weixiushebeicanshu,
    desc: (
      <div>
        美国 VJ Summit 1800 具有一下特点：
        <br />
        ●带有自动设置温度曲线功能的SierraMate软件
        <br />
        ●独立的加热器及拾取管控制和精确的贴片性能
        <br />
        ●高放大倍率及清晰度和合理热传导性能
        <br />●
        2.4kW大功率顶部加热器带有可编程X-Y工作台的DHS焊锡清除器以及带有5.6kW底部加热器的22"X30"
        X-Y工作台.
      </div>
    ),
  },
  {
    src: _img.fuzhushebei,
    name: "辅助设备——分板机",
    key: "fuzhushebei",
    param: _img.fuzhushebeicanshu,
    desc: (
      <div>
        铣刀式PCB分板机RM-285具有以下特点：
        <br />
        ●全电动控制，保证设备长期工作精度
        <br />
        ●360度2分度旋转工作台面，提高生产效率
        <br />
        ●自主研发控制系统，安全稳定升级方便
        <br />
        ●合理机械结构，体积小、切割精度高
        <br />
        ●电动控制无需气源；高稳定性维护方便；操作简单换线时间短
      </div>
    ),
  },
  {
    src: _img.fuzhushebei_1,
    name: "辅助设备——雕刻机",
    key: "fuzhushebei_1",
    param: _img.fuzhushebeicanshu_1,
    desc: (
      <div>
        搏世通650DK雕刻机具有以下特点：
        <br />
        ●铸铁构造、主要部件进口，操作便捷，通过Auto CAD、Maser
        CAM等编程软件控制操作
        <br />
        ●维修简便快捷，设备使用寿命长
        <br />
        ●可对亚克力、PET、PC、ABS、pvc、环氧树脂、合成石、电木、石墨等非金属材料进行三维雕刻加工
      </div>
    ),
  },
];
