import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Home/Footer";

import HeaderNav from "../../Header Nav/HeaderNav";
import { useGlobalContext } from "../../Context";
import roundNumber from "../../shared/roundNumber";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("bestmatch");
  const [searchResult, setSearchResult] = useState([]);
  const [sortedFinal, setSortedFinal] = useState([]);
  const [moreItems, setMoreItems] = useState([]);

  const { keyWord } = useParams();

  const { API } = useGlobalContext();

  const getData = async () => {
    setIsLoading(true);
    const { data } = await API.get(`/product/flash?search=&limit=6&skip=0`);
    setMoreItems(data.posts);
    setIsLoading(false);
  };

  const getSearchResult = async () => {
    setIsLoading(true);
    const { data } = await API.get(`/search/${keyWord.toLowerCase()}`);
    setSearchResult(data.posts);
    setSortedFinal(data.posts);
    setIsLoading(false);
  };
  useEffect(() => {
    getSearchResult();
  }, [keyWord]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortData = (option) => {
    if (option === "pricelowtohigh") {
      let sorted = searchResult.sort(
        (item, item2) => parseInt(item.price) - parseInt(item2.price)
      );
      setSortedFinal(sorted);
    } else if (option === "pricehightolow") {
      let sorted = searchResult.sort(
        (item, item2) => parseInt(item2.price) - parseInt(item.price)
      );
      setSortedFinal(sorted);
    } else {
      setSortedFinal(searchResult);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="full-size" style={{ overflow: "hidden" }}>
      <HeaderNav />

      <main className="search-main full-size">
        <div className="sm-header">
          <div className="sm-header-left">
            "{sortedFinal.length}" items found for "{keyWord}"
          </div>
          <div className="sm-header-right">
            <div className="search-sorting-title">Sort By: </div>
            <div className="custom-select">
              <select
                id=""
                value={sortOption}
                className="s-sort-select"
                onChange={(e) => {
                  let SelectedOption = e.target.value;
                  setSortOption(SelectedOption);
                  sortData(e.target.value);
                }}
              >
                <option value="bestmatch" className="s-sort-options">
                  Best Match
                </option>
                <option value="pricelowtohigh" className="s-sort-options">
                  Price low to high
                </option>
                <option value="pricehightolow" className="s-sort-options">
                  Price High to Low
                </option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="search-loading">
            <img src="/loading.gif" alt="loading" />
          </div>
        ) : (
          <div className="full-Size">
            {sortedFinal.length < 1 ? (
              <div className="search-fail">
                No Products Found with "{keyWord}"
              </div>
            ) : (
              <div className="search-sort-container">
                <div className="s-sort-main">
                  <div className="s-sort-cards-container">
                    {sortedFinal.map((item) => {
                      return (
                        <Link
                          className="fs-cards react-link-card"
                          key={item._id}
                          to={`/products/${item._id}`}
                        >
                          <img
                            className="fs-product-image"
                            src={`${item.images[0]?.img}`}
                            alt="daraz-product"
                          />
                          <div className="fs-product-info">
                            <div className="fsproduct-name">{item.name}</div>
                            <div className="fs-product-final-price">
                              ৳
                              {roundNumber(
                                item.price - (item.price / 100) * item.discount
                              )}
                            </div>
                            <div className="fs-product-discount-info">
                              <div className="fs-product-org-price">
                                ৳{roundNumber(item.price)}
                              </div>
                              <div className="fs-product-discount-price">
                                -{item.discount}%
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <div
        className="flash-sale-container "
        style={{
          backgroundColor: "#C5E5FC",
          paddingBottom: "1vh",
        }}
      >
        <div className="flash-sale-header-name">More Products</div>

        <div className="flash-sale-main" style={{ marginBottom: "3vh" }}>
          {isLoading ? (
            <div className="search-loading">
              <img src="/loading.gif" alt="loading" />
            </div>
          ) : (
            <div className="fs-cards-container auto-x-overflow scrollbar-style">
              {moreItems.map((item) => {
                return (
                  <Link
                    className="fs-cards react-link-card"
                    key={item._id}
                    to={`/products/${item._id}`}
                  >
                    <img
                      className="fs-product-image"
                      src={`${item.images[0]?.img}`}
                      alt="daraz-product"
                      style={{ width: "180px" }}
                    />
                    <div className="fs-product-info">
                      <div className="fsproduct-name">{item.name}</div>
                      <div className="fs-product-final-price">
                        ৳
                        {roundNumber(
                          item.price - (item.price / 100) * item.discount
                        )}
                      </div>
                      <div className="fs-product-discount-info">
                        <div className="fs-product-org-price">
                          ৳{roundNumber(item.price)}
                        </div>
                        <div className="fs-product-discount-price">
                          -{item.discount}%
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
