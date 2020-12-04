import React, { useState, useEffect } from "react";
import "../style/Stats.css";
import Axios from "axios";
import StatsRow from "./StatsRow";

function Stats() {
  const [stockData, setstockData] = useState([]);

  const BASE_URL = "https://finnhub.io/api/v1/quote";

  const getStockData = (stock) => {
    return Axios.get(
      `${BASE_URL}?symbol=${stock}&token=bv58i9v48v6qnlld1jc0`
    ).catch((error) => {
      console.log("error here " + error);
    });
  };

  useEffect(() => {
    let tempStockData = [];
    let stockList = ["AAPL", "MSFT", "TSLA", "NIO"];

    let promises = [];
    stockList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setstockData(tempStockData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

// stats
// stats__container
// stats__header
// stats__content
// - stats__rows for our current stocks
// stats__header for list
