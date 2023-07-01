import React, { useState } from "react";
import ProductFile from "../resource/product.json";

const AdminScreen = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    keyName: "",
    description: "",
  });

  const [productFile, setProductFile] = useState(ProductFile.product);

  const handleChangeProduct = (event) => {
    let { name, value } = event.target;
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleClickAddProduct = () => {
    const newProductFile = productFile;
    newProductFile.push(product);
    localStorage.setItem("product", JSON.stringify(newProductFile));
  };
  console.log(productFile);
  return (
    <div className="wrap-layout admin">
      Them san pham
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="name"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Key Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="keyName"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Price</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="price"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="category"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            >
              <option value="cafe">Cafe</option>
              <option value="tra">Tra</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              name="description"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Image</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="image"
              onChange={(event) => {
                handleChangeProduct(event);
              }}
            />
          </div>
          <div className="mt-3">
            <img src={product.image} alt="" width="20%" height="20%" />
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleClickAddProduct();
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminScreen;
