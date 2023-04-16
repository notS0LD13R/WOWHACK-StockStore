import { useState } from "react";
import "./SellStocks.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function SellStocks() {
  return (
    <div className="SellStocks">
      <SellStockPills />
      <SellStockPills />
      <SellStockPills />
    </div>
  );
}

function SellStockPills() {
  let [isExpanded, setExpanded] = useState(false);
  return (
    <div className="SellStockPills">
      {/* {!isExpanded && <SchmallPill />} */}
      {isExpanded ? <BigBoiPill /> : <SchmallPill />}
      {/* <div>info</div> */}
      {/* <div>Sell</div> */}
      <div
        className="PillExpandButton"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <BsChevronUp size="1.5rem" />
        ) : (
          <BsChevronDown size="1.5rem" />
        )}
      </div>
    </div>
  );
}

function SchmallPill() {
  return (
    <div className="SchmallPill">
      <div className="row">
        <div className="rowelem CompanyName">Company Name</div>
        <div className="rowelem LastUpdated">
          {"Last Updated: " + new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <div className="rowelem StockPrice">{"Stock Price: "}</div>
        <div className="rowelem StocksLeft">{"No of Stocks: "}</div>
      </div>
    </div>
  );
}

function BigBoiPill() {
  return (
    <div className="BigBoiPill">
      <div className="heading">
        <div className="rowelem CompanyName">Company Name</div>
        <div className="rowelem LastUpdated">
          {"Last Updated: " + new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <img
          className="CompanyImage"
          src="https://www.livemint.com/lm-img/img/2023/03/28/600x338/kalyan_jewellers_1679978032083_1679978032261_1679978032261.JPG"
          alt="Just an image bruh"
        />
        <div className="col">
          <div className="colelem">Stock Price: </div>
          <div className="colelem">No of Stocks: </div>
          <div className="colelem">Company Valuation: </div>
          <div className="colelem">Company Revenue: </div>
        </div>
        {/* <div className="col"> */}
        <div className="col last">
          <div className="colelem">How many stocks to Sell?</div>
          <div className="row">
            <input type="text" className="ShareInput colelem" />
            <div className="colelem SellButton" onClick={() => {}}>
              Sell
            </div>
          </div>
          {/* <div className="colelem">Sell</div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}