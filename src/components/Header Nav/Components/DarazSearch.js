import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BsSearch } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const DarazSearch = ({ miniSearchCanceler }) => {
  const [isSearchSuggestion, setIsSearchSuggestion] = useState(false);
  const [searchProductInput, setSearchProductInput] = useState("");
  const [searchKeyWords, setSearchKeyWords] = useState([]);

  const navigate = useNavigate();
  const deleteKeyWord = (id) => {
    let cashedSearchKeyWords = searchKeyWords;

    let finalKeyWords = cashedSearchKeyWords.filter((item) => item.id !== id);

    setSearchKeyWords(finalKeyWords);
    localStorage.setItem("names", JSON.stringify(finalKeyWords));
    setIsSearchSuggestion(true);
  };
  useEffect(() => {
    if (localStorage.getItem("names")) {
      var storedNames = JSON.parse(localStorage.getItem("names"));
      setSearchKeyWords(storedNames);
    }
  }, []);

  const searchProductSubmit = (e) => {
    e.preventDefault();
    if (searchProductInput) {
      let cachedKeywords = searchKeyWords;

      cachedKeywords.unshift({
        id: new Date().getTime(),
        name: searchProductInput,
      });

      setSearchKeyWords(cachedKeywords);

      localStorage.setItem("names", JSON.stringify(searchKeyWords));

      navigate(`/search/${searchProductInput}`);
      // setSearchProductInput("");
      setIsSearchSuggestion(false);
      miniSearchCanceler();
    }
  };
  const suggestionSearch = (keyword, del) => {
    navigate(`/search/${keyword}`);
    setSearchProductInput(keyword);
    setIsSearchSuggestion(false);
    miniSearchCanceler();
  };

  return (
    <form
      className="daraz-search-container"
      style={{ position: "relative", zIndex: "1" }}
      onSubmit={(e) => searchProductSubmit(e)}
    >
      <div
        className="search-input-container center full-size"
        style={{ position: "relative" }}
      >
        <input
          value={searchProductInput}
          type="text"
          className="search-input"
          placeholder="Search in Daraz"
          onClick={() => {
            setIsSearchSuggestion(true);
          }}
          onChange={(e) => {
            setSearchProductInput(e.target.value);
          }}
        />
        {isSearchSuggestion && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translate(-50%, -50%)",
              height: "70%",
              width: "Auto",
            }}
            className="center"
            onClick={() => {
              setSearchProductInput("");
            }}
          >
            <ImCancelCircle style={{ height: "70%", width: "Auto" }} />
          </div>
        )}
      </div>

      <button className=" search-btn center full-size" onClick={(e) => {}}>
        <BsSearch style={{ height: "100%", width: "auto" }} />
      </button>

      {isSearchSuggestion && (
        <div className="search-suggestions-container " style={{ zIndex: "10" }}>
          <div className="search-suggestions">
            <div className="search-history-container">
              <div className="sh-title">Search History</div>
              <div
                className="sh-clear"
                onClick={(e) => {
                  setSearchKeyWords([]);
                  localStorage.setItem("names", JSON.stringify([]));
                }}
              >
                Clear
              </div>
            </div>
            <div className="search-history-keywords">
              {searchKeyWords.map((item) => {
                return (
                  <div key={item.id} className="search-history-keyword">
                    <div
                      className="sh-name"
                      onClick={(e) => {
                        suggestionSearch(item.name);
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="sh-keyword-del"
                      onClick={(e) => {
                        deleteKeyWord(item.id);
                      }}
                    >
                      <ImCancelCircle />
                    </div>
                  </div>
                );
              })}
              {/* {<div>{searchProductInput}</div>} */}
            </div>
          </div>
        </div>
      )}
      {isSearchSuggestion && (
        <div
          className="full-search-canceler"
          style={{ zIndex: "-1" }}
          onClick={() => {
            setIsSearchSuggestion(false);
            miniSearchCanceler();
          }}
        ></div>
      )}
    </form>
  );
};

export default DarazSearch;
