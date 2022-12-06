import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { goLinks } from "../../ul-data";

const HeroBottomLinks = ({ categoriesRef2Trigger }) => {
  return (
    <div className="hero-bottom-links center" ref={categoriesRef2Trigger}>
      <div
        className="hero-bottom-links-2 center"
        id="outer"
        ref={categoriesRef2Trigger}
      >
        {goLinks.map((item) => {
          return (
            <Link
              key={item.id}
              className="go-link-container react-link"
              to={`/search/${item.name}`}
            >
              <div key={item.id} className="go-link-container-2">
                <img src={item.gif} alt="gif" className="go-link-gif" />
                <div className="link-name">{item.name}</div>
                <div className="go-icon center">
                  <GrNext />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBottomLinks;
