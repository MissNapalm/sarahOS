import React, { useState } from "react";
import "./Window.css";

const Window = ({ title, content, onClose }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault(); // Prevent text selection while dragging
  };

  const onMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // Stops dragging if the cursor leaves the window
    >
      <div
        className="window-header"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <span>{title}</span>
        <div className="window-header-buttons">
          <div
            className="window-header-button close"
            onClick={onClose}
          ></div>
          <div
            className="window-header-button minimize"
            onClick={() => alert("Minimize feature coming soon!")}
          ></div>
          <div
            className="window-header-button maximize"
            onClick={() => alert("Maximize feature coming soon!")}
          ></div>
        </div>
      </div>
      <div className="window-content">{content}</div>
    </div>
  );
};

export default Window;
