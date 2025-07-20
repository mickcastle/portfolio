import React from "react"
import mick from "../assets/kmack.jpg"
import "./Resume.scss"
import { cabinOfCode, consid, skills, snowSoftware, techSeed } from "./Data"

interface WorkplaceProps {
  job: string
  position: string
  period: string
  path: string
}

const Workplace: React.FunctionComponent<WorkplaceProps> = (props) => {
  const { job, position, period, path } = props

  return (
    <div className='workplace'>
      <div className='workplace-header'>
        <h4 className='workplace-title'>
          <a href={path} target='_blank' rel="noopener noreferrer">
            {job}
          </a>
        </h4>
        <span className='workplace-position'>{position}</span>
      </div>
      <span className='workplace-period'>{period}</span>
    </div>
  )
}

interface ListOfThingsIDidProps {
  things: string[]
}

const ListOfThingsIDid: React.FunctionComponent<ListOfThingsIDidProps> = (props) => {
  return (
    <ul className='achievements-list'>
      {props.things.map((thing, index) => (
        <li key={index} className='achievement-item'>{thing}</li>
      ))}
    </ul>
  )
}

const Skills = () => {
  // Highlighted skills with icons
  const highlightedSkills = [
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "UX", icon: "🎨" },
    { name: "CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" }
  ]

  // Other skills
  const otherSkills = skills.filter(skill =>
    !highlightedSkills.some(highlighted => highlighted.name === skill)
  )

  return (
    <section id="skills" className='skills-section'>
      <h2 className='section-title'>Skills & Technologies</h2>

      {/* Highlighted Skills */}
      <div className='highlighted-skills'>
        <h3 className='skills-subtitle'>Core Technologies</h3>
        <div className='highlighted-skills-grid'>
          {highlightedSkills.map((skill, index) => (
            <div key={index} className='highlighted-skill-item'>
              <span className='skill-icon'>{skill.icon}</span>
              <span className='skill-name'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div className='other-skills'>
        <h3 className='skills-subtitle'>Additional Skills</h3>
        <div className='skills-grid'>
          {otherSkills.map((skill, index) => (
            <div key={index} className='skill-item'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Resume = () => {
  return (
    <main className='resume'>
      <div className='container'>
        {/* Hero Section */}
        <section className='hero-section'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h1 className='hero-title'>Mick Schlott</h1>
              <p className='hero-subtitle'>Frontend Engineer</p>
              <p className='hero-description'>
                Experienced frontend developer passionate about creating exceptional user experiences
                and building scalable web applications with modern technologies.
              </p>
            </div>
            <div className='hero-image'>
              <img src={mick} alt='Mick Schlott' className='profile-image' />
              <p className='hero-fun-fact'>
                Code in the dark at{' '}
                <a href='https://nordicjs.com/' target='_blank' rel="noopener noreferrer">
                  Nordic.js
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className='about-section'>
          <h2 className='section-title'>About Me</h2>
          <div className='about-content'>
            <p className='about-text'>
              Mick is an experienced frontend developer who enjoys bringing UI designs to life and meticulously creating
              the logic behind them. He has primarily worked with technologies such as TypeScript, SCSS, HTML. He also has
              experience with frameworks like React, Next.js and Jest for unit testing. Throughout his career, Mick has
              held roles as a Frontend Developer and Software Engineer, where his technical skills and ability to
              collaborate with designers and project teams have made him particularly adept at creating user-friendly and
              scalable web applications.
            </p>
            <p className='about-text'>
              He has extensive experience working with various technologies and frameworks within web development. Mick
              has contributed to improving user experience and streamlining the development process. His career has been
              marked by a continuous pursuit of enhancing his coding and design knowledge, making him well-suited for
              complex and dynamic development projects.
            </p>
            <p className='about-text'>
              Mick also has experience in creating and integrating REST APIs, managing package managers like NPM/Yarn/Bun,
              and working according to WCAG standards to ensure accessibility. He is familiar with creating and
              maintaining Web Components and has extensively worked with version control in Git and project management in
              Jira/Azure Devops. He has a strong background in working according to agile methodologies.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <section id="experience" className='experience-section'>
          <h2 className='section-title'>Professional Experience</h2>

          <div className='experience-timeline'>
            <div className='experience-item'>
              <Workplace
                path='https://consid.com/'
                job='Consid'
                position='IT Consultant'
                period='2025 - present'
              />
              <ListOfThingsIDid things={consid} />
            </div>

            <div className='experience-item'>
              <Workplace
                path='https://techseed.se/'
                job='Techseed'
                position='Front-end Developer'
                period='2024 - present'
              />
              <ListOfThingsIDid things={techSeed} />
            </div>

            <div className='experience-item'>
              <Workplace
                path='https://snowsoftware.com/'
                job='Snow Software'
                position='Front-end Engineer'
                period='2018 - 2024'
              />
              <ListOfThingsIDid things={snowSoftware} />
            </div>

            <div className='experience-item'>
              <Workplace
                path='https://cabinofcode.com/'
                job='Cabin of Code'
                position='Front-end Engineer'
                period='2015 - 2018'
              />
              <ListOfThingsIDid things={cabinOfCode} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Resume
