import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const HeaderExtra = () => {
  const { logedIn, setIsLoggedIn, LogOut, userInfo } = useGlobalContext();
  return (
    <div className="extra-header full-size center">
      {/* Extra */}
      <div className="hdct2" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
        <Link
          className="hdct2-container center react-link"
          to={`/upload-product`}
        >
          <div className="hdct2-container-2">
            <div className="hdct2-name">SELL ON DARAZ</div>
          </div>
        </Link>
        <Link
          className="hdct2-container center react-link"
          to={`${logedIn ? `/user?id=${userInfo.id}` : "/register"}`}
        >
          <div className="hdct2-container-2">
            <div className="hdct2-name">
              {logedIn ? userInfo.name : "SIGN UP / LOG IN"}
            </div>
          </div>
        </Link>
        {logedIn && (
          <div className="hdct2-container center react-link">
            <div className="hdct2-container-2">
              <div
                className="hdct2-name"
                onClick={() => {
                  LogOut();
                }}
              >
                Log Out
              </div>
            </div>
          </div>
        )}

        {/* {headerExtra.map((item) => {
          return (
            <Link
              key={item.id}
              className="hdct2-container center react-link"
              to={`/${logedIn ? item.link2 : item.link}?name=nahean&age=21`}
            >
              <div className="hdct2-container-2">
                <div className="hdct2-name">
                  {logedIn ? userInfo.name : item.name}
                </div>
              </div>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default HeaderExtra;
