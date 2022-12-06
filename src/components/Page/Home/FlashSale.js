import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import roundNumber from "../../shared/roundNumber";

import { useGlobalContext } from "../../Context";
import { darazProducts } from "../../ul-data";
import CountDown from "./CountDown";

const FlashSale = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const { API } = useGlobalContext();

  const getData = async () => {
    const { data } = await API.get(
      `/product/flash?search=flash sale&limit=7&skip=0`
    );
    setCurrentProducts(data.posts);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flash-sale-container ">
      <div className="flash-sale-header-name">Flash Sale</div>
      <div className="flash-sale-header">
        <div className="flash-sale-header-left">
          <div className="flash-sale-header-texts">
            <div className="flash-sale-header-dec">On sale now</div>
            <div className="fs-timer-title center">Ending In</div>
          </div>

          <CountDown />
        </div>
        <Link className="flash-sale-header-right " to={`/search/flash sale`}>
          See More
        </Link>
      </div>
      <div className="flash-sale-main">
        <div className="fs-cards-container auto-x-overflow scrollbar-style">
          {currentProducts.map((item) => {
            return (
              <Link
                className="fs-cards react-link-card"
                key={item._id}
                to={`/products/${item._id}`}
              >
                <img
                  className="fs-product-image"
                  src={item?.images[0]?.img}
                  alt="daraz-product"
                  style={{ width: "180px" }}
                />
                <div className="fs-product-info">
                  <div className="fsproduct-name">{item?.name}</div>
                  <div className="fs-product-final-price">
                    ৳
                    {roundNumber(
                      item?.price - (item?.price / 100) * item?.discount
                    )}
                  </div>
                  <div className="fs-product-discount-info">
                    <div className="fs-product-org-price">
                      ৳{roundNumber(item?.price)}
                    </div>
                    <div className="fs-product-discount-price">
                      -{item?.discount}%
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
