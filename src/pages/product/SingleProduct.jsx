import React from "react";
import "./SingleProduct.scss";
import Single from "../../components/singlePage/Single";
import { singleProduct } from "../../components/menu/Data";

const SingleProduct = () => {
  //fetch data and send single component
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default SingleProduct;
