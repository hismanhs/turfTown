import React from "react";

const Shimmer = ({  width = "100%", height = "80px", borderRadius = "4px", speed = "0.5s" }) => {
  return (
    <div
    style={{
      width,
      height,
      borderRadius,
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#f0f0f0",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 10s infinite",
      }}
    ></div>
  </div>
  );
};

export default Shimmer;