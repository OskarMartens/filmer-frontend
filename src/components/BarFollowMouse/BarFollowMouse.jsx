import React, { useState, useEffect } from "react";

function BarFollowMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const distanceFromMouse = Math.sqrt(
    Math.pow(window.innerWidth - mousePosition.x, 2) +
      Math.pow(window.innerHeight - mousePosition.y, 2)
  );

  const angle = Math.atan2(
    window.innerHeight - mousePosition.y,
    window.innerWidth - mousePosition.x
  );

  const scaleFactor = Math.max(1 - distanceFromMouse / 1000, 0.2);

  const styles = {
    width: distanceFromMouse,
    height: 0,
    borderLeft: "0px solid transparent",
    borderRight: "px solid transparent",
    borderBottom: "10px solid rgba(255, 255, 255, 0.5)",
    transformOrigin: "bottom right",
    transform: `rotate(${angle}rad)`,
    position: "absolute",
    bottom: 0,
    right: 0,
    boxShadow: "0px 0px 50px 20px rgba(255, 255, 255, 0.3)",
    cursor: "none"
  };

  return <div style={styles}></div>;
}

export default BarFollowMouse;
