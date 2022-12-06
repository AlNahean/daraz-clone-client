import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import { goLinks, categoryLinks } from "../../ul-data";
import { BsChevronDown } from "react-icons/bs";

const HeaderCategory2 = () => {
  const { ctDropdown, setCtDropdown } = useGlobalContext();
  return (
    <div className="hdct2">
      {ctDropdown && (
        <div
          className="ct-dropdown-canceler"
          onMouseOver={() => {
            setCtDropdown(false);
          }}
        ></div>
      )}
      {ctDropdown && (
        <div className="categories-dropdown">
          <div className="category-items-container">
            {categoryLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="category-dropdown-items react-link"
                  to={`/search/${item.name}`}
                  onClick={(e) => {
                    setCtDropdown(false);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {[{ id: 0, name: "Categories" }].map((item) => {
        return (
          <div
            key={item.id}
            className="hdct2-container "
            onMouseOver={() => {
              setCtDropdown(true);
            }}
          >
            <div
              key={item.id}
              className="hdct2-container-2 hdct2-categories-container"
            >
              <div className="hdct2-name">
                <div className="hdct2-c-title">{item.name}</div>
              </div>
              <div className="hdct2-d-icon center">
                <BsChevronDown />
              </div>
            </div>
          </div>
        );
      })}
      {goLinks.map((item) => {
        return (
          <Link
            key={item.id}
            className="hdct2-container center react-link"
            to={`/search/${item.name}`}
            onMouseOver={() => {
              setCtDropdown(false);
            }}
          >
            <div key={item.id} className="hdct2-container-2">
              <div className="hdct2-name">{item.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderCategory2;
