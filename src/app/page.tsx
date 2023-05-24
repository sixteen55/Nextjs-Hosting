'use client';

import React, { useState } from 'react';

export default function Page() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => alert('Are you serious!?');

  const handleClick = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 250)); // Subtract button height
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 250)); // Subtract button width
    setPosition({ top: randomTop, left: randomLeft });
  };
  
  return (
    <div className='main'>
      <h1 className=" text-2xl mt-20 h-max">Don't Click This Button!</h1>
      <button onClick={handleClick} style={{ top: position.top, left: position.left }} className="This mt-40 p-5 bg-gray-400">This!</button>
    </div>
  )
}