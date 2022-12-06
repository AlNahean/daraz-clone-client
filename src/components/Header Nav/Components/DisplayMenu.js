import React from "react";
import HeaderExtra from "./HeaderExtra";

import { Link, useNavigate } from "react-router-dom";

import { ImCross } from "react-icons/im";
import { useGlobalContext } from "../../Context";

const DisplayMenu = ({ setIsDisplayMenu }) => {
  const {
    userInfo,
    logedIn,
    setLogedIn,
    localizingUserInfo,
    localizingToken,
    setUserInfo,
  } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <div
      className="display-menu"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <HeaderExtra />
      <div className="menu-top">
        <Link className="header-logo react-link" to={`/home`}>
          <img
            src="/daraz-logo.png"
            alt="Daraz"
            className="daraz-logo"
            style={{
              maxHeight: "6vh",
              width: "auto",
              transform: "translateX(1rem)",
            }}
            onClick={() => {
              setIsDisplayMenu(false);
            }}
          />
        </Link>
        <ImCross
          style={{
            height: "3vh",
            width: "auto",
            color: "white",
            transform: "translateX(-0.5rem)",
          }}
          onClick={() => {
            setIsDisplayMenu(false);
          }}
        />
      </div>

      {logedIn ? (
        <Link
          to={`user?id=${userInfo.id}`}
          className="acc-header"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            height: "10vh",
            minWidth: "100vw",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={userInfo.img ? userInfo.img : "/default-person-image.jpg"}
            alt=""
            style={{
              height: "8vh",
              width: "8vh",
              borderRadius: "8vh",
              justifySelf: "center",
              alignSelf: "center",
              margin: "1vh",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "100%",
              // minWidth: "90%",
              // maxWidth: "90%",
              // backgroundColor: "green",
              color: "black",
            }}
          >
            <div style={{}}>{userInfo.name}</div>
            {logedIn ? (
              <div>See your profile</div>
            ) : (
              <div>You are not logged in</div>
            )}
          </div>
        </Link>
      ) : (
        <Link
          className="center"
          to="/register"
          style={{
            textDecoration: "none",
            color: "white",
            height: "8vh",
          }}
        >
          <div
            className="center"
            onClick={() => {}}
            style={{
              color: "white",
              backgroundColor: "#42B72A",
              padding: "1vh",
              width: "80vw",
              borderRadius: "5px",
            }}
          >
            SignUp / Log In
          </div>
        </Link>
      )}

      {logedIn && (
        <div
          className="menu-logout-container"
          onClick={async () => {
            localizingUserInfo({});
            localizingToken({});

            setLogedIn(false);
            setUserInfo({});
            await navigate("/home");
            setIsDisplayMenu(false);
          }}
        >
          <div className="menu-logout center">
            <div>Log Out</div>
          </div>
          {/* <div className="icon"></div> */}
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
