import React from "react";
import "./introduce.css";

const IntroduceComponent = () => {
  return (
    <div className="introduce">
      <div className="row">
        <div className="col-6">
          <img
            src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-6 introduce-right">
          <div>
            <img
              src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="mt-3">
            <span>
              Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
              Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
              foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy
              phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa sóng
              sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp
              giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện, nhấp một
              ngụm là ghiền, nhớ mãi không thôi.
            </span>
          </div>
          <div className="btn-introduce mt-3">
            <span>Thử ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceComponent;
