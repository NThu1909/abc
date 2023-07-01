import React from "react";
import HeaderComponent from "../components/Header/Header.component";
import { useParams } from "react-router-dom";
import product from "../resource/product.json";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProductScreen = () => {
  const history = useHistory();
  const category = useParams().category;
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("product")) {
      setListProduct(JSON.parse(localStorage.getItem("product")));
    } else {
      setListProduct(product.product);
    }
  }, [localStorage.getItem("product")]);

  console.log(listProduct);

  const handleClickProduct = (keyName) => {
    history.push(`/product/${keyName}`);
  };
  const showListProduct = listProduct
    .filter((e) => {
      return e.category == category;
    })
    .map((e, index) => {
      return (
        <div className="col-3 wrap-product">
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
  const showTitle = () => {
    if (category == "tra") {
      return (
        <div className="title">
          <span>Trà tại nhà</span>
        </div>
      );
    } else if (category == "cafe") {
      return (
        <div className="title">
          <span>Cà phê tại nhà</span>
        </div>
      );
    }
  };
  return (
    <div>
      <HeaderComponent />
      <div className="lists-product">
        {showTitle()}
        <div className="row">{showListProduct}</div>
      </div>
    </div>
  );
};

export default ProductScreen;
