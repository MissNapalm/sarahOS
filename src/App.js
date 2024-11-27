import React, { useState, useEffect } from "react";
import Dock from "./components/Dock";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import './App.css';

const App = () => {
  const dockHeight = 50; // Height of the dock
  const [windows, setWindows] = useState([]);
  const [icons, setIcons] = useState([
    { id: 1, name: "Folder 1", icon: "📁", content: "Folder 1 Content", position: { x: -70, y: 40 } },
    { id: 2, name: "Folder 2", icon: "📁", content: "Folder 2 Content", position: { x: -70, y: 135 } },
    { id: 3, name: "Folder 3", icon: "📁", content: "Folder 3 Content", position: { x: -70, y: 210 } },
    { id: 4, name: "Recycle Bin", icon: "🗑️", content: "Recycle Bin Content", position: { x: -70, y: 280 } },
  ]);
  const [fadeIn, setFadeIn] = useState(false);

  const openWindow = (app) => {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), title: app.name, content: app.content },
    ]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const handleIconDrag = (id, e) => {
    const iconIndex = icons.findIndex((icon) => icon.id === id);
    if (iconIndex === -1) return;
  
    const newIcons = [...icons];
    const newX = newIcons[iconIndex].position.x + e.movementX;
    const newY = newIcons[iconIndex].position.y + e.movementY;
  
    // Prevent icons from going under the dock at the top
    if (newY < dockHeight) {
      newIcons[iconIndex].position.y = newIcons[iconIndex].position.y;
    } else {
      newIcons[iconIndex].position.x = newX;
      newIcons[iconIndex].position.y = newY;
    }
  
    setIcons(newIcons);
  };

  useEffect(() => {
    // Adjust icons if they start overlapping the dock on load
    const adjustedIcons = icons.map((icon) => {
      if (icon.position.y < dockHeight) {
        return { ...icon, position: { ...icon.position, y: dockHeight + 10 } };
      }
      return icon;
    });
    setIcons(adjustedIcons);

    // Trigger fade-in effect for the central text
    const timeout = setTimeout(() => setFadeIn(true), 500); // Delay fade-in
    return () => clearTimeout(timeout);
  }, [dockHeight]);

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="absolute cursor-pointer"
            style={{
              left: `${icon.position.x}px`,
              top: `${icon.position.y}px`,
            }}
            onMouseDown={(e) => {
              const onDrag = (event) => handleIconDrag(icon.id, event);
              const onDragEnd = () => {
                document.removeEventListener("mousemove", onDrag);
                document.removeEventListener("mouseup", onDragEnd);
              };
            
              document.addEventListener("mousemove", onDrag);
              document.addEventListener("mouseup", onDragEnd);
            }}
          >
            <DesktopIcon
              name={icon.name}
              icon={icon.icon}
              onDoubleClick={() => openWindow(icon)}
            />
          </div>
        ))}
      </div>

      {/* Dock */}
      <Dock
        apps={[
          { name: "About Me", icon: "📜", content: "About Me Content" },
          { name: "Apps", icon: "📂", content: "Apps Content" },
          { name: "Ethical Hacks", icon: "🖧", content: "Ethical Hacks Content" },
          { name: "Nonprofit", icon: "🌍", content: "Nonprofit Content" },
          { name: "Settings", icon: "⚙️", content: "Settings Content" },
        ]}
        onAppClick={openWindow}
      />

      {/* Windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          content={win.content}
          onClose={() => closeWindow(win.id)}
        />
      ))}

      {/* Central Text */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          className="text-white text-8xl font-bold drop-shadow-lg"
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)", // Subtle shadow effect
          }}
        >
          <span>Sarah</span>
          <span
            style={{
              fontSize: "130%",
              display: "inline-block",
              marginLeft: "8px",
            }}
          >
            OS
          </span>
        </h1>
        <p
          className="text-white text-2xl mt-6"
          style={{
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)", // Subtle shadow effect for subtitle
          }}
        >
          Frontend Design, Ethical Hacking
        </p>
      </div>
    </div>
  );
};

export default App;