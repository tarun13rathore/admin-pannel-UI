import React from "react";
import Single from "../../components/singlePage/Single";
import "./SingleUser.scss";
import { singleUserData } from "../../components/menu/Data";

const SingleUser = () => {
  //fetch data and send single component
  return (
    <div>
      <Single {...singleUserData} />
    </div>
  );
};

export default SingleUser;
