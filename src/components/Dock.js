import React from "react";

const Dock = ({ apps, onAppClick }) => {
  return (
    <div
      className="dock"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      {apps.map((app, index) => (
        <div
          key={index}
          className="dock-icon"
          onClick={() => onAppClick(app)}
          style={{
            margin: "0 15px", // Adjust spacing between icons
            cursor: "pointer",
            fontSize: "80px", // Increase icon size here
          }}
        >
          {app.icon}
        </div>
      ))}
    </div>
  );
};

export default Dock;
