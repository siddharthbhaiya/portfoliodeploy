import React, { useState, useEffect, useRef } from "react";
import "./SlidingPhoto.css";

const SlidingPhoto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(null);

  const fullText = "a passionate Web Developer with experience in building modern, responsive, and user-friendly websites and applications. I specialize in React, JavaScript, CSS, and enjoy crafting clean, maintainable code that brings ideas to life on the web.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="sliding-photo-container">
      <div className="video-wrapper">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          className="slide-video"
        />
      </div>
      <div className="intro-card">
        <h2>Hi, I'm Siddharth 👋</h2>
        <p className="aboutme" ref={textRef}>
          {displayedText}
        </p>
      </div>
    </div>
  );
};

export default SlidingPhoto;
