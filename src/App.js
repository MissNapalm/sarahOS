import React, { useState } from "react";
import { Howl } from "howler";
import Dock from "./components/Dock";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import {
  AboutMeContent,
  SkillsContent,
  EthicalHacksContent,
  NonprofitContent,
  SettingsContent,
} from "./components/WindowContent";
import "./App.css";

const App = () => {
  const dockHeight = 50;
  const [windows, setWindows] = useState([]);
  const [icons, setIcons] = useState([
    { id: 1, name: "Documents", icon: "📄", content: "Documents Content", position: { x: 20, y: 130 } },
    { id: 2, name: "Projects", icon: "📁", content: "Projects Content", position: { x: 20, y: 230 } },
    { id: 3, name: "Downloads", icon: "⬇️", content: "Downloads Content", position: { x: 20, y: 330 } },
    { id: 4, name: "Recycle Bin", icon: "🗑️", content: "Recycle Bin Content", position: { x: 20, y: 430 } },
  ]);
  const [booted, setBooted] = useState(false); // Controls the boot sequence
  const [fadeInStage, setFadeInStage] = useState(0); // Tracks which elements are fading in
  const [buttonVisible, setButtonVisible] = useState(true); // Controls the button visibility
  const [blackScreenOpacity, setBlackScreenOpacity] = useState(1); // Controls the black screen fade-out

  // Sound configurations
  const bootSound = new Howl({
    src: ["/bootup.mp3"],
    volume: 0.5,
  });

  // const music = new Howl({
  //   src: ["/music.mp3"],
  //   volume: 0.65, // 65% volume
  //   loop: true,
  // });

  const openWindow = (app) => {
    let content = app.content;
    let width = 625; // Default width
    let height = 600; // Default height

    if (app.name === "About Me") {
      content = <AboutMeContent />;
    } else if (app.name === "Skills") {
      content = <SkillsContent />;
    } else if (app.name === "Ethical Hacks") {
      content = <EthicalHacksContent />;
    } else if (app.name === "Nonprofit") {
      content = <NonprofitContent />;
    } else if (app.name === "Settings") {
      content = <SettingsContent />;
    }
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), title: app.name, content: content, width: width, height: height },
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

  const handleBoot = () => {
    // Play boot sound after 1 second delay
    setTimeout(() => {
      bootSound.play();
    }, 1000);

    // Start fade-in sequence
    setTimeout(() => setFadeInStage(1), 100); // Fade in SarahOS text after 100ms
    setTimeout(() => setFadeInStage(2), 1700); // Fade in desktop icons after 1700ms
    setTimeout(() => setFadeInStage(3), 2300); // Fade in dock after 2300ms

    // Fade out the black screen and make the button disappear
    setTimeout(() => setBlackScreenOpacity(0), 800); // Start fading out the black screen
    setTimeout(() => setButtonVisible(false), 100); // Hide the button visually
    setTimeout(() => setBooted(true), 3000); // Remove the black screen after fade-out completes

    // Play background music 1.8 seconds after the visual elements fade in
    setTimeout(() => {
    }, 4100); // 2300ms + 1800ms delay
  };

  return (
    <div className="desktop">
      {/* Boot Screen */}
      {!booted && (
        <div
          className="fixed inset-0 bg-black flex justify-center items-center"
          style={{
            zIndex: 1000,
            opacity: blackScreenOpacity,
            transition: "opacity 2s ease-in-out",
          }}
        >
          {buttonVisible && (
            <button
              onClick={handleBoot}
              style={{
                padding: "20px 50px",
                fontSize: "24px",
                color: "white",
                backgroundColor: "#1a73e8",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, opacity 1s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Click to Boot Up My Portfolio
            </button>
          )}
        </div>
      )}

      {/* Persistent OS Text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        style={{
          opacity: fadeInStage >= 1 ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          zIndex: 40,
        }}
      >
        <h1 className="text-white text-8xl font-bold text-center">
          <span>Sarah</span>
          <span style={{ fontSize: "130%", display: "inline-block", marginLeft: "8px" }}>OS</span>
        </h1>
        <p className="text-white text-2xl text-center">Frontend Design and Cybersecurity</p>
      </div>

      {/* Desktop Icons */}
      <div
        className="desktop-icons"
        style={{
          opacity: fadeInStage >= 2 ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
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
      <div
        style={{
          opacity: fadeInStage >= 3 ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        <Dock
          apps={[
            { name: "About Me", icon: "📜", content: "About Me Content" },
            { name: "Skills", icon: "📂", content: "Skills Content" },
            { name: "Ethical Hacks", icon: "🛡️", content: "Ethical Hacks Content" },
            { name: "Nonprofit", icon: "🌍", content: "Nonprofit Content" },
            { name: "Settings", icon: "⚙️", content: "Settings Content" },
          ]}
          onAppClick={openWindow}
        />
      </div>

      {/* Windows */}
      {fadeInStage >= 3 &&
        windows.map((win) => (
          <Window
            key={win.id}
            title={win.title}
            content={win.content}
            width={win.width}
            height={win.height}
            onClose={() => closeWindow(win.id)}
          />
        ))}
    </div>
  );
};

export default App;
