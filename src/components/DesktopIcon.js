import React from "react";
import "./DesktopIcon.css";

const DesktopIcon = ({ name, icon, onDoubleClick }) => {
  return (
    <div className="desktop-icon">
      <div className="icon text-4xl">{icon}</div>
      <div className="label text-sm">{name}</div>
    </div>
  );
};

export default DesktopIcon;