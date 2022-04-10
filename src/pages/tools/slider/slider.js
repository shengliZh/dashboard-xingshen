import React, { useEffect } from "react";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import "./slider.css";
function Slider(props) {
  const navigate = useNavigate();
  useEffect(() => {
    let oBox = document.getElementById("box");
    let aUl = oBox.getElementsByTagName("ul")[0];
    let aLi = oBox.getElementsByTagName("li");
    let speed = 2;

    aUl.innerHTML = aUl.innerHTML + aUl.innerHTML; //使li增加一倍
    aUl.style.width = aLi[0].offsetWidth * aLi.length + "px"; //修改aUl框的宽度,注意单位

    function move() {
      //向左移动aUl.offsetLeft是负的,我们需要把aUl的一半宽度放置在div右侧
      if (aUl.offsetLeft < -aUl.offsetWidth / 2) {
        aUl.style.left = 0 + "px"; //将ul放回原位
      }
      //向右移动aUl.offsetLeft是大于0的,我们需要把aUl的一半宽度放置在div左侧
      if (aUl.offsetLeft > 0) {
        aUl.style.left = -aUl.offsetWidth / 2 + "px"; //放置在div左侧,left为负值
      }
      aUl.style.left = aUl.offsetLeft - speed + "px"; //整体移动ul,右
    }

    let timer = setInterval(move, 50);

    aUl.onmouseover = function () {
      clearInterval(timer);
    };

    aUl.onmouseout = function () {
      timer = setInterval(move, 50);
    };

    let aBtn = document.getElementsByTagName("button");
    aBtn[0].onmouseover = function () {
      speed = 0;
    };
    aBtn[1].onmouseover = function () {
      speed = 0;
    };
  }, []);

  return (
    <div
      id="main"
      onClick={() => navigate(props.navigate)}
      style={{ cursor: "pointer" }}
    >
      <div id="box">
        <ul>
          {props.img.map((p, index) => {
            return (
              <li
                style={{ marginLeft: 20, backgroundColor: "#fff" }}
                key={`${index}`}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    textAlign: "center",
                    height: 320,
                    margin: 10,
                    border: "5px solid #fff",
                  }}
                >
                  <Image
                    src={p.src}
                    style={{ height: 260, marginTop: 10 }}
                    preview={false}
                  />
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    {p.name}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
