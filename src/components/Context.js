import React, { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";

import Reducer from "./Reducer";

const AppContext = React.createContext();
const initialState = {
  loading: true,
  firstName: "Nahean",
  lastName: "Fardous",
};

//Log In Bug Fix
let logCheck = false;
const userInfoCheck = () => {
  let getUserInfo = localStorage.getItem("userInfo");
  let parsedUser = "";
  if (getUserInfo) {
    parsedUser = JSON.parse(getUserInfo);
  }
  if (parsedUser.tokenExp) {
    if (parsedUser.tokenExp < new Date().getTime()) {
      // console.log("token Expired");
      // localStorage.setItem("access-token", "");
      // localStorage.setItem("userInfo", "");
      logCheck = false;
    } else {
      // console.log("token Valid");
      logCheck = true;
      if (parsedUser.name) {
        logCheck = true;
      }
    }
  } else {
    logCheck = false;
  }
  console.log(logCheck);
};
userInfoCheck();

//**********
//  Axios
//**********

//  baseURL: "https://daraz-clone-v1.herokuapp.com/",
//baseURL: "http://localhost:4000/",
//http://192.168.31.67:4000/
const API = axios.create({
  baseURL: "https://daraz-clone.onrender.com/",
});
// const API = axios.create({
//   baseURL: "http://localhost:4000/",
// });

let accessToken = localStorage.getItem("access-token");

API.interceptors.request.use((req) => {
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;

    return req;
  }
  return req;
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [test, setTest] = useState("Context Text");
  const [cart, setCart] = useState([]);
  const [topNottification, setTopNottification] = useState("");

  const [logedIn, setLogedIn] = useState(logCheck);
  const [userInfo, setUserInfo] = useState({ name: "" });

  //Header Left Category Dropdown
  const [ctDropdown, setCtDropdown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  //*****************************************************
  //************Nottification Message********************
  //*****************************************************
  const clrSetF = () => {
    setTopNottification("");
  };
  const showRedMsg = (data, backgroundColor, textColor) => {
    setTopNottification({
      type: data.type,
      name: data.name,
      bg: "#ff7302",
      color: "white",
    });
    setTimeout(clrSetF, 2000);
  };

  //**********
  //  Axios
  //**********

  //  baseURL: "https://testing-v1-2021-08-31.herokuapp.com/",
  //baseURL: "http://localhost:4000/",
  // const API = axios.create({
  //   baseURL: "http://localhost:4000/",
  // });

  //****************************************************************************************************
  //********************To save the login info in localstorage******************************************
  //****************************************************************************************************
  const localizingToken = (token) => {
    localStorage.setItem("access-token", token);
    setLogedIn(true);
    checkUserInfo();

    accessToken = localStorage.getItem("access-token");

    API.interceptors.request.use((req) => {
      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;

        return req;
      }
      return req;
    });
  };
  const localizingUserInfo = (User) => {
    localStorage.setItem("userInfo", JSON.stringify(User));
    checkUserInfo();
  };
  const checkUserInfo = () => {
    let getUserInfo = localStorage.getItem("userInfo");
    if (getUserInfo) {
      let parsedUser = JSON.parse(getUserInfo);
      if (parsedUser.tokenExp < new Date().getTime()) {
        // console.log("token Expired");
        localStorage.setItem("access-token", "");
        localStorage.setItem("userInfo", "");
        setUserInfo({});
        setLogedIn(false);
      } else {
        // console.log("token Valid");
        setUserInfo(parsedUser);

        if (parsedUser.name) {
          setLogedIn(true);
          accessToken = localStorage.getItem("access-token");

          API.interceptors.request.use((req) => {
            if (accessToken) {
              req.headers.Authorization = `Bearer ${accessToken}`;

              return req;
            }
            return req;
          });
        }
      }
    }
  };
  useEffect(() => {
    checkUserInfo();
  }, []);

  //To clear Localstorage log in info
  const LogOut = async () => {
    localizingUserInfo("");
    localizingToken("");
    setLogedIn(false);
    setUserInfo({});
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        test,
        setTest,
        API,
        cart,
        setCart,
        topNottification,
        setTopNottification,
        showRedMsg,
        localizingToken,
        localizingUserInfo,
        logedIn,
        setLogedIn,
        ctDropdown,
        setCtDropdown,
        cartItems,
        setCartItems,
        userInfo,
        setUserInfo,
        LogOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider }; //so i would normally use this line in the future child but becouse i am returning right now i would use ---useglobalContext-- hook ine next pages.
