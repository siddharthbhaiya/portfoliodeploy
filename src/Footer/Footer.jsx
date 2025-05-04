import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const fullText = ">Compiled with ❤️ by Siddharth";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleResumeClick = (e) => {
    e.preventDefault();

    const resumeURL = "/Siddharth_front_end_developer.pdf";

    window.open(resumeURL, "_blank");

    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Siddharth_front_end_developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-content">
        <span className="footer-funny">
          <span className="debugged">
          The end. But also the beginning of our collaboration?          </span>
        </span>
        

        <div className="footer-buttons">
          <a href="/Siddharth_front_end_developer.pdf" onClick={handleResumeClick} className="footer-btn">📄 View Resume</a>
          <a href="#projects" className="footer-btn">💼 Projects</a>
        </div>
        <span className="footer-text live-type">{displayedText}</span>
      </div>
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
