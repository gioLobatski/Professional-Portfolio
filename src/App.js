import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  // Slider settings (you can customize per slider if needed)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // number of blurbs visible at once
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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

      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <h1>Hi, I'm Paul Genre Lobaton</h1>
          <p className="typing">
            <span>Full Stack Developer</span>
            <span>Web Designer</span>
            <span>Programmer</span>
          </p>
        </div>
        <div className="header-right">
          <img src="/me.jpg" alt="Paul Genre Lobaton" className="profile-image" />
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer specializing in React, WordPress, and full-stack projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>

        {/* Owned Projects */}
        <div className="project-slider">
          <h3>Owned Projects</h3>
          <Slider {...sliderSettings}>
            <div className="blurb">
              <img src="/project1.jpg" alt="Project 1" />
              <p>Project 1 description</p>
            </div>
            <div className="blurb">
              <img src="/project2.jpg" alt="Project 2" />
              <p>Project 2 description</p>
            </div>
            <div className="blurb">
              <img src="/project3.jpg" alt="Project 3" />
              <p>Project 3 description</p>
            </div>
          </Slider>
        </div>

        {/* Projects I Am Part Of */}
        <div className="project-slider">
          <h3>Projects I Am Part Of</h3>
          <Slider {...sliderSettings}>
            <div className="blurb">
              <img src="/project4.jpg" alt="Project 4" />
              <p>Project 4 description</p>
            </div>
            <div className="blurb">
              <img src="/project5.jpg" alt="Project 5" />
              <p>Project 5 description</p>
            </div>
            <div className="blurb">
              <img src="/project5.jpg" alt="Project 5" />
              <p>Project 6 description</p>
            </div>
          </Slider>
        </div>

        {/* School Projects */}
        <div className="project-slider">
          <h3>School Projects</h3>
          <Slider {...sliderSettings}>
            <div className="blurb">
              <img src="/school1.jpg" alt="School Project 1" />
              <p>School Project 1 description</p>
            </div>
            <div className="blurb">
              <img src="/school2.jpg" alt="School Project 2" />
              <p>School Project 2 description</p>
            </div>
            <div className="blurb">
              <img src="/school3.jpg" alt="School Project 3" />
              <p>School Project 3 description</p>
            </div>
          </Slider>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skill-item">
            <img src="/js-logo.png" alt="JavaScript" />
            <progress value="80" max="100"></progress>
          </div>
          <div className="skill-item">
            <img src="/react-logo.png" alt="React" />
            <progress value="75" max="100"></progress>
          </div>
          <div className="skill-item">
            <img src="/wp-logo.png" alt="WordPress" />
            <progress value="90" max="100"></progress>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Job Title / Role</h3>
          <p>Description of what you did, responsibilities, and achievements.</p>
        </div>
        <div className="experience-item">
          <h3>Another Role</h3>
          <p>Another description goes here.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact-details">
          <p>Email: youremail@example.com</p>
          <p>Phone: +63 912 345 6789</p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
