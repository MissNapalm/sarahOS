import React, { useState } from "react";
import { Howl } from "howler";

const Dock = ({ apps, onAppClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sound configuration for click
  const clickSound = new Howl({
    src: ["/click.mp3"],
    volume: 0.5,
  });

  // Sound configuration for hover
  const hoverSound = new Howl({
    src: ["/whoosh.wav"],
    volume: 0.5,
  });

  const handleAppClick = (app) => {
    clickSound.play(); // Play click sound
    onAppClick(app); // Trigger the app click logic
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    hoverSound.play(); // Play hover sound
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="dock"
      style={{
        position: "fixed",
        bottom: 0,
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
          className="dock-icon-container"
          onClick={() => handleAppClick(app)} // Use the handleAppClick function
          onMouseEnter={() => handleMouseEnter(index)} // Trigger hover sound
          onMouseLeave={handleMouseLeave} // Reset hover state
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 15px",
            cursor: "pointer",
          }}
        >
          <div
            className="dock-icon"
            style={{
              margin: "0",
              cursor: "pointer",
              fontSize: app.icon.includes("img") ? "0px" : "50px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
              textShadow:
                hoveredIndex === index
                  ? "0 0 20px rgba(255, 255, 255, 0.8)"
                  : "none",
            }}
          >
            {typeof app.icon === "string" ? (
              app.icon
            ) : (
              <img
                src={app.icon.props.src}
                alt={app.icon.props.alt}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
          <span
            style={{
              color: "white",
              fontSize: "17px",
              marginTop: "5px",
              opacity: hoveredIndex === index ? 1 : 0.7,
              transition: "opacity 0.3s ease",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Dock;
