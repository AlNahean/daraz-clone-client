import React from "react";
import ShowPassword from "./ShowPassword";

const SignUp = ({
  handleSignUpSubmit,
  signUpData,
  setSignUpData,
  setIsLogIn,
  islogIn,
}) => {
  return (
    <div className="dz-log-in-container center" style={{ marginTop: "0vh" }}>
      <form
        className="log-in-form "
        onSubmit={(e) => {
          handleSignUpSubmit(e);
        }}
      >
        <img
          src="daraz-logo.png"
          alt="daraz"
          style={{ height: "2.6rem", width: "auto" }}
        />
        <div className="dr-input-email">
          <label style={{ alignSelf: "flex-start" }}>Name</label>
          <input
            className="register-input"
            value={signUpData.name}
            name="name"
            type="name"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setSignUpData({ ...signUpData, name: e.target.value });
            }}
            required
          />
        </div>
        <div className="dr-input-email">
          <label style={{ alignSelf: "flex-start" }}>Email</label>
          <input
            className="register-input"
            value={signUpData.email}
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setSignUpData({ ...signUpData, email: e.target.value });
            }}
            required
          />
        </div>
        <div className="dr-input-password">
          <label style={{ alignSelf: "flex-start" }}>Password</label>
          <div className="register-input-container">
            <input
              className="register-input"
              value={signUpData.password}
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setSignUpData({
                  ...signUpData,
                  password: e.target.value,
                });
              }}
              required
            />
            <ShowPassword />
          </div>
        </div>
        <div className="dr-input-password">
          <label style={{ alignSelf: "flex-start" }}>ReEnter Password</label>
          <div className="register-input-container">
            <input
              className="register-input"
              value={signUpData.password2}
              name="password"
              type="password"
              placeholder="Enter Password Again"
              onChange={(e) => {
                setSignUpData({
                  ...signUpData,
                  password2: e.target.value,
                });
              }}
              required
            />
            <ShowPassword />
          </div>
        </div>
        <div className="dr-login-submit full-size center">
          <button className="dz-login-btn">Sign Up</button>
        </div>
        <div className="center" style={{ margin: "5px 5px" }}>
          or
        </div>
        <div className="dr-signup-shift full-size center">
          <div
            className="dz-signup-shift-btn center"
            onClick={(e) => {
              setIsLogIn(!islogIn);
            }}
          >
            Log In
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
