import React from "react";
import ShowPassword from "./ShowPassword";

const LogIn = ({
  handleLogInSubmit,
  logInData,
  setLogInData,
  setIsLogIn,
  islogIn,
}) => {
  return (
    <div className="dz-log-in-container center">
      <form
        className="log-in-form "
        onSubmit={(e) => {
          handleLogInSubmit(e);
        }}
      >
        <img
          src="daraz-logo.png"
          alt="daraz"
          style={{ height: "2.6rem", width: "auto" }}
        />
        <div className="dr-input-email">
          <label style={{ alignSelf: "flex-start" }}>Email</label>
          <input
            className="register-input"
            value={logInData.email}
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setLogInData({ ...logInData, email: e.target.value });
            }}
            required
          />
        </div>
        <div className="dr-input-password">
          <label style={{ alignSelf: "flex-start" }}>Password</label>

          <div className="register-input-container">
            <input
              className="register-input"
              value={logInData.password}
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setLogInData({ ...logInData, password: e.target.value });
              }}
              required
            />
            <ShowPassword />
          </div>
        </div>
        <div className="dr-login-submit full-size center">
          <button className="dz-login-btn">Log In</button>
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
            Sign Up
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
