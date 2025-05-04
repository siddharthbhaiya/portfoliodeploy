import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const fullText = "lCompiled with ❤️ by Siddharth";

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
      setDisplayedText(prev => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-content">
        <span className="footer-text live-type">{displayedText}</span>

        <span className="footer-funny">
          <span className="debugged">Promise.all([💻, ☕, 💡])</span>
          <span className="debugged">.then(() =&gt; "100% Debugged")</span>
        </span>

        <div className="social-links">
          <a href="https://github.com/siddharth" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
          <a href="www.linkedin.com/in/siddharth-sekhar-singh-7626041a7" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          <a href="mailto:siddharthsekhar2010@email.com" className="social-icon">Email</a>
        </div>
      </div>
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
