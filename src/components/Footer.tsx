import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Mick Schlott</h3>
            <p>Frontend Engineer</p>
          </div>

          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mick-schlott/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:itismick@gmail.com">
              Email
            </a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Mick Schlott. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
