import React, { useState, useEffect } from "react";
import "./PortfolioShowcase.css";

const Card = ({ title, code, align }) => (
  <div className={`code-card ${align}`}>
    <div className="card-title">{title}</div>
    <pre><code dangerouslySetInnerHTML={{ __html: code }} /></pre>
  </div>
);

const PortfolioShowcase = () => {
  const [heading, setHeading] = useState('fetch("api/siddharth")...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeading('Dev mode: ON | User: Siddharth | Status: 🔥 ACTIVE');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "🧑‍🚀 Who Am I?",
      code: `function <span class='fn'>introduce</span>() {
 // Meet the Dev 👇  
<span class='keyword'>const</span> name = <span class='value'>"Siddharth"</span>;
<span class='keyword'>const</span> role = <span class='value'>"Web Developer by Day, Bug Exterminator by Night 🐛🔥"</span>;
<span class='keyword'>const</span> superpower = <span class='value'>"Turning complex requirements into pixel-perfect reality"</span>;
<span class='keyword'>const</span> motto = <span class='value'>"Ship fast, debug faster!"</span>;
<span class='keyword'>const</span> hobbies = <span class='value'>["googling error messages", "thinking in flexbox", "contemplating dark mode design choices"]</span>;
<span class='keyword'>const</span> currently = <span class='value'>"Making the internet slightly better — one commit at a time"</span>;
}
`
    },
    {
      title: "🛠️ My Toolkit",
      code: `<span class='keyword'>const</span> skills = {
  <span class='key2'>"Programming & Scripting"</span>: [<span class='value'>"Python"</span>, <span class='value'>"HTML"</span>, <span class='value'>"CSS"</span>, <span class='value'>"JavaScript"</span>, <span class='value'>"React"</span>, <span class='value'>"Redux"</span>],
  <span class='key2'>"Testing & Automation"</span>: [<span class='value'>"Postman"</span>, <span class='value'>"SDLC"</span>, <span class='value'>"GitLab"</span>, <span class='value'>"GitHub"</span>, <span class='value'>"CI/CD"</span>, <span class='value'>"Jest"</span>, <span class='value'>"Jira"</span>],
  <span class='key2'>"Infra & OS"</span>: [<span class='value'>"Networking"</span>, <span class='value'>"Operating Systems"</span>, <span class='value'>"Cloud Computing"</span>],
  <span class='key2'>"Database"</span>: [<span class='value'>"SQL"</span>]
};
`
    },
    {
      title: "🗺️ My Journey So Far",
      code: `// Career Map 🧭
<span class='keyword'>const</span> journey = [
  <span class='value'>"Data Science Intern <span class='del'> @ Jackett.io </span>"</span>,
  <span class='value'>"Frontend Dev <span class='del'> @ Deloitte </span>"</span>,
];`
    },
   
    {
      title: "🧬 My Personality",
      code: `<span class='keyword'>const</span> me = {
  <span class='key'>curious</span>: <span class='value'>true</span>,
  <span class='key'>creative</span>: <span class='value'>true</span>,
  <span class='key'>lovesChallenges</span>: <span class='value'>true</span>,
  <span class='key'>caffeinePowered</span>: <span class='value'>true</span>,
  <span class='key'>teamPlayer</span>: <span class='value'>true</span>
};`
    },
    {
      title: "💡 My Philosophy",
      code: `function <span class='fn'>myPhilosophy</span>() {
  <span class='comment'>// I believe in crafting intuitive and elegant UIs, working with a growth mindset, and fostering a collaborative environment</span>
  <span class='keyword'>let</span> mindset = [<span class='value'>"innovate"</span>, <span class='value'>"fail"</span>, <span class='value'>"learn"</span>, <span class='value'>"grow"</span>];
}`
    },
    {
      title: "📬 Connect with Me",
      code:`<span class='key1'>  📧 Email:</span> <a href="mailto:siddharthsekhar2010@gmail.com" class='value'>siddharthsekhar2010@gmail.com</a>
  <span class='key1'>🔗 LinkedIn:</span> <a href="https://www.linkedin.com/in/siddharth-sekhar-singh-7626041a7" target="_blank" rel="noopener noreferrer" class='value'>Visit Profile↗</a>
  <span class='key1'>📄 Contact:</span> <span class='value'>+91 8144118241</span>`
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">{heading}</h1>
      <div className="timeline-container">
        {sections.map((section, index) => (
          <div className="timeline-item" key={index}>
            <Card
              title={section.title}
              code={section.code}
              align={index % 2 === 0 ? "left" : "right"}
            />
            {index !== sections.length - 1 && <div className="curve-line" />}
          </div>
        ))}
      </div>
      <div id="connect-with-me" />
    </div>
  );
};

export default PortfolioShowcase;
