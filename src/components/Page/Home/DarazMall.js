import React from "react";
import { Link } from "react-router-dom";
import { darazMall } from "../../ul-data";

const DarazMall = () => {
  return (
    <div className="daraz-mall-container ">
      <div className="dm-header">
        <div className="dm-header-left">
          <div className="dm-header-name">Daraz Mall</div>
        </div>
        <Link
          className="dm-header-right flash-sale-header-right "
          to={`/search/daraz mall`}
        >
          See More
        </Link>
      </div>
      <div className="dm-main">
        <div className="dm-cards-container auto-x-overflow scrollbar-style">
          {darazMall.map((item) => {
            return (
              <Link
                className="dm-cards react-link "
                key={item.id}
                to={`/search/${item.mallName}`}
              >
                <div className="dm-pro-image">
                  <img
                    src={item.mallImg}
                    alt="mallImage"
                    className="full-size"
                  />
                </div>
                <img
                  src={item.mallCoverImg}
                  alt="mall cover"
                  className="dm-cover-image"
                />
                <div className="dm-product-info">
                  <div className="dm-product-name">{item.mallName}</div>
                  <div>{item.mallMotto}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DarazMall;
