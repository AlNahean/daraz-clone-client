import React from "react";
import { useState, useEffect, useRef } from "react";
import DarazSearch from "./DarazSearch";
import { FiShoppingCart } from "react-icons/fi";
import TopNottification from "../../Page/TopNottification/TopNottification";

import DisplayMenu from "./DisplayMenu";

import { BsSearch } from "react-icons/bs";

import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const MainHeader = () => {
  const darazLogoRef = useRef(null);
  const darazMiniSearchRef = useRef(null);
  const darazFullSearchRef = useRef(null);
  const darazMainHeaderRef = useRef(null);

  const [isDisplayMenu, setIsDisplayMenu] = useState(false);

  const [miniIsValid, setMiniIsValid] = useState(true);

  // const [darazMainHeader, setdarazMainHeader] = useState("");

  const { setCtDropdown, cartItems } = useGlobalContext();

  const toggleMiniSearch = () => {
    setMiniIsValid(false);
    // darazLogoRef.current.style.display = "none";
    // darazMainHeaderRef.current.style.gridTemplateColumns = "1fr";
    // darazMainHeader.classList.add("dynamic-main-header-container");
    mainHeader.classList.add("dynamic-main-header-container");
    // darazMainHeaderRef.current.style.backgroundColor = "red";
    // darazMainHeader.style.
    // darazCartRef.current.style.display = "none";
    // darazMenuRef.current.style.display = "none";

    darazFullSearchRef.current.style.display = "block";
  };
  const miniSearchCanceler = () => {
    setMiniIsValid(true);
    // darazLogoRef.current.style.display = "block";
    // darazMainHeaderRef.current.style.gridTemplateColumns = "6fr 1fr 1fr 1fr";
    // darazCartRef.current.style.display = "block";
    // darazMenuRef.current.style.display = "block";
    mainHeader.classList.remove("dynamic-main-header-container");

    darazFullSearchRef.current.style.display = "none";
  };

  let mainHeader = document.querySelector(".main-header-container");
  useEffect(() => {
    mainHeader = document.querySelector(".main-header-container");
  }, []);

  let cartLength = "";
  useEffect(() => {
    cartLength = cartItems.length;
  }, [cartItems]);

  const displayMenu = () => {
    // alert("Display menu");
    setIsDisplayMenu(true);
  };
  return (
    <div
      className="main-header-container"
      ref={darazMainHeaderRef}
      onMouseOver={() => {
        setCtDropdown(false);
      }}
    >
      {isDisplayMenu && <DisplayMenu setIsDisplayMenu={setIsDisplayMenu} />}

      <TopNottification />
      {miniIsValid && (
        <div className="header-logo-container full-size " ref={darazLogoRef}>
          <div className="header-logo-container-2 full-size">
            <Link className="header-logo react-link" to={`/home`}>
              <img
                src="/daraz-logo.png"
                alt="Daraz"
                className="daraz-logo"
                style={{ maxHeight: "7vh", width: "auto" }}
              />
            </Link>
          </div>
        </div>
      )}

      <div className="header-search-container full-size">
        <div className="header-search-container-2 center full-size">
          <div className="header-search full-size center">
            <DarazSearch miniSearchCanceler={miniSearchCanceler} />
          </div>
        </div>
      </div>

      <div
        className="daraz-full-search-container full-size"
        ref={darazFullSearchRef}
      >
        <div className="header-search-container-2 center full-size">
          <div className="header-search full-size center">
            <DarazSearch miniSearchCanceler={miniSearchCanceler} />
          </div>
          <div
            className="full-search-canceler"
            onClick={(e) => {
              miniSearchCanceler();
            }}
          ></div>
        </div>
      </div>

      {miniIsValid && (
        <div
          className="header-search-sort-container full-size"
          ref={darazMiniSearchRef}
        >
          <div className="header-search-sort-container-2 center full-size">
            <div
              className="header-search-sort"
              onClick={(e) => {
                toggleMiniSearch();
              }}
            >
              <button className=" search-btn center full-size">
                <BsSearch style={{ height: "100%", width: "auto" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {miniIsValid && (
        <Link
          className="header-cart-container full-size react-link-card"
          to={"/cart"}
        >
          <div className="header-cart-container-2 center full-size">
            <div
              className="header-cart full-size center"
              style={{ height: "5vh", width: "auto", position: "relative" }}
            >
              {cartItems.length > 0 && (
                <div className="cart-nottification">{cartItems.length}</div>
              )}

              <FiShoppingCart style={{ height: "5vh", width: "auto" }} />
            </div>
          </div>
        </Link>
      )}

      {miniIsValid && (
        <div className="header-offer-container full-size">
          <div className="header-offer-container2 center full-size">
            <Link className="header-offer" to={`/search/get-free`}>
              <img
                src="/getFree.png"
                alt="offer"
                style={{ maxHeight: "7vh", width: "auto" }}
              />
            </Link>
          </div>
        </div>
      )}

      {miniIsValid && (
        <div className="header-menu-container full-size">
          <div className="header-menu-container-2 center full-size">
            <div className="header-menu center">
              <IoMenu
                style={{ height: "90%", minWidth: "6vh", width: "auto" }}
                onClick={(e) => {
                  displayMenu();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
