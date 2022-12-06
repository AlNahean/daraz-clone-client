import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer";
import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../../Context";
import HeaderNav from "../../Header Nav/HeaderNav";
import { darazProducts } from "../../ul-data";
import roundNumber from "../../shared/roundNumber";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [currentProduct, setCurrentProduct] = useState(darazProducts[0]);
  const { cartItems, setCartItems, showRedMsg, userInfo, API } =
    useGlobalContext();

  const [productQuantity, setProductQuantity] = useState(1);
  const [showCaseImgId, setShowCaseImgId] = useState(0);
  const [showCaseImage, setShowCaseImage] = useState(
    currentProduct?.images[showCaseImgId]?.img
  );

  const { name } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    setIsLoading(true);
    const { data } = await API.get(`/product/single?id=${name}`); //productId
    setCurrentProduct(data.post);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setShowCaseImage(currentProduct?.images[showCaseImgId]?.img);
  }, [showCaseImgId, currentProduct]);

  const setQuantity = (e) => {
    let quantity = productQuantity;

    if (e === "minus" && quantity !== 0) {
      setProductQuantity(quantity - 1);
    }
    if (e === "plus") {
      setProductQuantity(quantity + 1);
    }
  };
  const setTheShowCaseImage = (id) => {
    setShowCaseImgId(id);
    setShowCaseImage(currentProduct.images[showCaseImgId].img);
  };

  const addToCart = () => {
    let cachedItems = cartItems;

    let cachedItem = { ...currentProduct, quantity: productQuantity };

    let isExists = cachedItems.find((item) => item._id === cachedItem._id);

    if (!isExists) {
      cachedItems.push(cachedItem);

      setCartItems(cachedItems);
      showRedMsg({ name: "Item Added" });
    } else {
      showRedMsg({ name: "Item Already Exists" });
    }
  };

  const deleteItem = async (id) => {
    const { data } = await API.delete(`/product/${id}`);
    if (data.type === "F") {
      showRedMsg({ name: data.msg });
    } else {
      showRedMsg({ name: "Product Delete Successfull " });
    }
    navigate("/home");
  };

  const editProduct = async (id) => {
    navigate(`/edit-product/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="full-size">
      <HeaderNav />

      {isLoading ? (
        <div className="search-loading">
          <img src="/loading.gif" alt="loading" />
        </div>
      ) : (
        <main style={{}} className="full-size">
          <div className="dz-products-container">
            <div className="dz-products-images center">
              <div className="product-images-container full-size">
                <div className="product-image">
                  <img
                    style={{ maxHeight: "50vh" }}
                    src={`${showCaseImage}`}
                    alt="ProductImage"
                    className="full-size"
                  />
                </div>
                <div className="more-product-images-container">
                  {currentProduct?.images.map((item, index) => {
                    return (
                      <div
                        className="product-more-images full-size center"
                        key={index}
                      >
                        <img
                          src={`${item.img}`}
                          alt="moreimage"
                          className={`indi-product-image ${
                            showCaseImgId === index && "indi-product-border"
                          }`}
                          onClick={(e) => {
                            setTheShowCaseImage(index);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="dz-products-main center full-size">
              <div className="products-main-info-container full-size">
                <h3 className="dz-product-name">{currentProduct?.name}</h3>
                {/* <div className="dz-product-info-mid">
                <div className="product-rating-container">Rating</div>

                <div className="product-info-mid-right">Share</div>
              </div> */}
                <div className="product-pricing">
                  <div className="product-final-price">
                    ৳
                    {roundNumber(
                      currentProduct?.price -
                        (currentProduct?.price / 100) * currentProduct?.discount
                    )}
                  </div>
                  <div className="product-discount-info">
                    <div className="product-org-price">
                      ৳{roundNumber(currentProduct?.price)}
                    </div>
                    <div className="product-discount-price">
                      -{currentProduct?.discount}%
                    </div>
                  </div>
                </div>

                {userInfo.id !== currentProduct.uploaderId && (
                  <div className="product-quantity">
                    <div className="pq-header">Quantity</div>

                    <div
                      className="pq-minus"
                      onClick={(e) => {
                        setQuantity("minus");
                      }}
                    >
                      <AiOutlineMinus
                        style={{ height: "80%", width: "auto" }}
                      />
                    </div>
                    <div className="pq-amount">{productQuantity} </div>
                    <div
                      className="pq-plus"
                      onClick={(e) => {
                        setQuantity("plus");
                      }}
                    >
                      <AiOutlinePlus style={{ height: "80%", width: "auto" }} />
                    </div>
                  </div>
                )}

                <div className="product-total-price">
                  Total Price: ৳
                  {roundNumber(
                    (currentProduct?.price -
                      (currentProduct?.price / 100) *
                        currentProduct?.discount) *
                      productQuantity
                  )}
                </div>

                <div className="product-buying-actions">
                  {userInfo.id !== currentProduct.uploaderId && (
                    <div className="dz-buy-product">Buy Now</div>
                  )}

                  {userInfo.id !== currentProduct.uploaderId && (
                    <div
                      className="add-to-cart"
                      onClick={() => {
                        addToCart();
                      }}
                    >
                      Add to Cart
                    </div>
                  )}
                  {userInfo.id === currentProduct.uploaderId && (
                    <div
                      className="dz-buy-product"
                      onClick={() => {
                        editProduct(currentProduct._id);
                      }}
                    >
                      Edit
                    </div>
                  )}

                  {userInfo.id === currentProduct.uploaderId && (
                    <div
                      className="add-to-cart"
                      onClick={() => {
                        deleteItem(currentProduct._id);
                      }}
                    >
                      Delete
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="dz-products-more-info center">
              <h3 className="more-product-info">More Info</h3>
              <h5>No More Data Provided</h5>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Products;
