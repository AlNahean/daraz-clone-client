import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ShowPassword = () => {
  return (
    <div
      className="show-password center"
      onClick={(e) => {
        // setShowPassword(!showsPassword);
        let element = e.currentTarget.parentElement.childNodes;
        let passwordElement = element[0];
        if (passwordElement.type === "text") {
          passwordElement.type = "password";
        } else if (passwordElement.type === "password") {
          passwordElement.type = "text";
        }
        // element[0].type = `${showPassword ? "text" : "password"}`;
        // console.log(
        //   element[1].childNodes[0].style.display,
        //   showPassword
        // );

        let eyeElements = Array.prototype.slice.call(element[1].childNodes);
        eyeElements.map((item) => {
          if (item.style.display === "block") {
            item.style.display = "none";
          } else if (item.style.display === "none") {
            item.style.display = "block";
          }
        });
      }}
    >
      <AiFillEye style={{ display: "none" }} />
      <AiFillEyeInvisible style={{ display: "block" }} />
    </div>
  );
};

export default ShowPassword;
