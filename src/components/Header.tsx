import "./Header.scss"
import linkedIn from "../assets/linkedin.webp"
import mail from "../assets/mail.svg"

const Header = () => {
  return (
    <header>
      <h1>Mick Schlott - Front-end Engineer</h1>

      <img
        src={linkedIn}
        className='Header-LinkedIn'
        onClick={() => window.open("https://www.linkedin.com/in/mick-schlott/", "_blank")}
        alt='LinkedIn profile'
      />

      <img
        src={mail}
        className='Header-Mail'
        onClick={() => window.open("mailto:itismick@gmail.com", "_blank")}
        alt='Mail'
      />
    </header>
  )
}

export default Header
