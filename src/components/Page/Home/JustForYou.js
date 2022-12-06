import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import { darazProducts } from "../../ul-data";
import roundNumber from "../../shared/roundNumber";

const JustForYou = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [fetchData, setFetchData] = useState({
    keyword: "",
    fetched: 0,
    length: 0,
    limit: 12,
    skip: 0,
    valid: true,
    totalLength: 1000,
  });
  const { API } = useGlobalContext();

  const getData = async () => {
    const { data } = await API.get(`/product/flash?search=&limit=12&skip=0`);
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

    // console.log("Get DATa", {
    //   ...fetchData,
    //   length: data.posts.length + fetchData.length,
    //   skip: data.posts.length,
    //   valid:
    //     fetchData.length < 18 && data.postsArrayLength > fetchData.length
    //       ? true
    //       : false,
    //   totalLength: data.postsArrayLength,
    // });
  };

  const reFetchData = async () => {
    if (fetchData.valid === true) {
      const { data } = await API.get(
        `/product/flash?search=&limit=12&skip=${fetchData.skip}`
      );

      // console.log([...currentProducts, ...data.posts]);

      // console.log(
      //   data.postsArrayLength > [...currentProducts, ...data.posts].length
      //     ? true
      //     : false
      // );

      // console.log(
      //   data.postsArrayLength > [...currentProducts, ...data.posts].length
      // );

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

      // {
      //   ...fetchData,
      //   skip: [...currentProducts, ...data.posts].length,
      //   length: [...currentProducts, ...data.posts].length,
      //   valid:
      //     fetchData.length < 1000 && data.postsArrayLength < fetchData.length
      //       ? true
      //       : false,
      //   totalLength: data.postsArrayLength,
      // }
    }
  };

  const reFetchProduct = () => {
    // setFetchData({...fetchData,
    //   skip: fetchData.skip + fetchData.fetched,
    //   valid: fetchData.length < 11 ? true : false,
    // });
    reFetchData();
  };

  useEffect(() => {
    // setFetchData({...fetchData,
    //   valid: fetchData.length < 18 ? true : false,
    // });
  }, [fetchData]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="just-for-you-container">
      <div className="jfu-header">
        <div className="jfu-header-name">Just For You</div>
        <div className="jfu-header-more"></div>
      </div>
      <div className="jfu-main">
        <div className="jfu-cards-container scrollbar-style">
          {currentProducts.map((item) => {
            return (
              <Link
                className="fs-cards react-link-card"
                key={item._id}
                to={`/products/${item?._id}`}
              >
                <img
                  className="fs-product-image"
                  src={item?.images[0]?.img}
                  alt="daraz-product"
                />
                <div className="fs-product-info">
                  <div className="fsproduct-name">{item?.name}</div>
                  <div className="fs-product-final-price">
                    ৳
                    {roundNumber(
                      item.price - (item?.price / 100) * item?.discount
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
  );
};

export default JustForYou;
