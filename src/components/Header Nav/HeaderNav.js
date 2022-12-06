import React from "react";

import HeaderCategory2 from "./Components/HeaderCategory2";

import MainHeader from "./Components/Main-Header";
import HeaderExtra from "./Components/HeaderExtra";

const HeaderNav = () => {
  return (
    <div>
      <header className="header" style={{}}>
        <div className="dummy-header"></div>
        <div
          className="header-container"
          style={{ height: "100%", position: "fixed" }}
        >
          <HeaderExtra />

          <div className="main-header center">
            <MainHeader />
          </div>
          <div className="header-category-container center full-size">
            <div className="header-category full-size">
              <div className="header-category-js full-size">
                <div className="header-category-js-2 full-size center">
                  {/* Header Catergory 2 */}
                  <HeaderCategory2 />

                  {/* end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderNav;
