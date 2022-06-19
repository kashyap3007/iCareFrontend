import React from "react";
import { discovery, nature, medicine, smoke, fitbit, yoga } from "./imports";
import "./brand2.css";

const Brand = () => (
  <div className="gpt3__brand section__padding" id="brand2">
    <div>
      <img src={discovery} />
    </div>
    <div>
      <img src={nature} />
    </div>
    <div>
      <img src={medicine} />
    </div>
    <div>
      <img src={fitbit} />
    </div>
    <div>
      <img src={smoke} />
    </div>
    <div>
      <img src={yoga} />
    </div>
  </div>
);

export default Brand;
