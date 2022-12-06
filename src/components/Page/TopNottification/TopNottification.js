import React from "react";
import { useGlobalContext } from "../../Context";

const TopNottification = () => {
  const { topNottification } = useGlobalContext();

  // ***************************************************************
  // *******Added In --MainHeader-- for availabilaty in everywhere*******
  // ****************************************************************
  return (
    <div
      style={{
        position: "fixed",
        zIndex: topNottification ? "22" : "-1",
        height: "0px",
      }}
      className="center"
    >
      {topNottification && (
        <div className="full-size center" style={{ zIndex: "20" }}>
          {topNottification.type === "progress" ? (
            <div
              style={{
                height: topNottification.type === "progress" ? "10vh" : "0vh",
                width: "100%",
                backgroundColor: topNottification.bg,
                color: topNottification.color,
                position: "fixed",
                zIndex: "20",
                top: "4vh",
                left: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "24px",
                  width: "80vw",
                  backgroundColor: "#E7E9EB",
                  borderRadius: "12px",
                  zIndex: "20",
                  overflow: "hidden",
                }}
              >
                <div
                  className="center"
                  style={{
                    height: "24px",
                    width: `${topNottification.progress}%`,
                    backgroundColor: "#2196F3",
                    borderRadius: "12px",
                    zIndex: "20",
                  }}
                >
                  {topNottification.progress}%
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                height: "10vh",
                width: "100%",
                backgroundColor: topNottification.bg,
                color: topNottification.color,
                position: "fixed",
                zIndex: "20",
                top: "4vh",
                left: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {topNottification.name}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNottification;
