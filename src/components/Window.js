import React, { useState, useRef, useEffect } from "react";

const Window = ({ title, content, onClose }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 500, height: 350 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const resizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-header-buttons')) return;
    setDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
  };

  const handleResizeStart = (e) => {
    setResizing(true);
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    };
    e.stopPropagation();
  };

  // Add global mouse event listeners when resizing starts
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (resizing) {
        const deltaX = e.clientX - resizeStartRef.current.x;
        const deltaY = e.clientY - resizeStartRef.current.y;
        
        const newWidth = Math.max(300, resizeStartRef.current.width + deltaX);
        const newHeight = Math.max(200, resizeStartRef.current.height + deltaY);
        
        setSize({ width: newWidth, height: newHeight });
      } else if (dragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleGlobalMouseUp = () => {
      setDragging(false);
      setResizing(false);
    };

    if (resizing || dragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [resizing, dragging, dragOffset]);

  return (
    <div
      className="window"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        borderRadius: '16px',
        background: 'rgba(28, 28, 28, 0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'fadeIn 0.4s ease-in-out',
        userSelect: 'none',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div
        className="window-header"
        onMouseDown={handleMouseDown}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          padding: '12px 16px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'grab',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <span>{title}</span>
        <div className="window-header-buttons" style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #4caf50, #388e3c)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              opacity: 0.8,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={e => e.target.style.opacity = '1'}
            onMouseLeave={e => e.target.style.opacity = '0.8'}
          />
          <button
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #fbc02d, #f57f17)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              opacity: 0.8,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={e => e.target.style.opacity = '1'}
            onMouseLeave={e => e.target.style.opacity = '0.8'}
          />
          <button
            onClick={onClose}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #ff4b4b, #d32f2f)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              opacity: 0.8,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={e => e.target.style.opacity = '1'}
            onMouseLeave={e => e.target.style.opacity = '0.8'}
          />
        </div>
      </div>
      <div
        className="window-content"
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '14px',
          background: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        {content}
      </div>
      
      {/* Larger resize handle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '30px',
          height: '30px',
          cursor: 'se-resize',
          zIndex: 1000,
          background: 'transparent',
          transform: 'translate(5px, 5px)', // Extends clickable area outside window
        }}
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};

export default Window;