import React from 'react'
import NextLink from 'next/link'
import { Container, Link } from '@chakra-ui/react'

const About = (props) => {
  return (
    <Container id="about">
      <h1 id="greeting">Hello!</h1>
      <br />
      <p id="intro">
        My name is Michael Reisch. I am a full-stack developer and a recent
        graduate of{' '}
        <Link
          id="intro-link"
          as={NextLink}
          href="https://devacademy.co.nz/"
          target="_blank"
        >
          Dev Academy Aotearoa
        </Link>
        . I have experience working effectively in teams and building functional
        web-applications. I have a passion for learning and utlilizing my
        creativity to solve{' '}
        <Link
          id="intro-link"
          as={NextLink}
          href="https://urbanature.devacademy.online/"
          target="_blank"
        >
          real-world problems
        </Link>
        . I have an interest in learning Three.js and exploring data analysis
        and backend development with Python.
      </p>
      <br />
      <p id="prev-career">
        In my previous career I worked as a leading internationally-certified
        arborist for over a decade. I hope to bring my experience of working in
        tight-knit teams to the tech industry and fulfill my potential.
      </p>
      <br />
      <p id="free-time">
        In my free time I write songs on piano and guitar, play these songs in a
        band, ride a super cool e-bike and enjoy rock climbing.
      </p>
      <br />
      <p>
        If you would like to discuss opportunities to work together, please
        reach out to me : )
      </p>
    </Container>
  )
}

export default About
