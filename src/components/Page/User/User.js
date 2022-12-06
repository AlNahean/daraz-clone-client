import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

import { AiFillCamera } from "react-icons/ai";

import { useGlobalContext } from "../../Context";
import Footer from "../Home/Footer";
import HeaderNav from "../../Header Nav/HeaderNav";
import queryString from "query-string"; //V.V.I
import roundNumber from "../../shared/roundNumber";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const profileInput = useRef(null);

  const [currentProducts, setCurrentProducts] = useState([]);
  const location = useLocation();
  const [file, setFile] = useState();

  const [fetchData, setFetchData] = useState({
    keyword: "",
    fetched: 0,
    length: 0,
    limit: 12,
    skip: 0,
    valid: true,
    totalLength: 1000,
  });

  const { userInfo, setUserInfo, showRedMsg, localizingUserInfo } =
    useGlobalContext();

  const [submitProfile, setSubmitProfile] = useState(false);

  //vvi
  const [searchQuery, setSearchQuery] = useState(
    queryString.parse(location.search)
  );

  const { API } = useGlobalContext();

  const getData = async () => {
    setIsLoading(true);
    const { data } = await API.get(
      `/product/userProducts?search=&limit=12&skip=0&id=${searchQuery.id}`
    );
    setCurrentProducts(data.posts);
    setFetchData({
      ...fetchData,
      length: data.posts.length + fetchData.length,
      skip: data.posts.length,
      valid:
        fetchData.length < 18 && data.postsArrayLength > fetchData.length
          ? true
          : false,
      totalLength: data.postsArrayLength,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const submitProfileImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await API.patch(`/user/${userInfo.id}`, formData);

      if (data.type === "F") {
        showRedMsg(data);
      }
      await localizingUserInfo(userInfo);
      await setSubmitProfile(false);
    } catch {}
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file); //must use query selector here
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleProfileChange = async (e, selector) => {
    var selectInput = document.querySelector("#profileImg").files[0];
    const selectedFile = document.querySelector("#profileImg").files[0];
    setFile(selectedFile);

    if (selectInput !== undefined) {
      const base64File = await toBase64(selectInput);
      setUserInfo({
        ...userInfo,
        img: base64File,
      });
      setSubmitProfile(true);
    }
  };

  const reFetchData = async () => {
    setIsLoading(true);

    if (fetchData.valid === true) {
      const { data } = await API.get(
        `/product/userProducts?search=&limit=12&skip=${fetchData.skip}&id=${searchQuery.id}`
      );

      let cachedFetchData = {
        ...fetchData,
        skip: [...currentProducts, ...data.posts].length,
        length: [...currentProducts, ...data.posts].length,
        valid:
          [...currentProducts, ...data.posts].length < 27 &&
          data.postsArrayLength > [...currentProducts, ...data.posts].length
            ? true
            : false,
        totalLength: data.postsArrayLength,
      };

      setFetchData(cachedFetchData);
      setCurrentProducts([...currentProducts, ...data.posts]);
    }
    setIsLoading(false);
  };
  const reFetchProduct = () => {
    reFetchData();
  };
  return (
    <div
      className="full-size"
      style={{ backgroundColor: "#C5E5FC", paddingBottom: "1vh" }}
    >
      <HeaderNav />
      <div className="user-main">
        <div className="user-main-header">
          {/* <div className="user-info-container">
            <div className="user-image-container">
              <img className="user-image" src="favicon.ico" alt="" />
            </div>
            <div className="user-name">Nahean</div>
          </div> */}

          <div
            className="center"
            style={{
              height: "45vh",
              width: "100%",

              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "30vh 10vh, contain",
              position: "relative",
            }}
          >
            <h2
              style={{
                position: "absolute",
                bottom: "0%",
                left: "0%",
                height: "5vh",
                // width: "10vh",
                // backgroundColor: "#0C88EF",
                transform: "translate(1rem, 0rem)",
                textAlign: "center",
                fontHeight: "2vh",
              }}
            >
              {userInfo.name}
            </h2>
            <img
              src={`${
                userInfo.coverImg
                  ? userInfo.coverImg
                  : "default-cover-image.jpg"
              }`}
              //src={coverFile} //solved--add http in backend while saving
              alt=""
              style={{
                height: "30vh",
                width: "100%",
                position: "absolute",
                top: "0px",
              }}
            />
            <div
              className="center"
              style={{
                width: "15vh",
                height: "15vh",
                position: "absolute",
                top: "30vh",
                // bottom: "1vh",
                // left: "1rem",

                transform: "translateY(-50%)",
                left: "1rem",
              }}
            >
              <img
                src={`${
                  userInfo.img ? userInfo.img : "default-person-image.jpg"
                }`}
                alt=""
                style={{
                  width: "15vh",
                  height: "15vh",
                  borderRadius: "100%",
                }}
              />
              <div
                className="center"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "90%",
                  height: "3.8vh",
                  width: "3.8vh",
                  backgroundColor: "black",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "5vh",
                }}
              >
                <div
                  className="center"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={() => {
                    profileInput.current.click();
                  }}
                >
                  <input
                    id="profileImg"
                    type="file"
                    style={{ display: "none" }}
                    ref={profileInput}
                    onChange={(e) => {
                      const selector = "profileImg";
                      handleProfileChange(e, selector);
                    }}
                  />
                  <AiFillCamera
                    style={{
                      height: "3vh",
                      width: "3vh",
                    }}
                  />
                </div>

                {submitProfile && (
                  <div
                    className="center"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "0%",
                      height: "5vh",
                      width: "10vh",
                      backgroundColor: "#0C88EF",
                      transform: "translate(120%, -50%)",
                      textAlign: "center",
                      fontHeight: "4vh",
                    }}
                    onClick={(e) => {
                      submitProfileImage();
                    }}
                  >
                    Submit
                  </div>
                )}
              </div>
            </div>

            <div
              className="center"
              style={{
                display: "none",
                position: "absolute",
                top: "80%",
                left: "90%",
                height: "6vh",
                width: "6vh",

                backgroundColor: "black",
                // transform: "translate(-50%, -50%)",
                borderRadius: "5vh",
              }}
            >
              <div
                className="center"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                onClick={() => {
                  // coverInput.current.click();
                }}
              >
                <AiFillCamera
                  style={{
                    height: "4vh",
                    width: "4vh",
                    // color: "red",
                  }}
                />
              </div>
              {/* {submitCover && (
            <div
              className="center"
              style={{
                position: "absolute",
                top: "100%",
                right: "0%",
                height: "5vh",
                width: "10vh",
                backgroundColor: "#0C88EF",
                transform: "translate(0%, 20%)",
                textAlign: "center",
                fontHeight: "4vh",
              }}
              // onClick={(e) => {
              //   submitCoverImage();
              // }}
            >
              Submit
            </div>
          )} */}
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="search-loading">
            <img src="/loading.gif" alt="loading" />
          </div>
        ) : (
          <div
            className="search-sort-container"
            style={{
              marginBottom: "3vh",
            }}
          >
            <div className="flash-sale-header-name">Your Products</div>
            <div className="s-sort-main">
              <div className="s-sort-cards-container">
                {currentProducts.map((item) => {
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
              {fetchData.valid && (
                <div className="jfu-footer">
                  <button
                    className="jfu-footer-more-btn"
                    onClick={(e) => {
                      reFetchProduct();
                    }}
                  >
                    More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default User;
