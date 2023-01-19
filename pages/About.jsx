import React from 'react'
import Link from 'next/link'

const About = (props) => {
  return (
    <div id='about'>
      <p>
        Hello, I am a full-stack developer and recent graduate of{' '}
        <Link
          id="dev-acad-link"
          href="https://devacademy.co.nz/"
          target="blank"
        >
          Dev Academy Aotearoa
        </Link>
        . Before embarking on this journey of changing careers into the tech
        industry, I worked for eleven years as an internationally certified
        arborist across multiple countries. I led and developed effective teams
        as we worked collaboratively to solve complex and often hazardous
        problems. But I always dreamt of working with technology...
        <br />
        <br />
        Intrigued by the fertile soil of combining creativity with logic to
        build useful applications and solve real-world problems, I enjoyed
        periods of self-study. Finally, after acquiring Residency in New Zealand
        I was granted the opportunity to participate in Dev Academy and fully
        commit to changing careers.
        <br />
        <br />
        As I venture forth on this journey, I am learning every day. I am
        continuing to refine my skills with React and Redux, exploring the
        possibilities of 3D animation with Three.js and eventually expanding
        into data analysis and backend development with Python.
        <br />
        <br />
        If you believe in my potential to be an effective member of your team,
        please reach out to me!
      </p>
    </div>
  )
}

export default About
