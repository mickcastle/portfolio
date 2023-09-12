import React from "react"
import mick from "../assets/kmack.jpg"
import "./Resume.scss"
import { cabinOfCode, skills, snowSoftware } from "./Data"

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
      <h4>
        <a href={path} target='_blank'>
          {job}
        </a>
        <span>{position}</span>
      </h4>
      <span>{period}</span>
    </div>
  )
}

interface ListOfThingsIDidProps {
  things: string[]
}

const ListOfThingsIDid: React.FunctionComponent<ListOfThingsIDidProps> = (props) => {
  return (
    <ul>
      {props.things.map((thing) => (
        <li key={thing}>{thing}</li>
      ))}
    </ul>
  )
}

const Skills = () => {
  return (
    <>
      <div className='Resume-Skills'>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

const Resume = () => {
  return (
    <section className='Resume'>
      <article className='Resume-Details'>
        <Skills />
        <div className='Resume-Experience'>
          <h2>Me</h2>
          <p className='Resume-About'>
            In addition to my technical expertise, I am a skilled problem solver and thrive in environments that require
            finding innovative solutions to challenging tasks. I am also well aware of the importance of collaborating
            with other team members to achieve common goals, build trust and always strive to deliver high-quality
            projects on time and according to specifications.
          </p>
          <h2>Experience</h2>

          <Workplace
            path='https://snowsoftware.com/'
            job='Snow Software'
            position='Frontend Engineer'
            period='2018 - present'
          />
          <ListOfThingsIDid things={snowSoftware} />
          <Workplace
            path='https://cabinofcode.com/'
            job='Cabin of Code'
            position='Frontend Engineer'
            period='2015 - 2018'
          />
          <ListOfThingsIDid things={cabinOfCode} />
        </div>
      </article>

      <article className='Resume-Profile'>
        <h2>Frontend engineer with a passion for UI/UX</h2>
        <img src={mick} alt='Mick Schlott' />
        <span>
          Code in the dark at
          <a href='https://nordicjs.com/' target='_blank'>
            Nordic.js
          </a>
        </span>
      </article>
    </section>
  )
}

export default Resume
