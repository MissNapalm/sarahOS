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
            margin: "0 15px",
            cursor: "pointer",
            fontSize: app.icon.includes("img")
              ? "0px" /* Prevents text-based scaling for images */
              : "80px", // Default font size for emoji icons
          }}
        >
          {typeof app.icon === "string" ? (
            // Render emoji directly if app.icon is a string
            app.icon
          ) : (
            // Render image icons
            <img
              src={app.icon.props.src}
              alt={app.icon.props.alt}
              style={{
                width: "50px", // Adjust the icon size here
                height: "50px",
                borderRadius: "50%", // Optional for circular icons
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};


export default Dock;
