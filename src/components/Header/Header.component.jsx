import React from "react";
import "./header.css";
import logo from "../../assets/image/logo.png";
import { useHistory, Link } from "react-router-dom";

const HeaderComponent = () => {
  const history = useHistory();
  const handleClick = (name) => {
    history.push(`/sanpham/${name}`);
  };

  return (
    <div id="header">
      <div className="wrap-header">
        <div className="row wrap-content">
          <div className="col-3 content-left">
            <Link to="/">
              <img src={logo} alt="" width="100%" height="100%" />
            </Link>
          </div>
          <div className="col-9 content-right">
            <div className="content">
              <div className="item-content">
                <span
                  onClick={() => {
                    handleClick("cafe");
                  }}
                >
                  Cà phê
                </span>
              </div>
              <div className="item-content">
                <span
                  onClick={() => {
                    handleClick("tra");
                  }}
                >
                  Trà
                </span>
              </div>
              <div className="item-content">
                <span>Menu</span>
              </div>
              <div className="item-content">
                <span>Chuyện nhà</span>
              </div>
              <div className="item-content">
                <span>Cảm hứng CloudFee</span>
              </div>
              <div className="item-content">
                <span>Cửa hàng</span>
              </div>
              <div className="item-content">
                <span>Tuyển dụng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
