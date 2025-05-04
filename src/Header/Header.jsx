import React from "react";
import "./Header.css";

const Header = () => {
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
    <header className="magic-header">
      <div className="glow-title">🚀 &lt; Siddharth /&gt;</div>
      <nav className="nav-items">
        <a href="#projects">💼 Projects</a>
        <a href="#contact">📬 Contact</a>
        <a href="/Siddharth_front_end_developer.pdf" onClick={handleResumeClick}>
          📄 Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
