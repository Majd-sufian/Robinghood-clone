import React from "react";
import "../style/StatsRow.css";

function StatsRow() {
  return (
    <div className="row">
      <div className="row__intro">
        <h1>TSLA</h1>
        <p>200 shares</p>
      </div>
      {/* <div className="row__chart">
        <img src={StockChart} height={16} />
      </div> */}
      <div className="row__numbers">
        <p className="row__price">597.40$</p>
        <p className="row__percentage"> +14.2%</p>
      </div>
    </div>
  );
}

export default StatsRow;
