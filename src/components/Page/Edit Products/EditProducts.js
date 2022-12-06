import React, { useState, useEffect } from "react";
import HeaderNav from "../../Header Nav/HeaderNav";
import Footer from "../Home/Footer";
import { MdOutlineCancelPresentation } from "react-icons/md";

import { useNavigate, useParams } from "react-router-dom";

import { useGlobalContext } from "../../Context";

const UploadProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { productid } = useParams();
  const {
    // logedIn,
    // setIsLoggedIn,
    showRedMsg,
    API,
    userInfo,
    topNottification,
    setTopNottification,
  } = useGlobalContext();
  const navigate = useNavigate();

  // const [test, setTest] = useState(new Date().getTime());
  // const imageInput = useRef(null);
  // const [preview, setPreview] = useState([]);

  const [productInfoUpload, setProductInfoUpload] = useState({
    name: "",
    price: 0,
    discount: 0,
    images: [],
    keywords: [{ id: 1639378535414, name: "Flash Sale" }],
    uploader: userInfo.name,

    uploaderId: userInfo.id,
  });

  const [subKeyWord, setSubKeyWord] = useState("");

  // const [uploadProgress, setUploadProgress] = useState(0);

  const getProduct = async (id) => {
    setIsLoading(true);
    const { data } = await API.get(`/product/single?id=${id}`);
    setProductInfoUpload({
      name: data.post.name,
      price: data.post.price,
      discount: data.post.discount,
      images: data.post.images,
      keywords: data.post.keyWords2,
      uploader: data.post.uploader,

      uploaderId: data.post.uploaderId,
    });

    // console.log("ProductInfoUpload", {
    //   name: data.post.name,
    //   price: data.post.price,
    //   discount: data.post.discount,
    //   images: data.post.images,
    //   keywords: data.post.keyWords2,
    //   uploader: data.post.uploader,

    //   uploaderId: data.post.uploaderId,
    // });
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct(productid);
  }, []);

  // useEffect(() => {
  //   if (!logedIn) {
  //     navigate("/register");
  //     showRedMsg({ name: "You Need to Log in to sell on daraz" });
  //   }
  // }, [logedIn]);

  const handleProductEditSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", productInfoUpload.name);
    formData.append("price", productInfoUpload.price);
    formData.append("discount", productInfoUpload.discount);
    formData.append("keywords", JSON.stringify(productInfoUpload.keywords));

    formData.append("uploader", productInfoUpload.uploader);
    formData.append("uploaderId", productInfoUpload.uploaderId);

    // formData.append("images", productInfoUpload.images);

    // let cachedArray = productInfoUpload.images.map((item) => {
    //   return item.src;
    // });
    // formData.append("images", cachedArray);

    // productInfoUpload.images.forEach((item, index) => {
    //   formData.append(`image${index}`, item.src);
    // });

    for (let i = 0; i < productInfoUpload.images.length; i++) {
      formData.append("images", productInfoUpload.images[i].src);
    }

    // formData.append("image0", productInfoUpload.images[0].src);
    // // formData.append("images1", productInfoUpload.images[1].src);

    let { data } = await API.patch(`/product/${productid}`, formData, {
      onUploadProgress: (progressEvent) => {
        const progress = parseInt(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
        // Update state here
        // setUploadProgress(progress);
        setTopNottification({
          ...topNottification,
          type: "progress",
          progress,
          name: "",
          bg: "#ff7302",
          color: "white",
        });
      },
    });

    navigate(`/products/${productid}`);

    showRedMsg({ name: "Edit Successfull" });
  };

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.readAsDataURL(file); //must use query selector here
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = (error) => reject(error);
  //   });

  // const selectImage = async () => {
  //   // await imageInput.current.click();
  //   let selectInput = await document.querySelector("#inputImage").files[0];
  //   if (selectInput !== undefined) {
  //     let cashedImageArray = await productInfoUpload.images;

  //     const imageString = await toBase64(selectInput);

  //     let commonId = new Date().getTime();

  //     await cashedImageArray.push({
  //       id: commonId,
  //       src: selectInput,
  //     });
  //     setPreview([
  //       ...preview,
  //       {
  //         id: commonId,
  //         src: imageString,
  //       },
  //     ]);

  //     await setProductInfoUpload({
  //       ...productInfoUpload,
  //       images: cashedImageArray,
  //     });
  //   }
  // };
  // const removeImage = (e) => {
  //   let cashedImageArray = productInfoUpload.images;
  //   let cachedPreviewArray = preview;

  //   let finalImagesArray = cashedImageArray.filter((item) => item.id !== e);
  //   let finalPreviewArray = cachedPreviewArray.filter((item) => item.id !== e);

  //   setProductInfoUpload({ ...productInfoUpload, images: finalImagesArray });
  //   setPreview(finalPreviewArray);
  // };
  const addKeyword = () => {
    if (subKeyWord !== "") {
      let casheKeyword = productInfoUpload.keywords;

      casheKeyword.push({
        id: new Date().getTime(),
        name: subKeyWord.toLowerCase(),
      });

      setProductInfoUpload({ ...productInfoUpload, keywords: casheKeyword });

      setSubKeyWord("");
    }
  };

  const removeKeyWord = (e) => {
    let cashedItems = productInfoUpload.keywords;

    let finalItems = cashedItems.filter((item) => item.id !== e);

    setProductInfoUpload({ ...productInfoUpload, keywords: finalItems });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //---------------------For Api Request----------------//
  //const formData = new FormData();
  // formData.append("image", storyInfo.img);
  // formData.append("uploaderName", storyInfo.uploaderName);
  // formData.append("uploaderId", storyInfo.uploaderId);

  const ggg = async (e) => {
    let formData = new FormData();
    // formData.append("images", e.target.files);

    // e.target.files.forEach((item) => {
    //   formData.append("images", item);
    // });

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("images", e.target.files[i]);
    }
    let { data } = await API.post("/product/w/", formData);
  };

  return (
    <div className="full-size">
      <HeaderNav />
      {isLoading ? (
        <div className="search-loading">
          <img src="/loading.gif" alt="loading" />
        </div>
      ) : (
        <div className="upload-products-main full-size">
          <div className="upload-products-main-container">
            <form
              className="log-in-form"
              onSubmit={(e) => {
                handleProductEditSubmit(e);
              }}
            >
              {/* <img
              src="daraz-logo.png"
              alt="daraz"
              style={{ height: "2.6rem", width: "auto" }}
            /> */}

              {/* <div className="dr-image-input-container">
              <input
                id="inputImage"
                ref={imageInput}
                type="file"
                alt="sdhdj"
                style={{ display: "none" }}
                onChange={(e) => {
                  selectImage();
                }}
              />

              {productInfoUpload.images.map((item, index) => {
                return (
                  <div className="dr-image-input-item" key={item.id}>
                    <img
                      src={preview[index]?.src}
                      alt={index}
                      className="full-size"
                    />
                    <div
                      className="cross-image"
                      onClick={(e) => {
                        removeImage(item.id);
                      }}
                    >
                      <MdCancel className="ps-image-cross" />
                    </div>
                  </div>
                );
              })}

              {productInfoUpload.images.length <= 2 && (
                <div
                  className="dr-image-input-item"
                  onClick={(e) => {
                    imageInput.current.click();
                  }}
                >
                  <AiFillPlusSquare className="full-size" />
                </div>
              )}
            </div> */}

              <div className="dr-image-input-container">
                {/* <input
                id="inputImage"
                ref={imageInput}
                type="file"
                alt="sdhdj"
                style={{ display: "none" }}
                onChange={(e) => {
                  selectImage();
                }}
              /> */}

                {productInfoUpload.images.map((item, index) => {
                  return (
                    <div className="dr-image-input-item" key={index}>
                      <img src={item?.img} alt={index} className="full-size" />
                      {/* <div
                      className="cross-image"
                      onClick={(e) => {
                        removeImage(item.id);
                      }}
                    >
                      <MdCancel className="ps-image-cross" />
                    </div> */}
                    </div>
                  );
                })}
              </div>

              <div className="dr-input-email">
                <label style={{ alignSelf: "flex-start" }}>Product Name</label>
                <input
                  className="register-input"
                  value={productInfoUpload.name}
                  name="name"
                  type="name"
                  placeholder="Enter Product Name"
                  onChange={(e) => {
                    setProductInfoUpload({
                      ...productInfoUpload,
                      name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="dr-input-password">
                <label style={{ alignSelf: "flex-start" }}>Price</label>
                <input
                  className="register-input"
                  value={productInfoUpload.price}
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                  onChange={(e) => {
                    setProductInfoUpload({
                      ...productInfoUpload,
                      price: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="dr-input-password">
                <label style={{ alignSelf: "flex-start" }}>
                  Discount: {productInfoUpload.discount}%
                </label>
                <input
                  className="register-input"
                  value={productInfoUpload.discount}
                  name="discount"
                  type="range"
                  min="1"
                  max="100"
                  placeholder="Enter Discount"
                  onChange={(e) => {
                    setProductInfoUpload({
                      ...productInfoUpload,
                      discount: e.target.value,
                    });
                  }}
                  required
                />
              </div>

              <div className="dz-add-keyword">
                <label style={{ alignSelf: "flex-start" }}>Add Keywords</label>
                <div className="keyword-input-container">
                  <input
                    className="register-input"
                    value={subKeyWord}
                    name="name"
                    type="name"
                    placeholder="Enter Keyword"
                    onChange={(e) => {
                      setSubKeyWord(e.target.value);
                    }}
                  />
                  <div
                    className="add-k-btn"
                    onClick={(e) => {
                      addKeyword();
                    }}
                  >
                    Add
                  </div>
                </div>
                <div className="added-keywords-container">
                  {productInfoUpload.keywords.map((item) => {
                    return (
                      <div className="added-keywords" key={item.id}>
                        {item.name}

                        <div
                          className="added-keyword-cross"
                          onClick={(e) => {
                            removeKeyWord(item.id);
                          }}
                        >
                          <MdOutlineCancelPresentation
                            style={{
                              color: "red",
                              width: "2rem",
                              height: "1.5rem",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="dr-login-submit full-size center">
                <button className="dz-login-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <input
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={(e) => {
          ggg(e);
        }}
      />
      <Footer />
    </div>
  );
};

export default UploadProduct;
