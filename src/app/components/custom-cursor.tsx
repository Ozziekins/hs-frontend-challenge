import React, { useState, useEffect } from "react";
import styles from '../styles/TestimonialsSlider.module.css';

interface CustomCursorProps {
    isVisible: boolean;
  }
  
const CustomCursor: React.FC<CustomCursorProps> = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target as HTMLElement;
    setIsPointer(
      target.classList.contains(styles.flare) ||
      target.classList.contains(styles.pointer) ||
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSizePointer = isPointer ? 30 : 0;
  const cursorStylePointer = isPointer ? { left: `${position.x}px`, top: `${position.y}px` } : {}

  const flareSizeVisible = isVisible ? 60 : 0;
  const cursorStyleVisible = isVisible ? { left: `${position.x}px`, top: `${position.y}px` } : {};

  if (isPointer) {
    return (
        <div
        className={`${styles.flare} ${isPointer ? styles.pointer : ""}`}
        style={{
            ...cursorStylePointer,
            width: `${flareSizePointer}px`,
            height: `${flareSizePointer}px`,
        }}
        ></div>
    );
    }
    if (isVisible) {
    return (
        <div
            className={`${styles.drag} ${isVisible ? styles.visible : ""}`}
            style={{
            ...cursorStyleVisible,
            width: `${flareSizeVisible}px`,
            height: `${flareSizeVisible}px`,
            }}
        >Drag</div>
        );
    }
};

export default CustomCursor;
