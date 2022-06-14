import { useState, useEffect } from 'react';

export const useMouseTracker = () => {
  const [mouseTracker, setMouseTracker] = useState({x: 0, y: 0});
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  });

	const handleMouseMove = event => setMouseTracker({x: event.clientX, y: event.clientY});

	return mouseTracker;
}