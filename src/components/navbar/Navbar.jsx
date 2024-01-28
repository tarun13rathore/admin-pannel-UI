import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import seach from "../../assets/search.svg";
import expand from "../../assets/expand.svg";
import app from "../../assets/app.svg";
import setting from "../../assets/setting.svg";
import notification from "../../assets/notifications.svg";
import user from "../../assets/user.svg";
const Navbar = () => {
  return (
    <>
      <div className="main_nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>admin Pannel</span>
        </div>
        <div className="icons">
          <img src={app} alt="app" className="icon" />
          <img src={seach} alt="seach" className="icon" />
          <img src={expand} alt="expand" className="icon" />
          <div className="notification">
            <img src={notification} alt="notification" />
            <span className="count">1</span>
          </div>
          <div className="uses">
            <img src={user} alt="uses" />
            <span>tarun</span>
          </div>
          <img src={setting} alt="setting" className="icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
