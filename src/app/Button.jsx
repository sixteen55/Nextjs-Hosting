'use client';

import React, { useState } from 'react';

const Button = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => {
    const randomTop = Math.floor(Math.random() * 400);
    const randomLeft = Math.floor(Math.random() * 400);
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <button
      className="hover-button"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={handleHover}
    >
      Hover Me
    </button>
  );
};

export default Button;