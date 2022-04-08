import React from "react";
import Chanxian from "./chanxian";
import Device from "./device";

function Factory() {
  return (
    <div>
      <Chanxian title={"车间产线"} />
      <Device />
    </div>
  );
}

export default Factory;
