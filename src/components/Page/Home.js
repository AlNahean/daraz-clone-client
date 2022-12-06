import React, { useState, useEffect, useRef } from "react";
import MainHeader from "../Header Nav/Components/Main-Header";
import { Link } from "react-router-dom";
import HeaderExtra from "../Header Nav/Components/HeaderExtra";
import HeaderCategory2 from "../Header Nav/Components/HeaderCategory2";

//Components
import HeroImage from "./Home/HeroImage";
import HeroBottomLinks from "./Home/HeroBottomLinks";
import FlashSale from "./Home/FlashSale";
import DarazMall from "./Home/DarazMall";
import MainBodyCategory from "./Home/MainBodyCategory";
import JustForYou from "./Home/JustForYou";
import Footer from "./Home/Footer";

//ul data
import { goLinks, categoryLinks } from "../ul-data";
import { useGlobalContext } from "../Context";

const Home = () => {
  const headerRef = useRef(null);
  const dummyHeaderRef = useRef(null);
  const categoriesRef = useRef(null);
  const categoriesRef2 = useRef(null);
  const categoriesRef2Trigger = useRef(null);

  const categoriesContainerRef = useRef(null);

  const [gg1, setGg1] = useState(0);

  const [hdCt2, setHdCt2] = useState([
    { id: 0, name: "Categories" },
    ...goLinks,
  ]);
  //*************************************************************
  //*****************/ Floating Navigation********************
  /************************************************************ */
  const [fnNav, setFnNav] = useState(false);
  const [fnNavOpen, setFnNavOpen] = useState(false);
  const { topNottification } = useGlobalContext();

  useEffect(() => {
    let aa = Array.prototype.slice.call(document.querySelectorAll("#outer")); //to add mouse event to all the id's
    aa.map((scr) => {
      scr.addEventListener(
        "mousewheel",
        function (e) {
          this.scrollLeft -= e.wheelDelta;
          e.preventDefault();
        },
        false
      );
    });

    dummyHeaderRef.current.style.height = headerRef.current.style.height;
    let test = categoriesRef2Trigger.current;
    const dLinks = document.querySelector(".hero-bottom-links");
    const headerHeight = document
      .querySelector(".header")
      .getBoundingClientRect().height;
    let dLinksTop =
      dLinks.getBoundingClientRect().top +
      window.scrollY -
      headerRef.current.offsetHeight;

    //*******************************************
    //*************The Scroll Event**************
    //*******************************************

    // :) :) :)
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= window.screen.height / 2) {
        setFnNav(true);
      } else if (window.scrollY < window.screen.height / 2) {
        setFnNav(false);
      }
      if (headerRef.current) {
        if (window.scrollY > 20) {
          headerRef.current.style.position = "fixed";
        } else if (window.scrollY < 20) {
          headerRef.current.style.position = "absolute";
        }

        if (
          (window.scrollY > dLinksTop) &
          (categoriesRef.current.style.display !== "none")
        ) {
          categoriesRef.current.style.display = "none";
          categoriesRef2.current.style.display = "block";

          if (window.screen.width <= 700) {
            categoriesContainerRef.current.style.maxHeight = "0vh";
          } else if (window.screen.width > 700) {
            categoriesContainerRef.current.style.maxHeight = "6vh";
          }
        } else if (
          (window.scrollY <= dLinksTop) &
          (categoriesRef.current.style.display !== "block")
        ) {
          categoriesRef.current.style.display = "block";
          categoriesRef2.current.style.display = "none";
          categoriesContainerRef.current.style.maxHeight = "6vh";
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(topNottification);
  // }, [topNottification]);

  return (
    <div className="daraz-homepage-container">
      {/* Didnt finish so it is display: "none" */}
      {fnNav && (
        <div className="home-floating-navigation">
          <div className="fn-items-container ">
            {fnNavOpen && (
              <div className="fn-items-container">
                <div className="go-to-top fn-item">T</div>
                <div className="fn-flash-sale fn-item">FS</div>
                <div className="fn-daraz-mall fn-item">DM</div>
                <div className="fn-category fn-item">Ct</div>
                <div className="fn-jfu fn-item">Jfu</div>
              </div>
            )}
            <div
              className="fn-item"
              onClick={() => {
                setFnNavOpen(!fnNavOpen);
              }}
            >
              O
            </div>
          </div>
        </div>
      )}
      <header className="header">
        <div className="dummy-header" ref={dummyHeaderRef}></div>
        <div className="header-container" ref={headerRef}>
          <HeaderExtra />

          <div className="main-header center">
            <MainHeader />
          </div>
          <div
            className="header-category-container center full-size"
            ref={categoriesContainerRef}
          >
            <div className="header-category full-size">
              <div className="header-category-js full-size" ref={categoriesRef}>
                <div className="header-category-js-2 center full-size">
                  {/* Header Catergory */}

                  <div
                    className="hdct2"
                    id="outer"
                    style={{
                      gridTemplateColumns: "repeat(12, 1fr)",
                    }}
                  >
                    {categoryLinks.map((item) => {
                      return (
                        <Link
                          key={item.id}
                          className="hdct2-container center react-link"
                          to={`/search/${item.name}`}
                        >
                          <div key={item.id} className="hdct2-container-2">
                            <div className="hdct2-name">{item.name}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="header-category-js full-size"
                ref={categoriesRef2}
                style={{ display: "none" }}
              >
                <div className="header-category-js-2 full-size center">
                  {/* Header Catergory 2 */}

                  <HeaderCategory2 />

                  {/* end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <HeroImage />

        <HeroBottomLinks categoriesRef2Trigger={categoriesRef2Trigger} />

        <FlashSale />

        <DarazMall />

        <MainBodyCategory />

        <JustForYou />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
