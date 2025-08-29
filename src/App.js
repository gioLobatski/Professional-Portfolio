import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // 📌 Handle contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Message: ${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;

    window.location.href = `mailto:giolobaton1024@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <span className="logo">Gio</span>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Let's Talk!</a></li>
        </ul>
      </nav>

      {/* Header */}
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
          <img src="assets/images/woocommerce-placeholder.jpg" alt="Paul Genre Lobaton" className="profile-image" />
        </div>
      </header>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I’m a passionate developer specializing in WordPress Web Development and full-stack projects.</p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-slider">
          <h3>Owned Projects</h3>
          <Slider {...sliderSettings}>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
          </Slider>
        </div>

        <div className="project-slider">
          <h3>Projects I Am Part Of</h3>
          <Slider {...sliderSettings}>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="Project" /><p>Project description</p></div>
          </Slider>
        </div>

        <div className="project-slider">
          <h3>School Projects</h3>
          <Slider {...sliderSettings}>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="School Project" /><p>School Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="School Project" /><p>School Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="School Project" /><p>School Project description</p></div>
            <div className="blurb"><img src="assets/images/woocommerce-placeholder.jpg" alt="School Project" /><p>School Project description</p></div>
          </Slider>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skill-item">
            <img src="assets/images/js_logo.png" alt="JavaScript" />
            <progress value="80" max="100"></progress>
          </div>
          <div className="skill-item">
            <img src="assets/images/html_logo.png" alt="HTML" />
            <progress value="75" max="100"></progress>
          </div>
          <div className="skill-item">
            <img src="assets/images/css_logo.png" alt="CSS" />
            <progress value="90" max="100"></progress>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
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

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message/Inquiry" required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact-details">
          <p>Email: giolobaton1024@gmail.com</p>
          <p>Phone: +63 947 246 7693</p>
          <div className="social-icons">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;