import React from "react";
import HeaderComponent from "../components/Header/Header.component";
import { useParams } from "react-router-dom";
const ProductScreen = () => {
  console.log(useParams);
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default ProductScreen;
