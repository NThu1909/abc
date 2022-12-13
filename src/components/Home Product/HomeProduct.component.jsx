import React, { useState } from "react";
import product from "../../resource/product.json";
import "./product.css";

const HomeProductComponent = () => {
  const [listsProduct, setListProduct] = useState(product.homeProduct);
  const showListProduct = listsProduct.map((e, index) => {
    return (
      <div className="col-3">
        <div className="img-product">
          <img src={e.image} alt="" width="100%" height="100%" />
        </div>
        <div className="name-product mt-2">
          <span>{e.name}</span>
        </div>
        <div className="price-product">
          <span>{e.price}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-5">
      <div className="row">{showListProduct}</div>
    </div>
  );
};

export default HomeProductComponent;
