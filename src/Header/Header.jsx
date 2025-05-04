import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="magic-header">
      <div className="glow-title">🚀 &lt;StackOverSiddharth/&gt;</div>
      <nav className="nav-items">
        <a href="#intro">👨‍💻 About</a>
        <a href="#skills">🧠 Skills</a>
        <a href="#projects">💼 Projects</a>
        <a href="#experience">📈 Experience</a>
        <a href="#contact">📬 Contact</a>

        <a href="/Siddharth_front_end_developer.pdf" download>
          📄 Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
