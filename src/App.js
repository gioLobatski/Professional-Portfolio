import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <span>Gio</span>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Let's Talk!</a></li>
        </ul>
      </nav>

      <header>
        <h1>Hi, I'm Paul Genre Lobaton</h1>
        <p className="typing">
          <span>Full Stack Developer</span>
          <span>Web Designer</span>
          <span>Programmer</span>
        </p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m a passionate developer specializing in React, WordPress, and full-stack projects.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>Description of your first project.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Description of your second project.</p>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>JavaScript, React, Node.js, PHP, WordPress, etc.</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>Work blah blah blah blah blah blah </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: youremail@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </section>
    </div>
  );
}

export default App;
