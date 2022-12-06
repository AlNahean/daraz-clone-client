import React from "react";
import { Link } from "react-router-dom";
import { categoryLinks } from "../../ul-data";

const MainBodyCategory = () => {
  return (
    <div className="main-category-container ">
      <div className="mc-header">
        <div className="mc-header-left">
          <div className="mc-header-name">Category</div>
        </div>
        {/* <div className="mc-header-right flash-sale-header-right ">See More</div> */}
      </div>
      <div className="mc-main">
        <div className="mc-cards-container  scrollbar-style">
          {categoryLinks.map((item) => {
            return (
              <Link
                className="mc-cards react-link"
                key={item.id}
                to={`/search/${item.name}`}
              >
                <img
                  src={item.img}
                  alt="mall cover"
                  className="mc-cover-image"
                />
                <div className="mc-product-info">
                  <div className="mc-product-name">{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainBodyCategory;
