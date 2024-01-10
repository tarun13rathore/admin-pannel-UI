import React from "react";
import "./topbox.scss";
import { topData } from "../menu/Data";

const TopBox = () => {
  return (
    <>
      <div className="main_topBox">
        <h3 className="headd">Top Deals</h3>
        {topData?.map((i, idx) => (
          <div className="cards">
            <div className="inside_card">
              <img src={i?.img} className="profileImg" alt="img" />
              <div>
                <p className="name">{i?.username}</p>
                <p className="email">{i?.email}</p>
              </div>
            </div>
            <div className="amout">{i?.amount}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopBox;
