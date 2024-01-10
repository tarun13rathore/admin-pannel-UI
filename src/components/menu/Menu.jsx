import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import data from "./Data";

const Menu = () => {
  return (
    <>
      <div className="menu">
        {data?.map((i, idx) => (
          <div className="item" key={idx}>
            <spna className="tittle">{i?.tittle}</spna>
            {i?.listItem?.map((i, idx) => (
              <Link to={i?.url} className="linkCont" key={idx}>
                <img src={i?.icon} alt="" />
                <span className="listItemTittle">{i?.tittle}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
