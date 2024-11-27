import React, { useState, useEffect } from "react";
import Dock from "./components/Dock";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import './App.css';

const App = () => {
  const dockHeight = 50;
  const [windows, setWindows] = useState([]);
  const [icons, setIcons] = useState([
    { id: 1, name: "Documents", icon: "📄", content: "Documents Content", position: { x: 20, y: 130 } },
    { id: 2, name: "Projects", icon: "📁", content: "Projects Content", position: { x: 20, y: 230 } },
    { id: 3, name: "Downloads", icon: "⬇️", content: "Downloads Content", position: { x: 20, y: 330 } },
    { id: 4, name: "Recycle Bin", icon: "🗑️", content: "Recycle Bin Content", position: { x: 20, y: 430 } },
  ]);
  const [bootScreen, setBootScreen] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [showContent, setShowContent] = useState(false);

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
  
    if (newY < dockHeight) {
      newIcons[iconIndex].position.y = newIcons[iconIndex].position.y;
    } else {
      newIcons[iconIndex].position.x = newX;
      newIcons[iconIndex].position.y = newY;
    }
  
    setIcons(newIcons);
  };

  useEffect(() => {
    // Show text after 2 seconds
    const spinnerTimer = setTimeout(() => {
      setFadeIn(true);
    }, 2000);

    // Hide boot screen after 4 seconds
    const bootTimer = setTimeout(() => {
      setBootScreen(false);
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }, 4000);

    // Icon adjustment
    const adjustedIcons = icons.map((icon) => {
      if (icon.position.y < dockHeight) {
        return { ...icon, position: { ...icon.position, y: dockHeight + 10 } };
      }
      return icon;
    });
    setIcons(adjustedIcons);

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(bootTimer);
    };
  }, []);

  return (
    <div className="desktop">
      {/* Boot Screen */}
      <div
        className="fixed inset-0 bg-black z-50"
        style={{
          opacity: bootScreen ? 1 : 0,
          pointerEvents: showContent ? 'none' : 'auto',
          transition: 'opacity 1s ease-in-out'
        }}
      >
        {/* Initial centered loader */}
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: fadeIn ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <div className="loader" />
        </div>

        {/* Text that fades in */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <h1 className="text-white text-8xl font-bold text-center">
            <span>Sarah</span>
            <span style={{ fontSize: '130%', display: 'inline-block', marginLeft: '8px' }}>
              OS
            </span>
          </h1>
          <p className="text-white text-2xl text-center">
            Frontend Design, Ethical Hacking
          </p>
        </div>
      </div>

      {/* Desktop Content */}
      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
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
            { name: "Ethical Hacks", icon: "🛡️", content: "Ethical Hacks Content" },
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
      </div>
    </div>
  );
};

export default App;