import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import HeaderNav from "../../Header Nav/HeaderNav";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import roundNumber from "../../shared/roundNumber";
const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems } = useGlobalContext();

  // const getData = async () => {
  //   // setIsLoading(true);
  //   // setIsLoading(false);
  //   const { data } = await API.get("/product");

  //   let finalItems = data.posts.map((item) => {
  //     item.quantity = 1;

  //     return item;
  //   });

  //   setCartItems(finalItems);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    // let data = cartItems.map((item) => {
    //   let {data} =
    // });
    // getData();
  }, []);

  const setQuantity = (e, q, id) => {
    // let quantity = productQuantity;

    // let cachedItems = cartItems;

    // let cachedItem = "";

    let finalItems = cartItems
      .map((item) => {
        if (item._id === id) {
          if (q === "minus" && item.quantity !== 0) {
            item.quantity = item.quantity - 1;
          }
          if (q === "plus") {
            item.quantity = item.quantity + 1;
          }

          return item;
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    setCartItems(finalItems);

    // if (q === "minus" && quantity !== 0) {
    //   setProductQuantity(quantity - 1);
    // }
    // if (q === "plus") {
    //   setProductQuantity(quantity + 1);
    // }
  };
  return (
    <div className="full-size">
      <HeaderNav />

      {isLoading ? (
        <div className="search-loading">
          <img src="/loading.gif" alt="loading" />
        </div>
      ) : (
        <div className="full-size">
          {cartItems.length < 1 ? (
            <div className="center full-size" style={{ height: "75vh" }}>
              No Items added to the cart
            </div>
          ) : (
            <main className="cart-main" style={{ width: "100%" }}>
              <div className="cart-items-container">
                {cartItems.map((item) => {
                  return (
                    <div className="full-size" key={item._id}>
                      <div className="cart-cards">
                        <Link
                          className="cart-product-image-container"
                          to={`/products/${item._id}`}
                        >
                          <img
                            src={item.images[0].img}
                            alt="sdsdsd"
                            className="cart-product-image"
                          />
                        </Link>
                        <div className="product-info" style={{}}>
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
                          <div className="product-quantity">
                            <div className="pq-header">Quantity</div>

                            <div
                              className="pq-minus"
                              onClick={(e) => {
                                setQuantity(e, "minus", item._id);
                              }}
                            >
                              <AiOutlineMinus
                                style={{ height: "80%", width: "auto" }}
                              />
                            </div>
                            <div className="pq-amount">{item.quantity} </div>
                            <div
                              className="pq-plus"
                              onClick={(e) => {
                                setQuantity(e, "plus", item._id);
                              }}
                            >
                              <AiOutlinePlus
                                style={{ height: "80%", width: "auto" }}
                              />
                            </div>
                          </div>
                          <div className="cart-total-product-price">
                            Total Price: ৳
                            {roundNumber(
                              (item.price -
                                (item.price / 100) * item.discount) *
                                item.quantity
                            )}
                            {/* {console.log(
                              (
                                (item.price -
                                  (item.price / 100) * item.discount) *
                                item.quantity
                              ).toFixed(2)
                            )} */}
                            {/* {() => {
                              let num =
                                (item.price -
                                  (item.price / 100) * item.discount) *
                                item.quantity;

                              return num;
                            }} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
