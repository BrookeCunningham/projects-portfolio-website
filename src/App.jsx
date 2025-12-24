import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('work')

  const projects = [
    // Networking Projects
    {
      title: "Network Traffic Analyzer",
      description: "Real-time network packet analysis tool with protocol detection, bandwidth monitoring, and traffic visualization.",
      tech: "Python, Scapy, Wireshark, Socket Programming",
      github: "#",
      demo: "#"
    },
    {
      title: "Load Balancer Simulator",
      description: "Custom HTTP load balancer implementing round-robin and least-connections algorithms for distributed web traffic.",
      tech: "Python, Flask, Docker, Nginx",
      github: "#",
      demo: "#"
    },
    {
      title: "Network Topology Mapper",
      description: "Automated network discovery and visualization tool that maps device connections and network infrastructure.",
      tech: "Python, NetworkX, D3.js, SNMP",
      github: "#",
      demo: "#"
    },
    
    // Cybersecurity Projects
    {
      title: "Vulnerability Scanner",
      description: "Web application security scanner that detects common vulnerabilities like SQL injection, XSS, and CSRF attacks.",
      tech: "Python, BeautifulSoup, Requests, SQLMap",
      github: "#",
      demo: "#"
    },
    {
      title: "Password Strength Analyzer",
      description: "Tool for evaluating password security using entropy calculations, dictionary attacks, and breach database checks.",
      tech: "Python, HashCat, Have I Been Pwned API",
      github: "#",
      demo: "#"
    },
    
    // Economics Projects
    {
      title: "Stock Market Predictor",
      description: "Machine learning model for analyzing stock trends and predicting price movements using historical market data.",
      tech: "Python, TensorFlow, Pandas, Alpha Vantage API",
      github: "#",
      demo: "#"
    },
    {
      title: "Economic Data Dashboard",
      description: "Interactive visualization platform for macroeconomic indicators including GDP, inflation, and unemployment rates.",
      tech: "React, D3.js, Python, Federal Reserve API",
      github: "#",
      demo: "#"
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <h1 className="nav-logo">Brooke Cunningham</h1>
          <div className="nav-links">
            <button 
              onClick={() => scrollToSection('work')}
              className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
            <a 
              href="https://github.com/BrookeCunningham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
              aria-label="GitHub Profile"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Computer Science<br />Student & Developer</h2>
          <p>
          Second year Computer Science student at Durham University. Specialising in backend development, 
          network security, and financial technology.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="projects">
        <div className="container">
          <h2>Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* Placeholder Image */}
                <div className="project-image">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="project-label">Project Screenshot</span>
                </div>
                
                {/* Content */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-tech">{project.tech}</p>
                  <div className="project-links">
                    <a href={project.github} className="project-link">GitHub →</a>
                    <a href={project.demo} className="project-link">Live Demo →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="about" className="about">
        <div className="container">
          <div className="about-grid">
          <div>
            <h2>About Me</h2>
            <p>
              I'm in my second year of an MEng Computer Science degree at Durham University, 
              originally from Belfast where I achieved A*A*A in Maths, Physics, and Software 
              Systems Development at A-Level.
            </p>
            <p>
              Through my degree, I've built projects ranging from Python client-server messaging 
              systems and custom C memory allocators to penetration testing Linux systems in CTF 
              challenges. I'm particularly drawn to where finance meets technology—I've completed 
              Bloomberg financial market courses and I'm currently developing a Python tool for 
              processing and analyzing large-scale financial datasets.
            </p>
            <p>
              Outside of tech, I play for Durham University Women's Football Club 3rd Team and 
              I'm training for my first marathon.
            </p>
          </div>

          <div>
            <h3>Tech Stack</h3>
            <div className="tech-stack">

              <div className="tech-category">
                <h4>Languages</h4>
                <p>Python, Java, C, C#, JavaScript, TypeScript, HTML/CSS, SQL</p>
              </div>

              <div className="tech-category">
                <h4>Frameworks & Tools</h4>
                <p>React, Node.js, Express, SQL Server, SQLite</p>
              </div>

              <div className="tech-category">
                <h4>Development Tools</h4>
                <p>Git, GitHub, VS Code, Visual Studio, Linux, PowerShell, Figma</p>
              </div>

              <div className="tech-category">
                <h4>Technical Skills</h4>
                <p>Debugging, Agile/Scrum, Project Management, Technical Documentation, Problem-Solving</p>
              </div>

              <div className="tech-category">
                <h4>Soft Skills</h4>
                <p>Team Collaboration, Communication, Leadership, Adaptability, Critical Thinking</p>
              </div>

            </div>
          </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <div className="contact-links">
            <a href="mailto:brooke.cunningham@outlook.com" className="contact-link">
              brooke.cunningham@outlook.com
            </a>
            <span className="contact-separator">•</span>
            <a 
              href="https://github.com/BrookeCunningham"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <span className="contact-separator">•</span>
            <a 
              href="https://www.linkedin.com/in/brooke-cunningham-a5192a335"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <p>© 2024 Brooke Cunningham</p>
          <p>Built with React</p>
        </div>
      </footer>
    </>
  )
}

export default App
