import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

import HeaderNav from "../../Header Nav/HeaderNav";
import { useGlobalContext } from "../../Context";

const Register = () => {
  const navigate = useNavigate();
  const [islogIn, setIsLogIn] = useState(true);
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    API,
    showRedMsg,
    topNottification,
    localizingToken,
    localizingUserInfo,
  } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    let { data } = await API.post("/user/signin", logInData);
    await localizingToken(data.token);
    await localizingUserInfo(data);
    await navigate("/home");

    if (data.type === "F") {
      showRedMsg({ name: "Log In Failed" });
    } else {
      showRedMsg({ name: "Log In Successful" });
    }

    // default sign in data
    // setLogInData({
    //   email: "",
    //   password: "",
    // });
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (signUpData.password === signUpData.password2) {
      let { data } = await API.post("/user/signup", signUpData);
      await localizingToken(data.token);
      await localizingUserInfo(data);

      if (data.type === "F") {
        showRedMsg({ name: "Sign Up Failed" });
      } else {
        showRedMsg({ name: "Sign Up Successful" });
      }
      await navigate("/home");
    } else {
      showRedMsg({ name: "Passwords must be same" });
    }
    // default sign up data
    // setSignUpData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   password2: "",
    // });
  };
  return (
    <div className="daraz-register full-size">
      <HeaderNav />

      <div className="daraz-main full-size">
        {/* **********************Log In**********************  */}

        {islogIn && (
          <LogIn
            handleLogInSubmit={handleLogInSubmit}
            logInData={logInData}
            setLogInData={setLogInData}
            setIsLogIn={setIsLogIn}
            islogIn={setIsLogIn}
          />
        )}
        {/* *********************Sign Up*********************** */}
        {!islogIn && (
          <SignUp
            handleSignUpSubmit={handleSignUpSubmit}
            signUpData={signUpData}
            setSignUpData={setSignUpData}
            setIsLogIn={setIsLogIn}
            islogIn={islogIn}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
