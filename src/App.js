import React, { useState, useEffect } from "react";
import { Howl } from 'howler';
import Dock from "./components/Dock";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import './App.css';
const AboutMeContent = () => {
  return (
    <div className="about-me-container">
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{
          fontSize: '120px',
          width: '150px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}>
          👩‍💻
        </div>
        <div>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#fff'
          }}>
            Sarah Clark
          </h2>
          <p style={{ 
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '15px',
          }}>
            Frontend Developer & Security Enthusiast
          </p>
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '15px',
            flexWrap: 'wrap'
          }}>
            {['React', 'TypeScript', 'Node.js', 'Security'].map((skill) => (
              <span key={skill} style={{
                padding: '4px 10px',
                borderRadius: '15px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.9)',
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
        <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
          Hello! I'm a passionate frontend developer with a unique twist - I specialize in creating beautiful, 
          intuitive web interfaces while maintaining a strong focus on security. With experience in web development 
          and security practices, I bridge the gap between aesthetics and protection.
        </p>

        <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
          I began studying cybersecurity and hacking while working as a caregiver for my father, then moved on to 
          REST APIs, full stack applications, and finally frontend design. This diverse background gives me a unique 
          perspective on creating secure, user-friendly applications.
        </p>

        <p style={{ lineHeight: '1.6' }}>
          When I'm not coding or exploring security concepts, I contribute to open-source projects and mentor 
          aspiring developers. I believe in making technology both beautiful and secure, ensuring that users can 
          trust the applications they interact with.
        </p>
      </div>
    </div>
  );
};

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

  const sound = new Howl({
    src: ['/startup.mp3'],
    volume: 0.5
  });

  const openWindow = (app) => {
    let content = app.content;
    if (app.name === "About Me") {
      content = <AboutMeContent />;
    }
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), title: app.name, content: content },
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
      sound.play();
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
            Frontend Design and Cybersecurity
          </p>
        </div>
      </div>

      {/* OS Text (persists after boot) */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40"
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
          Frontend Design and Cybersecurity
        </p>
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
            { name: "Skills", icon: "📂", content: "Skills Content" },
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