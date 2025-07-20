import "./Header.scss"
import linkedIn from "../assets/linkedin.webp"
import mail from "../assets/mail.svg"

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-brand">
            <h1>Mick Schlott</h1>
            <p className="header-title">Frontend Engineer</p>
          </div>

          <nav className="header-nav">
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
            </ul>
          </nav>

          <div className="header-social">
            <a
              href="https://www.linkedin.com/in/mick-schlott/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <img src={linkedIn} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="mailto:itismick@gmail.com"
              className="social-link"
              aria-label="Send Email"
            >
              <img src={mail} alt="Email" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
